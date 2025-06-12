import React from 'react';

const WelcomeBanner = () => {
  return (
    <div className="rounded-2xl shadow-lg p-8 mb-8 text-white bg-gradient-to-r from-blue-600 to-blue-800 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Ayoub!</h1>
        <p className="text-blue-100">Here's what's happening with your job search today.</p>
      </div>
      <button className="bg-white text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-50 flex items-center gap-2 font-semibold shadow">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        find job
      </button>
    </div>
  );
};

export default WelcomeBanner; 