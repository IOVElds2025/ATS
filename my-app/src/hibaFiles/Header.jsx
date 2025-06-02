import React from 'react';
import { useNavigate } from 'react-router-dom';

// Header component that exactly matches the screenshot
const Header = () => {
  const navigate = useNavigate();
  
  const scrollToServices = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      
      
      {/* White header with logo and navigation */}
      <div style={{
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px'
      }}>
        {/* Logo */}
        <div style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          fontFamily: 'Audiowide, cursive'
        }}>
          Hire<span style={{ color: '#ef4444' }}>X</span>perience
        </div>
        
        {/* Navigation */}
        <div style={{
          display: 'flex',
          gap: '25px'
        }}>
          <a href="#features" onClick={scrollToServices} style={{ color: '#ef4444', textDecoration: 'none' }}>Services</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>About us</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Career</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
      
      {/* Black navigation bar with tabs */}
      <div style={{
        width: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px'
      }}>
        {/* Find Job / Hire Talent tabs */}
        <div style={{
          display: 'flex',
          gap: '25px'
        }}>
          <div 
            onClick={() => navigate('/jobs')}
            style={{
              color: '#fff',
              position: 'relative',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Find Job
          </div>
          <div style={{
            color: '#ef4444',
            position: 'relative',
            fontWeight: '500'
          }}>
            Hire Talent
            {/* Red dot indicator */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              backgroundColor: '#ef4444',
              borderRadius: '50%'
            }}></div>
          </div>
        </div>
        
        {/* Login button */}
        <button 
          onClick={() => navigate('/auth/login')}
          style={{
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 15px',
            fontWeight: '500',
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          login
        </button>
      </div>
    </>
  );
};

export default Header;