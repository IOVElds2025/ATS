import React, { useState } from 'react';
import logo from '../assets/charachters/logo.png';

const LeftSection = () => {
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
        headers: { 'Content-Type': 'application/json' },
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
    <div className="flex flex-col justify-center px-6 py-10 bg-white min-h-screen shadow-inner">
      <img src={logo} alt="logo" className="w-20 sm:w-24 lg:w-28 mb-6" />

      {!registrationSuccess ? (
        <>
          <h2 className="text-2xl font-bold text-[#16306c] mb-6">Registration</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex gap-4">
              <div className="flex-1 flex flex-col">
                <label htmlFor="firstName" className="mb-1 text-gray-600 font-semibold text-sm">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder=""
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="p-3 rounded border border-gray-300 bg-[#e8edf7] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="lastName" className="mb-1 text-gray-600 font-semibold text-sm">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="p-3 rounded border border-gray-300 bg-[#e8edf7] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-600 font-semibold text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded border border-gray-300 bg-[#e8edf7] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-gray-600 font-semibold text-sm">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder=""
                value={formData.password}
                onChange={handleChange}
                required
                className="p-3 rounded border border-gray-300 bg-[#e8edf7] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="mb-1 text-gray-600 font-semibold text-sm">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder=""
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="p-3 rounded border border-gray-300 bg-[#e8edf7] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <p className="mb-2 font-semibold">Select your role:</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleRoleSelect('jobseeker')}
                  className={`flex-1 py-2 rounded font-bold text-white transition ${
                    formData.role === 'jobseeker' ? 'bg-gray-700' : 'bg-gray-500'
                  }`}
                >
                  Job Seeker
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleSelect('recruiter')}
                  className={`flex-1 py-2 rounded font-bold text-white transition ${
                    formData.role === 'recruiter' ? 'bg-red-700' : 'bg-gray-500'
                  }`}
                >
                  Recruiter
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#16306c] text-white rounded font-bold hover:bg-[#004687] transition"
            >
              Register
            </button>

            {message && <p className="text-red-600 text-center mt-2">{message}</p>}
          </form>
        </>
      ) : (
        <div className="text-center text-blue-800 mt-10">
          <h2 className="text-2xl mb-2">🎉 Welcome, {formData.firstName}!</h2>
          <p>Account created successfully! Please check your email to validate your account.</p>
        </div>
      )}
    </div>
  );
};

export default LeftSection;
