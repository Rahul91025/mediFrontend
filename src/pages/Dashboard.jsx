import React from "react";
import { motion } from "framer-motion";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { HeartPulse, Pill, Activity, AlertTriangle } from "lucide-react";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

const PatientDashboard = () => {
  // Sample data for each chart
  const heartRateData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Heart Rate (BPM)",
        data: [72, 78, 85, 90, 88, 95, 100],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const medicationAdherenceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Medication Adherence (%)",
        data: [80, 85, 78, 90],
        backgroundColor: ["#22C55E", "#EAB308", "#F43F5E", "#3B82F6"],
      },
    ],
  };

  const recoveryProgressData = {
    labels: ["Excellent", "Good", "Moderate", "Poor"],
    datasets: [
      {
        data: [40, 35, 15, 10],
        backgroundColor: ["#34D399", "#60A5FA", "#FACC15", "#F87171"],
      },
    ],
  };

  const readmissionTrendsData = {
    labels: ["No Readmission", "Readmitted"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["#10B981", "#EF4444"],
      },
    ],
  };

  return (
    <div className="min-h-screen mt-[4rem] bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Dashboard Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6"
      >
        Patient Recovery Dashboard
      </motion.h1>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Heart Rate Monitoring */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <HeartPulse className="text-red-500" />
            Heart Rate Monitoring
          </h2>
          <Line data={heartRateData} />
        </motion.div>

        {/* Medication Adherence */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Pill className="text-green-500" />
            Medication Adherence
          </h2>
          <Bar data={medicationAdherenceData} />
        </motion.div>

        {/* Recovery Progress */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Activity className="text-blue-500" />
            Recovery Progress
          </h2>
          <Pie data={recoveryProgressData} />
        </motion.div>

        {/* Readmission Trends */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <AlertTriangle className="text-yellow-500" />
            Readmission Trends
          </h2>
          <Doughnut data={readmissionTrendsData} />
        </motion.div>
      </div>
    </div>
  );
};

export default PatientDashboard;
