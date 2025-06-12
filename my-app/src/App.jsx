import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/UploadResumePage';
import Recruiter from './pages/Recruiter';
import Explore from './pages/Explore';
import ClientDashboard from './pages/ClientDashboard';
import DashboardPage from './pages/DashboardPage';
import ExploreHeader from './components/ExploreHeader';
import HiveLandingPage from './pages/hivelandingpage';

function App() {
  return (
    <div>
      <Routes>
        {/* candidate */}
        {/* public */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/hivelandingpage" element={<HiveLandingPage />} />  
        {/* most to be protected */}
        <Route path="/upload-resume" element={<UploadResumePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />



        {/* recruiter */}
        {/* public */}
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/explore" element={<Explore />} />
        {/* most to be protected */}

      </Routes>
    </div>
  );
}

export default App;
