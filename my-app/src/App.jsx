import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/UploadResumePage';
import Recruiter from './pages/Recruiter';
import Jobseeker from './pages/JobSeeker';
import ProfilePage from './pages/ProfilePage'; // ✅ Nouvelle importation

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/upload-resume" element={<UploadResumePage />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/jobseeker" element={<Jobseeker />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* ✅ Nouvelle route */}
        <Route path="/" element={<Recruiter />} />
      </Routes>
    </div>
  );
}

export default App;
