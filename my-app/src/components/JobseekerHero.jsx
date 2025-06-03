import React from 'react';
import recruitingVideo from '../assets/video/recruiting-video.mp4';

const JobseekerHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-inter">
      {/* Import Google Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={recruitingVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Find Your <span className="text-[#F65A4E]">Dream Job</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200 font-normal">
          Connect with top employers and discover opportunities that match your skills and ambitions.
        </p>
        <button className="bg-[#F65A4E] hover:bg-[#e44c41] px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105">
          Explore Opportunities
        </button>
      </div>
    </section>
  );
};

export default JobseekerHero;
