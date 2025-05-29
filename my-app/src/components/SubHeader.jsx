import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubHeader = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  return (
    <nav className="w-full bg-black sticky top-[72px] z-40 px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex gap-8">
          <li>
            <Link
              to="/find-job"
              className={`relative font-semibold transition-colors duration-300 ${
                location.pathname === '/find-job'
                  ? 'text-red-500'
                  : 'text-white hover:text-red-500'
              }`}
            >
              Find Job
              {location.pathname === '/find-job' && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/hire-talent"
              className={`relative font-semibold transition-colors duration-300 ${
                location.pathname === '/hire-talent'
                  ? 'text-red-500'
                  : 'text-white hover:text-red-500'
              }`}
            >
              Hire Talent
              {location.pathname === '/hire-talent' && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className={`text-sm px-4 py-1.5 rounded font-medium transition duration-300 ${
              isLogin
                ? 'text-white bg-red-500 border border-red-500'
                : 'text-white hover:text-red-400'
            }`}
          >
            login
          </Link>
          <Link
            to="/register"
            className={`text-sm px-4 py-1.5 rounded font-medium transition duration-300 ${
              isRegister
                ? 'text-white bg-red-500 border border-red-500'
                : 'text-white hover:text-red-400'
            }`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;