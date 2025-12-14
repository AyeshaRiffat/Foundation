// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Home from "./Components/Home";
import AboutSection from "./Components/AboutSection";
import ContactPage from "./Components/ContactPage";
import CampaignDetails from "./Components/CampaignDetails";
import Footer from "./Components/Footer";

// Import Navbar with routing
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is included here for global layout */}

      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route for About Section */}
        <Route path="/about" element={<AboutSection />} />

        {/* Route for Campaign Details */}
        <Route path="/campaigns" element={<CampaignDetails />} />

        {/* Route for Contact Section */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Footer will be common on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
