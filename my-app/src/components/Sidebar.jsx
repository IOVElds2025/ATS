import React from 'react';
import { LayoutDashboard, FileText, User, Settings, Users, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/client-dashboard' },
  { icon: PlusCircle, label: 'Create Request', path: '/create-request' },
  { icon: Users, label: 'Candidates', path: '/candidates' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = ({ open = true, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sidebar classes for slide-in/out and responsive
  const sidebarBase =
    'bg-white shadow-lg h-screen sticky top-0 z-30 transition-all duration-300 flex flex-col';
  const sidebarDesktop = open ? 'w-64 min-w-[16rem]' : 'w-20 min-w-[5rem]';
  const sidebarMobile = open
    ? 'translate-x-0'
    : '-translate-x-full';

  return (
    <aside
      className={
        `${sidebarBase} ${sidebarDesktop} fixed md:static left-0 top-0 md:translate-x-0 ${sidebarMobile}`
      }
      style={{
        height: '100vh',
        boxShadow: '2px 0 5px rgba(0,0,0,0.07)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-100">
        <span className="text-2xl font-bold" style={{ fontFamily: 'Audiowide, sans-serif' }}>
          Hive<span className="text-red-500">X</span>
        </span>
        {open && <span className="text-lg font-semibold text-gray-700 ml-2">perience</span>}
        <button
          className="ml-auto p-1 rounded hover:bg-gray-100 hidden md:block"
          onClick={() => setOpen && setOpen((c) => !c)}
        >
          {open ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-1">
        {navLinks.map((link) => {
          const active = location.pathname === link.path;
          return (
            <button
              key={link.label}
              onClick={() => navigate(link.path)}
              className={`flex items-center gap-3 px-6 py-3 w-full text-left transition-colors duration-200 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 ${active ? 'bg-blue-100 text-blue-700' : ''}`}
            >
              <link.icon className="w-5 h-5" />
              {open && <span>{link.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;