import React from "react";

const services = [
  {
    title: "Appointment Booking",
    description: "Easily schedule appointments with top doctors.",
    image: "https://plus.unsplash.com/premium_photo-1661373312466-ff768d31b747?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Online Consultation",
    description: "Get expert medical advice via video calls.",
    image: "https://images.unsplash.com/photo-1565688527174-775059ac429c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Medical Records",
    description: "Securely store and access your health records.",
    image: "https://plus.unsplash.com/premium_photo-1726769176212-1ab1fd60f42a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "24/7 Emergency Care",
    description: "Get immediate medical assistance anytime.",
    image: "https://images.unsplash.com/photo-1532883130016-f3d311140ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pharmacy Services",
    description: "Order medicines online with doorstep delivery.",
    image: "https://plus.unsplash.com/premium_photo-1672759455710-70c879daf721?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Insurance",
    description: "Explore insurance plans that cover your medical needs.",
    image: "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ServicePage = () => {
  return (
    <div className="bg-[#0d121f] text-white min-h-screen py-16 px-6 mt-[2rem] ">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-white">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="text-gray-400 text-lg mt-3">
          Comprehensive healthcare solutions designed for you.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl shadow-lg rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-To-Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-extrabold text-white">
          Transform Your <span className="text-blue-500">Healthcare Experience</span>
        </h2>
        <p className="text-gray-400 text-lg mt-2">
          Join thousands of satisfied patients & doctors today.
        </p>
        <button className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
