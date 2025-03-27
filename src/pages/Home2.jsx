import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-[#0a0f1c] flex flex-col items-center justify-center py-20 px-6 text-center">
        <hr className="border-t-0.5 border-white w-full my-6" />

      {/* Heading */}
      <h2 className="text-white text-4xl font-extrabold tracking-wide mt-[2rem]">
        Ready to Get Started?
      </h2>
      
      {/* Subtext */}
      <p className="text-gray-400 text-lg mt-3 max-w-lg">
        Join thousands of patients and healthcare providers who trust{" "}
        <span className="text-blue-400 font-semibold">MedConnect</span>.
      </p>
      
      {/* Call-to-Action Button */}
      <button className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
        Find Your Doctor Now
      </button>
    </div>
  );
};

export default GetStarted;
