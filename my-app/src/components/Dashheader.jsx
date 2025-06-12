import React, { useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';

// Import the Audiowide font
const fontImport = document.createElement('style');
fontImport.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
`;
document.head.appendChild(fontImport);

const Dashheader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        <span style={{ fontFamily: "'Audiowide', sans-serif" }}>
          Hive<span className="text-red-500">X</span>perience
        </span>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600" />
        </div>
        
        {/* User Profile Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {/* Avatar */}
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AR</span>
            </div>
            
            {/* User Name and Dropdown Arrow */}
            <div className="flex items-center gap-1 text-gray-700">
              <span className="text-sm font-medium">Ayoub Rahmoun</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          
          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="py-2">
                {/* Profile Settings */}
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                    />
                  </svg>
                  Profile Settings
                </div>

                {/* Account */}
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                    />
                  </svg>
                  Account
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2"></div>

                {/* Sign Out */}
                <div className="px-4 py-2 text-sm text-red-500 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12h-6m0 0l3-3m-3 3l3 3"
                    />
                </svg>
                  Sign Out
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Dashheader;