import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import ServicePage from "./pages/Service";
import FindDoctor from "./pages/patient";
import Main from "./pages/Main";
import DoctorDashboard from "./pages/Doctor";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <>
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/patients" element={<FindDoctor />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/get-started" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
