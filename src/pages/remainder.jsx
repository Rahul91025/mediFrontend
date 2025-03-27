import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bell, Clock, Calendar, PlusCircle, StopCircle } from "lucide-react";

const MedicineReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [isPlaying, setIsPlaying] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      reminders.forEach((reminder) => {
        if (reminder.time === currentTime) {
          startAlarm(reminder);
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [reminders]);

  const startAlarm = (reminder) => {
    if (!isPlaying) {
      const audio = new Audio("/notification.mp3");
      audio.loop = true; // Loop the audio continuously
      audio.play()
        .then(() => {
          setIsPlaying(audio); // Store the audio instance in state
          toast.success(`⏰ Time for ${reminder.medicine} - ${reminder.dosage} Dosage!`, {
            position: "top-right",
            autoClose: false, // Keep toast visible
          });
        })
        .catch(error => console.error("Error playing sound:", error));
    }
  };

  const stopAlarm = () => {
    if (isPlaying) {
      isPlaying.pause();
      isPlaying.currentTime = 0; // Reset to start
      setIsPlaying(null);
      toast.info("⏹️ Alarm Stopped!");
    }
  };

  const addReminder = () => {
    if (medicine && time && dosage) {
      const newReminder = { medicine, time, dosage, frequency };
      setReminders([...reminders, newReminder]);
      setMedicine("");
      setTime("");
      setDosage("");
      toast.success("✅ Reminder Set Successfully!");
    } else {
      toast.error("⚠️ Please fill all fields!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">💊 Medicine Reminder</h2>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <Bell className="text-blue-400" />
            <input
              type="text"
              placeholder="Medicine Name"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              className="bg-transparent outline-none ml-3 w-full"
            />
          </div>

          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <Clock className="text-blue-400" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-transparent outline-none ml-3 w-full"
            />
          </div>

          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <Calendar className="text-blue-400" />
            <input
              type="text"
              placeholder="Dosage (e.g. 1 Tablet)"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="bg-transparent outline-none ml-3 w-full"
            />
          </div>

          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="bg-transparent outline-none ml-3 w-full"
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addReminder}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
          >
            <PlusCircle /> <span>Add Reminder</span>
          </motion.button>

          {isPlaying && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={stopAlarm}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 mt-4"
            >
              <StopCircle /> <span>Stop Alarm</span>
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MedicineReminder;
