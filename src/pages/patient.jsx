import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaStar, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const addresses = [
  "123 Heart Center, Medical District",
  "456 Brain & Spine Center",
  "789 Children's Clinic",
  "222 Bone & Joint Hospital",
  "789 Skin Care Clinic",
  "101 Wellness Center",
  "555 General Hospital",
  "300 City Health Hub"
];

const slots = [2, 3, 4, 5, 6, 3, 4, 5];
const ratings = [4.6, 4.7, 4.8, 4.9, 4.5, 4.9, 4.7, 4.8];

const categories = [
  "All Specialties",
  "Cardiologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Dermatologist",
  "General Physician"
];

export default function FindDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Specialties");

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then(response => response.json())
      .then(data => {
        const enrichedData = data.map((doctor, index) => ({
          ...doctor,
          address: addresses[index % addresses.length],
          slots: slots[index % slots.length],
          rating: ratings[index % ratings.length]
        }));
        setDoctors(enrichedData);
      })
      .catch(error => console.error("Error fetching doctors:", error));
  }, []);

  const filteredDoctors =
    selectedCategory === "All Specialties"
      ? doctors
      : doctors.filter((doctor) => doctor.specialization === selectedCategory);

  const handleBookAppointment = async (doctorId) => {
    try {
      const appointmentDate = new Date().toISOString();

      const response = await fetch(`http://localhost:5000/api/doctors/${doctorId}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName: "Rahul Gupta", // Replace with actual user input
          date: appointmentDate,
        }),
      });

      if (response.ok) {
        toast.success("🎉 Appointment booked successfully!");
        
        // Play notification sound
        const audio = new Audio("/notification.mp3");
        audio.play().catch(error => console.error("Error playing sound:", error));

      } else {
        toast.error("❌ Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("⚠️ An error occurred while booking the appointment.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-12 mt-[4rem]">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-400 tracking-wide">
        Find Your Doctor
      </h1>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-12 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="🔍 Search by name, specialty, or location..."
          className="w-full p-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <select
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition cursor-pointer"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category} className="bg-gray-800 text-white">
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl relative border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-white mb-1">{doctor.name}</h2>
              <p className="text-blue-300 text-lg font-medium">{doctor.specialization}</p>

              <div className="flex items-center gap-2 text-gray-300 mt-3 mb-1">
                <FaMapMarkerAlt className="text-blue-400" /> <span>{doctor.address}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <FaPhone className="text-green-400" /> <span>{doctor.contact}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <FaClock className="text-yellow-400" /> <span>{doctor.slots} available slots</span>
              </div>

              <div className="absolute top-4 right-4 flex items-center text-yellow-400 font-semibold">
                <FaStar /> <span className="ml-1">{doctor.rating}</span>
              </div>

              <button
                onClick={() => handleBookAppointment(doctor._id)}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 rounded-xl mt-4 shadow-md transition"
              >
                Book Appointment
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-3">No doctors available in this category.</p>
        )}
      </div>
    </div>
  );
}
