import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import slide1 from '../assets/charachters/slide1.png';
import slide2 from '../assets/charachters/slide2.png';
import slide3 from '../assets/charachters/slide3.png';
import logo from '../assets/charachters/logo.png';
import honeycomb from '../assets/charachters/honeycomb.jpg';

const images = [slide1, slide2, slide3];

const Register = () => {
  const navigate = useNavigate();
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
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify({
          email,
          firstName,
          lastName,
          role
        }));
        navigate('/client-dashboard');
      } else if (res.status === 400 && data) {
        const errors = [];
        for (const key in data) {
          if (Array.isArray(data[key])) {
            errors.push(`${key}: ${data[key].join(', ')}`);
          }
        }
        setMessage(errors.join(' | '));
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <div className="w-screen h-screen flex relative overflow-hidden text-black">
      {/* Appliquer le fond sombre uniquement sur la section droite */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-black bg-opacity-60 z-0" />

      {/* Section gauche : Formulaire */}
      <div className="w-full lg:w-1/2 z-10 bg-white px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 flex flex-col justify-center shadow-inner min-h-screen overflow-y-auto">
        <img src={logo} alt="logo" className="w-20 sm:w-24 lg:w-28 mb-4 sm:mb-6" />

        {!registrationSuccess ? (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16306c] mb-4 sm:mb-6">Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-4 sm:mb-5">
                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="p-2 sm:p-3 rounded border border-[#c5cbd8] bg-[#e8edf7] text-sm sm:text-[15px] focus:outline-none focus:border-[#1e3f84] focus:shadow"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="p-2 sm:p-3 rounded border border-[#c5cbd8] bg-[#e8edf7] text-sm sm:text-[15px] focus:outline-none focus:border-[#1e3f84] focus:shadow"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-sm sm:text-base">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-2 sm:p-3 rounded border border-[#c5cbd8] bg-[#e8edf7] text-sm sm:text-[15px] focus:outline-none focus:border-[#1e3f84] focus:shadow"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-sm sm:text-base">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="p-2 sm:p-3 rounded border border-[#c5cbd8] bg-[#e8edf7] text-sm sm:text-[15px] focus:outline-none focus:border-[#1e3f84] focus:shadow"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-sm sm:text-base">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="p-2 sm:p-3 rounded border border-[#c5cbd8] bg-[#e8edf7] text-sm sm:text-[15px] focus:outline-none focus:border-[#1e3f84] focus:shadow"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-sm sm:text-base">Select your role:</label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                  <button
                    type="button"
                    className={`flex-1 p-2 sm:p-3 rounded font-bold text-white text-sm sm:text-base transition ${
                      formData.role === 'jobseeker' ? 'bg-gray-700' : 'bg-slate-500'
                    }`}
                    onClick={() => handleRoleSelect('jobseeker')}
                  >
                    Job Seeker
                  </button>
                  <button
                    type="button"
                    className={`flex-1 p-2 sm:p-3 rounded font-bold text-white text-sm sm:text-base transition ${
                      formData.role === 'recruiter' ? 'bg-red-700' : 'bg-slate-500'
                    }`}
                    onClick={() => handleRoleSelect('recruiter')}
                  >
                    Recruiter
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-2 sm:p-3 bg-[#16306c] text-white rounded font-bold text-sm sm:text-base mt-4 hover:bg-[#004687] transition"
              >
                Register
              </button>

              {message && <p className="mt-4 text-center text-xs sm:text-sm text-red-600">{message}</p>}

              <p className="mt-4 text-center text-xs sm:text-sm">
                Already have an account?{' '}
                <span className="text-[#e45c5c] cursor-pointer hover:bg-red-100 hover:text-[#c0392b] px-1 rounded">
                  Sign in
                </span>
              </p>
            </form>
          </>
        ) : (
          <div className="text-center mt-6 sm:mt-10 text-[#1e3f84] text-base sm:text-lg animate-fade-in">
            <h2 className="text-xl sm:text-2xl mb-2 text-[#1e3f84]">🎉 Welcome, {formData.firstName}!</h2>
            <p className="text-gray-800 text-sm sm:text-base">Account created successfully! Please check your email to validate your account.</p>
          </div>
        )}
      </div>

      {/* Section droite : carrousel d'images */}
      <div
        className="hidden lg:flex lg:w-1/2 relative justify-center items-center z-10 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${honeycomb})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-[#1e3f84] opacity-40 z-10" />

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100 z-20' : 'opacity-0 z-0'
            }`}
          />
        ))}

        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition cursor-pointer ${
                index === currentImage ? 'bg-red-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg xl:text-xl font-bold text-center z-30 max-w-[80%] leading-relaxed drop-shadow">
          Need a dream team? I recruit heroes.
          <br />
          Chasing a dream job? I'm the hero.
          <br />
          Either way — let's make magic happen! ✨🛠️
        </div>
      </div>
    </div>
  );
};

export default Register;