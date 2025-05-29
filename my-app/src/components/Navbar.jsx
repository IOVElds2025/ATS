import React from 'react';
import './Navbar.css'; // Make sure Navbar.css contains the @import and .audiowide-regular class

const Navbar = () => (
  <nav
    style={{
      width: '100%',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      height: '48px',
    }}
  >
    <span
      className="audiowide-regular"
      style={{
        fontSize: '22px',
        color: '#111',
        letterSpacing: '1px',
        marginTop: '2px',
      }}
    >
      Hive<span style={{ color: '#e53935' }}>X</span>perience
    </span>
  </nav>
);

export default Navbar;
