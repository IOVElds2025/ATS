import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/candidate/UploadResumePage';
import Recruiter from './pages/Recruiter';
import Explore from './pages/Explore';
import ClientDashboard from './pages/ClientDashboard';
import ExploreHeader from './components/ExploreHeader';
import HiveLandingPage from './pages/hivelandingpage';
import ReviewInfo from './pages/candidate/ReviewInfo';
import CompleteProfile from './pages/candidate/CompleteProfile';
import CandidateDashboard from './pages/candidate/CandidateDashboard'

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
        <Route path="/upload-resume/preview-info" element={<UploadResumePage />} />
        <Route path="/upload-resume/review-info" element={<ReviewInfo />} />
        <Route path="/upload-resume/complete-profile" element={<CompleteProfile />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        





        {/* recruiter */}
        {/* public */}
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/explore" element={<Explore />} />
        {/* most to be protected */}
        <Route path="/dashboard" element={<ClientDashboard />} />

      </Routes>
    </div>
  );
}

export default App;
