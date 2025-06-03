// src/pages/Jobseeker.jsx
import React from "react";
import "./JobSeeker.css"; // Import local CSS
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import JobseekerHero from "../components/JobseekerHero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Jobseeker = () => {
  return (
    <div className="jobseeker-page">
      <Header />
      <SubHeader />
      <JobseekerHero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default Jobseeker;
