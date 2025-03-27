import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#121826] text-white flex justify-between items-center py-4 px-8 w-full fixed top-0 shadow-md z-50 backdrop-blur-md bg-opacity-80">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">🩺</span> 
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">MedConnect</span>
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-300 hover:text-white text-lg font-medium">Home</Link>
        <Link to="/patients" className="text-gray-300 hover:text-white text-lg font-medium">Patient</Link>
        <Link to="/services" className="text-gray-300 hover:text-white text-lg font-medium">Services</Link>
        <Link to="/doctor" className="text-gray-300 hover:text-white text-lg font-medium">Doctor</Link>
        <Link to="/get-started" className="text-gray-300 hover:text-white text-lg font-medium">Contact</Link>
      </div>

      {/* CTA Button */}
      <Link to="/get-started">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
