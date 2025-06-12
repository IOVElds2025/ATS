import React, { useState } from 'react';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import StatsCards from '../../components/dashboard/StatsCards';
import RecentApplications from '../../components/dashboard/RecentApplications';
import RecommendedJobs from '../../components/dashboard/RecommendedJobs';

const CandidateDashboard = () => {
  const [showDetailedApplications, setShowDetailedApplications] = useState(false);

  const toggleDetailedApplications = () => {
    setShowDetailedApplications(!showDetailedApplications);
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <div className="bg-pattern"></div>
      {/* Top Navigation */}
      <header className="bg-white shadow-sm w-full sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-['audiowide'] text-2xl font-400 tracking-tight">
              <span className="text-black">Hive</span><span className="text-red-600">X</span><span className="text-black">perience</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="https://ui-avatars.com/api/?name=Ayoub+Rahmoun&background=0D8ABC&color=fff" alt="Profile" className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Ayoub Rahmoun</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Stats Cards */}
        <StatsCards />

        {/* Recent Applications */}
        <RecentApplications 
          showDetailed={showDetailedApplications}
          onToggleDetailed={toggleDetailedApplications}
        />

        {/* Recommended Jobs */}
        <RecommendedJobs />
      </main>
    </div>
  );
};

export default CandidateDashboard; 