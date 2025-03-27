import React from "react";

const features = [
  {
    icon: "\uD83C\uDFE5",
    title: "Expert Doctors",
    description: "Connect with qualified healthcare professionals specialized in various fields",
  },
  {
    icon: "\uD83D\uDCC5",
    title: "Easy Scheduling",
    description: "Book and manage appointments with our intuitive scheduling system",
  },
  {
    icon: "\u23F0",
    title: "24/7 Access",
    description: "Access your medical information and schedule appointments anytime",
  },
  {
    icon: "\uD83D\uDEE1️",
    title: "Secure Platform",
    description: "Your health data is protected with enterprise-grade security",
  },
  {
    icon: "\u2B50",
    title: "Quality Care",
    description: "Receive personalized attention and comprehensive care",
  },
  {
    icon: "\uD83D\uDC64",
    title: "Patient Portal",
    description: "Manage your health journey through our dedicated patient portal",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#0a0f1c] text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose MedConnect?</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Experience healthcare management reimagined with our comprehensive suite of features.
        </p>
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#121826] p-6 rounded-lg shadow-lg text-center border border-gray-700">
            <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
