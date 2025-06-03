import React, { useState } from 'react';
import { LayoutDashboard, Search, FileText, User, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
    { icon: Search, label: 'Find Jobs', href: '#' },
    { icon: FileText, label: 'Applications', href: '#' },
    { icon: User, label: 'Profile', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' }
  ];

  const logoStyle = {
    fontFamily: "'Audiowide', sans-serif",
    fontSize: '1.5rem',
    color: '#333',
  };

  const highlightStyle = {
    color: '#007bff', // Blue color for "Xperience"
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: '#fff',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          transition: 'width 0.3s ease',
          width: isCollapsed ? '60px' : '250px',
          overflow: 'hidden',
          height: '100vh',
        }}
      >
        {/* Logo */}
        <div
          style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            borderBottom: '1px solid #ddd',
          }}
        >
          <h1 style={logoStyle}>
            Hive<span style={highlightStyle}>Xperience</span>
          </h1>
        </div>

        {/* Menu Items */}
        <nav style={{ marginTop: '24px' }}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                  e.target.style.color = '#007bff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#333';
                }}
              >
                <Icon style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                <span style={{ marginLeft: '12px', fontSize: '0.875rem', fontWeight: '500' }}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Toggle Button */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          position: 'absolute',
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '24px',
          height: '64px',
          backgroundColor: '#ddd',
          borderRadius: '0 8px 8px 0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#ccc')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#ddd')}
      >
        {isCollapsed ? (
          <ChevronRight style={{ width: '16px', height: '16px', color: '#fff' }} />
        ) : (
          <ChevronLeft style={{ width: '16px', height: '16px', color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;