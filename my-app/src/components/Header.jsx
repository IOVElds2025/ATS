import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="logo">
            SmartHire
          </Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;