<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 6ed996d0d2c590d2a4d730d3e0d90eecae106db4
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/UploadResumePage';
import Recruiter from './pages/Recruiter';
<<<<<<< HEAD
import Jobseeker from './pages/JobSeeker';
import ProfilePage from './pages/ProfilePage'; // ✅ Nouvelle importation
=======
import Explore from './pages/Explore';
import ClientDashboard from './pages/ClientDashboard';
import ExploreHeader from './components/ExploreHeader';
import HiveLandingPage from './pages/hivelandingpage';
>>>>>>> 6ed996d0d2c590d2a4d730d3e0d90eecae106db4

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/upload-resume" element={<UploadResumePage />} />
        <Route path="/recruiter" element={<Recruiter />} />
<<<<<<< HEAD
        <Route path="/jobseeker" element={<Jobseeker />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* ✅ Nouvelle route */}
        <Route path="/" element={<Recruiter />} />
=======
        <Route path="/explore" element={<Explore />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/exploreheader" element={<ExploreHeader />} />
        <Route path="/hivelandingpage" element={<HiveLandingPage />} />  
>>>>>>> 6ed996d0d2c590d2a4d730d3e0d90eecae106db4
      </Routes>
    </div>
  );
}

export default App;
