import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/UploadResumePage';
import Recruiter from './pages/Recruiter';
import Explore from './pages/Explore'; // Assurez-vous que ce fichier existe
import ClientDashboard from './pages/ClientDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/upload-resume" element={<UploadResumePage />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/" element={<Recruiter />} />
      </Routes>
    </div>
  );
}

export default App;