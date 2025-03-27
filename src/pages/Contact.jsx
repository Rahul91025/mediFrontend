import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  { id: 1, label: "Email", value: "support@healthcare.com", icon: <FaEnvelope className="text-blue-400" /> },
  { id: 2, label: "Phone", value: "+91 9876543210", icon: <FaPhone className="text-green-400" /> },
  { id: 3, label: "Location", value: "123 Health Street, Medical City", icon: <FaMapMarkerAlt className="text-red-400" /> },
  { id: 4, label: "Working Hours", value: "Mon - Sat: 9 AM - 6 PM", icon: <FaClock className="text-yellow-400" /> },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-12 mt-[4rem]">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-400 tracking-wide">
        Contact Us
      </h1>

      {/* Contact Details Section */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 px-4 max-w-4xl mx-auto">
        {contactDetails.map((contact) => (
          <div
            key={contact.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl border border-gray-700 flex items-center gap-4"
          >
            {contact.icon}
            <div>
              <h2 className="text-xl font-semibold text-white">{contact.label}</h2>
              <p className="text-gray-300">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">Send Us a Message</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
