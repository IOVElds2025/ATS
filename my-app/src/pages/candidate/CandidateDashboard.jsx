import React, { useState } from 'react';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import StatsCards from '../../components/dashboard/StatsCards';
import RecentApplications from '../../components/dashboard/RecentApplications';
import RecommendedJobs from '../../components/dashboard/RecommendedJobs';
import TopNav from '../../components/TopNav';
import pattern from '/assets/background/pattern.png'

const CandidateDashboard = () => {
  const [showDetailedApplications, setShowDetailedApplications] = useState(false);

  const toggleDetailedApplications = () => {
    setShowDetailedApplications(!showDetailedApplications);
  };

  const user = useState('AYOUB');




  return (
    <div className="min-h-screen text-gray-800 bg-[#D9D9D9] font-sans">
      {/* Top Navigation */}
      <TopNav />

      <main 
        className="max-w-7xl mx-auto px-4 py-8" 
      >
        {/* Welcome Banner */}
        <WelcomeBanner user={user} />

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
      <div className='fixed top-0 left-0 w-full h-full' >
        <img src={pattern} alt="" className='w-full h-full bg-cover bg-repeat'/>
      </div>
    </div>
  );
};

export default CandidateDashboard;
