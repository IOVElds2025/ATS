import React from 'react';
import { Link } from 'react-router-dom';
import './SubHeader.css';

const SubHeader = () => {
  return (
    <nav className="sub-header-container">
      <div className="sub-header-content">
        <ul className="sub-header-nav">
          <li>
            <Link to="/find-job" className="sub-nav-item">
              Find Job
            </Link>
          </li>
          <li>
            <Link to="/hire-talent" className="sub-nav-item active">
              Hire Talent
            </Link>
          </li>
        </ul>
        <div className="sub-header-right">
          <Link to="/login" className="sub-login-button">
            login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;