import React from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// TODO: Remplacer ce hook temporaire par le vrai import quand AuthContext sera prêt
const useAuth = () => {
  return {
    user: {
      name: 'Guest User', // valeur factice
    },
  };
};

// Import the Audiowide font
const fontImport = document.createElement('style');
fontImport.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
`;
document.head.appendChild(fontImport);

const DashHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get initials from user's name
  const getInitials = (name) => {
    return name
      ?.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase() || 'U';
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 w-full">
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

        {/* User Profile - Static, no dropdown */}
        <div 
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          onClick={() => navigate('/profile')}
        >
          {/* Avatar */}
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">{getInitials(user?.name)}</span>
          </div>
          {/* User Name */}
          <div className="text-gray-700">
            <span className="text-sm font-medium">{user?.name || 'User'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
