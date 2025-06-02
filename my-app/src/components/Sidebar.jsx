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
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: '#fff',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          transition: 'width 0.3s ease',
          width: isCollapsed ? '60px' : '250px',
          overflow: 'hidden',
          height: '100vh',
          position: 'relative',
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
            whiteSpace: 'nowrap',
          }}
        >
          {!isCollapsed && (
            <h1 style={logoStyle}>
              Hive<span style={highlightStyle}>Xperience</span>
            </h1>
          )}
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
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                  e.currentTarget.style.color = '#007bff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#333';
                }}
              >
                <Icon style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                {!isCollapsed && (
                  <span style={{ marginLeft: '12px', fontSize: '0.875rem', fontWeight: '500' }}>
                    {item.label}
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Toggle Button - Rounded Tab */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          position: 'absolute',
          left: isCollapsed ? '60px' : '250px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '35px', // Increased width
          height: '75px', // Increased height
          backgroundColor: '#888888',
          borderRadius: '0 15px 15px 0', // Adjusted for larger size
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '2px 0 4px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          border: '1px solid #666666',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#666666')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#888888')}
      >
        {isCollapsed ? (
          <ChevronRight style={{ width: '20px', height: '20px', color: '#fff' }} /> // Increased icon size
        ) : (
          <ChevronLeft style={{ width: '20px', height: '20px', color: '#fff' }} /> // Increased icon size
        )}
      </div>
    </div>
  );
};

export default Sidebar;