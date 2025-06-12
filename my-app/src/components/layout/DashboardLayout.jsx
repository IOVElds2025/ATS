import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { Search, Bell, User } from 'lucide-react';

// Using a placeholder avatar from a reliable source
const placeholderAvatar = 'https://ui-avatars.com/api/?name=User&background=4f46e5&color=fff&size=40';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
              
              <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500"></span>
              </button>
              
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center"
                  src={placeholderAvatar}
                  alt="User avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMTJjMi4yMSAwIDQtMS43OSA0LTRzLTEuN79TMTIgNCA4IDQgNCA1Ljc5IDQgOHMxLjc5IDQgNCA0em0wIDJjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6Ii8+PC9zdmc+'
                  }}
                />
                <span className="ml-2 text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
