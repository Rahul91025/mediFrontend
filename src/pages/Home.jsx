import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative bg-[#0a0f1c] bg-[url('/grid-pattern.svg')] min-h-screen flex flex-col items-center justify-center text-white px-6 overflow-hidden">
      
      {/* Background Grid Pattern with Gradient */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-black/80 pointer-events-none"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center flex flex-col items-center mt-16 relative"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Your Health Journey Starts Here
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl text-lg">
          Connect with top healthcare professionals, manage appointments, and take control of your health journey with our all-in-one platform.
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Find a Doctor <span className="ml-2">➡️</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Patient Portal <span className="ml-2">👤</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
