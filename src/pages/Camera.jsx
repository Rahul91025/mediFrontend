import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { FiWatch } from "react-icons/fi"; // Smartwatch icon

const MonitoringPage = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [watchConnected, setWatchConnected] = useState(false);
  const [healthData, setHealthData] = useState({
    heartRate: 0,
    oxygenLevel: 0,
    temperature: 0,
  });

  // Simulate real-time smartwatch health tracking
  useEffect(() => {
    if (watchConnected) {
      const interval = setInterval(() => {
        setHealthData({
          heartRate: Math.floor(Math.random() * (100 - 60) + 60), // 60-100 bpm
          oxygenLevel: Math.floor(Math.random() * (100 - 95) + 95), // 95-100%
          temperature: (36 + Math.random()).toFixed(1), // 36.0-37.5°C
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [watchConnected]);

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
  };

  const connectWatch = () => {
    setWatchConnected(!watchConnected);
  };

  return (
    <div className="relative bg-[#0a0f1c] min-h-screen flex flex-col items-center justify-center text-white px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-black/80 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center flex flex-col items-center mt-16 relative"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          AI-Powered Health Monitoring
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl text-lg">
          Track real-time vital signs, receive alerts, and stay on top of recovery.
        </p>
      </motion.div>

      {/* Health Metrics from Smartwatch */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-400">Heart Rate</h3>
          <p className="text-4xl font-bold">{watchConnected ? `${healthData.heartRate} bpm` : "--"}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-green-400">Oxygen Levels</h3>
          <p className="text-4xl font-bold">{watchConnected ? `${healthData.oxygenLevel}%` : "--"}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-yellow-400">Temperature</h3>
          <p className="text-4xl font-bold">{watchConnected ? `${healthData.temperature}°C` : "--"}</p>
        </motion.div>
      </div>

      {/* AI Camera Section */}
      <div className="mt-10 flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          onClick={toggleCamera}
        >
          {cameraOn ? "Close Camera" : "Open Camera for AI Scan"} 🎥
        </motion.button>

        {cameraOn && (
          <div className="mt-6 bg-gray-900 p-4 rounded-lg shadow-lg">
            <Webcam
              ref={webcamRef}
              className="rounded-lg shadow-lg w-96 h-64"
              screenshotFormat="image/png"
            />
            <p className="text-gray-400 mt-2">Analyzing face for health predictions...</p>
          </div>
        )}
      </div>

      {/* Connect with Smartwatch Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`mt-8 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${
          watchConnected
            ? "bg-gradient-to-r from-green-500 to-teal-500"
            : "bg-gradient-to-r from-gray-500 to-gray-700"
        } text-white flex items-center gap-2`}
        onClick={connectWatch}
      >
        <FiWatch size={24} />
        {watchConnected ? "Connected to Smartwatch ✅" : "Connect with Smartwatch ⌚"}
      </motion.button>

      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
        onClick={() => navigate("/")}
      >
        Back to Home <span className="ml-2">🏠</span>
      </motion.button>
    </div>
  );
};

export default MonitoringPage;
