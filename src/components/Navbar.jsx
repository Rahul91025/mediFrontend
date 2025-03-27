import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121826] text-white flex justify-between items-center py-4 px-6 md:px-8 w-full fixed top-0 shadow-md z-50 backdrop-blur-md bg-opacity-80">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">🩺</span>
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">MedConnect</span>
      </h1>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <Link to="/" className="text-gray-300 hover:text-white text-lg font-medium">Home</Link>
        <Link to="/patients" className="text-gray-300 hover:text-white text-lg font-medium">Patient</Link>
        <Link to="/dash" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Dashboard</Link>
        <Link to="/services" className="text-gray-300 hover:text-white text-lg font-medium">Services</Link>
        <Link to="/doctor" className="text-gray-300 hover:text-white text-lg font-medium">Doctor</Link>
        <Link to="/reminder" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>reminder</Link>
        <Link to="/get-started" className="text-gray-300 hover:text-white text-lg font-medium">Contact</Link>
      </div>

      {/* CTA Button - Hidden on Mobile */}
      <div className="hidden md:block">
        <Link to="/start">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#121826] flex flex-col items-center space-y-6 py-6 md:hidden shadow-md">
          <Link to="/" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/patients" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Patient</Link>
          <Link to="/dash" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/services" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/doctor" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Doctor</Link>
          <Link to="/reminder" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>reminder</Link>
          <Link to="/get-started" className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          
          {/* CTA Button for Mobile */}
          <Link to="/start">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
