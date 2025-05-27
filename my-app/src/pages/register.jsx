import React, { useState, useEffect } from 'react';
import './register.css';

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png'
];

const Register = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [message, setMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const { firstName, lastName, email, password, confirmPassword, role } = formData;

    if (!role) return setMessage('Please select a role.');
    if (!firstName || !lastName || !email || !password || !confirmPassword)
      return setMessage('Please fill in all fields.');
    if (password !== confirmPassword)
      return setMessage('Passwords do not match.');
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password))
      return setMessage('Password must contain a letter, number and special character.');

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      is_recruiter: role === 'recruiter',
      is_candidate: role === 'jobseeker',
    };

    try {
      const res = await fetch('http://192.168.100.39:8000/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.status === 201) {
        setRegistrationSuccess(true);
      } else if (res.status === 400 && data) {
        const errors = [];
        for (const key in data) {
          if (Array.isArray(data[key])) {
            errors.push(`${key}: ${data[key].join(', ')}`);
          }
        }
        setMessage(errors.join(' | '));
      } else {
        setMessage('An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('Failed to connect to the server.');
    }
  };

  return (
    <div className="register-container">
      <div className="form-section">
        <img src="/images/logo1.png" alt="logo" className="logo" />
        {!registrationSuccess ? (
          <>
            <h2 className="form-title">Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

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

              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
  <label>Select your role:</label>
  <div className="role-buttons">
    <button
      type="button"
      className={`${
        formData.role === 'jobseeker' ? 'selected-jobseeker' : ''
      }`}
      onClick={() => handleRoleSelect('jobseeker')}
    >
      Job Seeker
    </button>
    <button
      type="button"
      className={`${
        formData.role === 'recruiter' ? 'selected-recruiter' : ''
      }`}
      onClick={() => handleRoleSelect('recruiter')}
    >
      Recruiter
    </button>
  </div>
</div>


              <button type="submit" className="submit-btn">Register</button>
              {message && <p className="form-message">{message}</p>}
              <p className="signin-text">Already have an account? <span className="signin-link">Sign in</span></p>
            </form>
          </>
        ) : (
          <div className="welcome-message">
            <h2>🎉 Welcome, {formData.firstName}!</h2>
            <p>Account created successfully! Please check your email to validate your account.</p>
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
        <div className="dream-text">Need a dream team? I recruit heroes.
                                    Chasing a dream job? I’m the hero.
                                Either way — let’s make magic happen!" ✨🛠️</div>
      </div>
    </div>
  );
};

export default Register;