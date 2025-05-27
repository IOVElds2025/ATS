import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HiveExperience = () => {
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  
  // Load and transition to options directly
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
      setShowOptions(true);
    }, 1000); // Short loading delay
  }, []);
  
  // Navigate to specific pages
  const navigateToClient = () => {
    navigate('/hive-experience/client');
  };
  
  const navigateToCandidate = () => {
    navigate('/hive-experience/candidate');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f8]">
      {/* Header with navigation options */}
      <header className={`bg-[#1F325A] text-white py-4 px-6 shadow-md transition-all duration-500 ${showOptions ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Hive<span className="text-[#E84435]">X</span>perience</h1>
            <span className="ml-2 text-[#D0AD80]">By LDS</span>
          </div>
          <nav>
            <ul className="flex space-x-6 font-semibold">
              <li>
                <button 
                  onClick={navigateToClient}
                  className="hover:text-[#D0AD80] transition-colors px-6 py-2 border-b-2 border-transparent hover:border-[#D0AD80]"
                >
                  Client
                </button>
              </li>
              <li>
                <button 
                  onClick={navigateToCandidate}
                  className="hover:text-[#D0AD80] transition-colors px-6 py-2 border-b-2 border-transparent hover:border-[#D0AD80]"
                >
                  Candidate
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col relative">
        {/* Centered content after animation */}
        {showOptions && (
          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-2xl transition-all duration-500 animate-fadeIn">
              <h2 className="text-4xl font-bold mb-4 text-[#1F325A]">
                Welcome to Hive<span className="text-[#E84435]">X</span>perience
              </h2>
              <p className="text-lg text-[#5F6C87] mb-8">
                Choose your experience path. Are you a client looking for talent, or a candidate seeking opportunities?
              </p>
              
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={navigateToClient}
                  className="px-8 py-3 bg-[#1F325A] text-white font-bold rounded-full hover:bg-[#0A162F] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  I'm a Client
                </button>
                <button 
                  onClick={navigateToCandidate}
                  className="px-8 py-3 bg-[#E84435] text-white font-bold rounded-full hover:bg-[#c93a2d] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  I'm a Candidate
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f5f5f8] bg-opacity-90 z-20">
            <div className="w-24 h-24 relative">
              <div className="absolute w-full h-full border-4 border-[#D0AD80] border-t-[#1F325A] rounded-full animate-spin"></div>
            </div>
            <div className="text-[#1F325A] font-medium mt-4">Loading Hive Experience...</div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className={`bg-[#0A162F] text-white py-6 px-6 transition-all duration-500 ${showOptions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
        <div className="container mx-auto">
          <div className="text-center text-[#D0AD80]">
            <p>&copy; {new Date().getFullYear()} HiveXperience by LDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HiveExperience;