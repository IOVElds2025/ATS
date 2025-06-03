import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png'
];

const Login = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://192.168.100.39:8000/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Store token and user data
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify({
          email: formData.email,
          // Add any other user data you receive from the server
        }));
        
        // Navigate to dashboard
        navigate('/client-dashboard');
      } else {
        setMessage(data.detail || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      return setResetMessage('Please enter your email.');
    }

    try {
      const res = await fetch('http://192.168.100.39:8000/api/auth/reset-password/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        setResetMessage('A reset link has been sent to your email.');
      } else {
        setResetMessage(data.detail || 'Failed to send reset email.');
      }
    } catch (error) {
      console.error('Reset error:', error);
      setResetMessage('Server error.');
    }
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <img src="/images/logo1.png" alt="logo" className="logo" />
        {!loginSuccess ? (
          <>
            <h2 className="form-title">Welcome back!</h2>
            <p className="subtitle">Welcome back, please enter your details</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <button
                type="button"
                className="forget-btn"
                onClick={() => setShowReset(!showReset)}
              >
                Forget Password
              </button>

              {showReset && (
                <div className="reset-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="form-input"
                  />
                  <button type="button" className="reset-btn" onClick={handlePasswordReset}>
                    Send reset link
                  </button>
                  {resetMessage && <p className="reset-message">{resetMessage}</p>}
                </div>
              )}

              {message && <p className="error-message">{message}</p>}

              <button type="submit" className="submit-btn">Login</button>

              <p className="register-link">
                Don't have an account?{' '}
                <span onClick={() => navigate('/auth/register')} className="link">
                  Register here
                </span>
              </p>
            </form>
          </>
        ) : (
          <div className="welcome-message">
            <h2>👋 Welcome back!</h2>
            <p>You are successfully logged in.</p>
          </div>
        )}
      </div>

      <div className="carousel-section">
        <img src={images[currentImage]} alt={`slide-${currentImage}`} className="carousel-image" />
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span key={index} className={`dot ${index === currentImage ? 'active' : ''}`} />
          ))}
        </div>
        <div className="dream-text">
          Find your dream job
        </div>
      </div>
    </div>
  );
}

export default Login;