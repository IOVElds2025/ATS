import React from 'react';
import { LayoutDashboard, PenSquare, Users, User, Settings } from 'lucide-react';

// TODO: Remplacer ce hook temporaire par le vrai import quand AuthContext sera prêt
const useAuth = () => {
  return {
    user: { name: 'Guest' }, // valeur factice, à adapter selon besoin
  };
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const { user } = useAuth();

  const menuItems = [
    { 
      icon: () => (
        <div className="w-5 h-5 flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded bg-current" />
        </div>
      ),
      label: 'Dashboard', 
      href: '/dashboard',
      isActive: window.location.pathname === '/dashboard'
    },
    { 
      icon: PenSquare, 
      label: 'Create Request', 
      href: '/create-request',
      isActive: window.location.pathname === '/create-request'
    },
    { 
      icon: Users, 
      label: 'Candidates', 
      href: '/candidates',
      isActive: window.location.pathname === '/candidates'
    },
    { 
      icon: User, 
      label: 'Profile', 
      href: '/profile',
      isActive: window.location.pathname === '/profile'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      href: '/settings',
      isActive: window.location.pathname === '/settings'
    }
  ];

  return (
    <div className="fixed h-screen z-50">
      {/* Sidebar */}
      <div
        className={`
          bg-white w-[250px] h-screen overflow-hidden relative transition-transform duration-300
          ${isCollapsed ? '-translate-x-[250px]' : 'translate-x-0'}
          border-r border-gray-200
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="font-['Audiowide']">
              Hive<span className="text-red-500">X</span>perience
            </span>
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 px-3">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg mb-1
                  transition-colors duration-200 select-none
                  ${item.isActive 
                    ? 'bg-[#2563eb] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                onClick={(e) => {
                  if (!item.href.startsWith('/')) {
                    e.preventDefault();
                  }
                }}
              >
                {typeof IconComponent === 'function' 
                  ? <IconComponent />
                  : <IconComponent className="w-5 h-5" />
                }
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`
          absolute left-[250px] top-1/2 -translate-y-1/2
          w-8 h-16 bg-gray-700 rounded-r-xl cursor-pointer
          flex items-center justify-center
          transition-transform duration-300
          hover:bg-gray-600
          ${isCollapsed ? '-translate-x-[250px]' : 'translate-x-0'}
        `}
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isCollapsed ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
