import React, { useState } from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';

const Header = ({ userName = 'Ayoub Rahmoun', actionButtons = null, onSidebarToggle, sidebarOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="rounded-2xl bg-blue-800 text-white px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg mb-8 relative">
      {/* Sidebar Toggle (mobile/tablet) */}
      <button
        className="absolute left-4 top-6 md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-blue-700 z-30"
        onClick={onSidebarToggle}
        aria-label="Toggle sidebar"
      >
        <Menu className="w-7 h-7" />
      </button>
      {/* Left: Logo and Welcome */}
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <div className="text-2xl font-bold" style={{ fontFamily: 'Audiowide, sans-serif' }}>
          Hive<span className="text-red-500">X</span>perience
        </div>
        <div className="ml-6">
          <div className="text-lg font-semibold">Welcome back, {userName.split(' ')[0]}!</div>
          <div className="text-sm text-blue-100">Here's what's happening with your jobs and candidates today.</div>
        </div>
      </div>
      {/* Right: Actions and User */}
      <div className="flex items-center gap-6">
        {actionButtons}
        {/* Notification Bell */}
        <div className="relative p-2 hover:bg-blue-700 rounded-lg cursor-pointer">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </div>
        {/* User Profile Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center gap-3 p-2 hover:bg-blue-700 rounded-lg cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-base font-medium">{userName.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">{userName}</span>
              <ChevronDown className="w-4 h-4 text-blue-100" />
            </div>
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg z-50">
              <div className="py-2">
                <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Profile Settings</div>
                <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Account</div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer">Sign Out</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;