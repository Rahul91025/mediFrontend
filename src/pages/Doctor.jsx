import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserMd, FaCheckCircle, FaTimesCircle, FaPlus } from "react-icons/fa";

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Doe", date: "2024-03-30", status: "Pending" },
    { id: 2, patient: "Jane Smith", date: "2024-04-01", status: "Pending" },
  ]);
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const addDoctor = async () => {
    if (doctorName.trim() === "" || specialization.trim() === "" || contactNumber.trim() === "")
      return toast.error("All fields are required!");

    const newDoctor = { name: doctorName, specialization, contact: contactNumber };

    try {
      setLoading(true);
      const response = await axios.post("https://backend1-47z6.onrender.com/api/doctors", newDoctor);

      if (response.status === 201) {
        setDoctors([...doctors, { id: doctors.length + 1, ...newDoctor }]);
        toast.success("Doctor added successfully!");
        setDoctorName("");
        setSpecialization("");
        setContactNumber("");
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
      toast.error("Failed to add doctor. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = (id, status) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-12 mt-[4rem]">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-400 tracking-wide">
        Doctor Dashboard 🩺
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 px-4">
        {/* Add Doctor Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <FaUserMd className="text-blue-400" /> Add a New Doctor
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Doctor Name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Specialization"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white font-medium rounded-lg flex items-center gap-2 transition w-full justify-center"
              onClick={addDoctor}
              disabled={loading}
            >
              {loading ? "Adding..." : <><FaPlus /> Add Doctor</>}
            </button>
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">Doctors List</h3>
          <ul className="mt-2">
            {doctors.length === 0 ? (
              <p className="text-gray-400">No doctors added yet.</p>
            ) : (
              doctors.map((doctor) => (
                <li key={doctor.id} className="py-2 border-b border-gray-600 text-lg text-gray-300">
                  <span className="font-semibold">{doctor.name}</span> - {doctor.specialization} - {doctor.contact}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Manage Appointments Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Manage Appointments</h2>
          {appointments.length === 0 ? (
            <p className="text-gray-400">No pending appointments.</p>
          ) : (
            <ul>
              {appointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="flex justify-between items-center border-b border-gray-600 py-3"
                >
                  <span className="text-lg text-gray-300">
                    {appointment.patient} - {appointment.date}
                  </span>
                  {appointment.status === "Pending" ? (
                    <div className="flex gap-2">
                      <button
                        className="bg-green-500 hover:bg-green-600 px-3 py-1 text-white font-medium rounded flex items-center gap-1 transition"
                        onClick={() => updateAppointmentStatus(appointment.id, "Approved")}
                      >
                        <FaCheckCircle /> Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 px-3 py-1 text-white font-medium rounded flex items-center gap-1 transition"
                        onClick={() => updateAppointmentStatus(appointment.id, "Rejected")}
                      >
                        <FaTimesCircle /> Reject
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded text-white font-medium ${
                        appointment.status === "Approved" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div> 
    </div>
  );
};

export default DoctorDashboard;
