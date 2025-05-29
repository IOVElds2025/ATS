<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes('hire') ? 'hire' : 'find'
  );

  return (
    <header className="navbar">
      <style>{`
        .navbar {
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
        }

        .navbar-top {
          background: #fff;
          padding: 14px 30px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #000;
        }

        .logo span {
          color: #f44336;
        }

        .nav-menu {
          display: flex;
          gap: 35px;
        }

        .nav-menu a {
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          color: #111;
          transition: color 0.3s ease;
        }

        .nav-menu a:hover {
          color: #f44336;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-link {
          color: #111;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #f44336;
        }


        

        .navbar-bottom {
          background-color: #111;
          padding: 12px 30px;
        }

        .tab-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .tab {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .tab.active {
          color: #f44336;
        }

        .tab.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 5px;
          background: #f44336;
          border-radius: 9999px;
        }

        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .nav-menu {
            flex-direction: column;
            gap: 10px;
          }
          .nav-right {
            gap: 12px;
          }
          .tab-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      {/* Top White Bar */}
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="logo">Hive<span>X</span>perience</div>

          <div className="nav-menu">
            <Link to="/services">Services</Link>
            <Link to="/about">About us</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="nav-right">
            <Link to="/login" className="nav-link">Login</Link>
            
          </div>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="navbar-bottom">
        <div className="tab-container">
          <span
            className={`tab ${activeTab === 'find' ? 'active' : ''}`}
            onClick={() => setActiveTab('find')}
          >
            Find Job
          </span>
          <span
            className={`tab ${activeTab === 'hire' ? 'active' : ''}`}
            onClick={() => setActiveTab('hire')}
          >
            Hire Talent
          </span>
        </div>
      </div>
    </header>
  );
}
=======
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
>>>>>>> 4183a88c70282d993e5b385674805b294ad50ec2

export default Navbar;
