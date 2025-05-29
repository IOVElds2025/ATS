import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/UploadResumePage';
import Recruiter from './pages/Recruiter';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/upload-resume" element={<UploadResumePage />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/" element={<Recruiter />} />
        </Routes>
    </div>
  );
}

export default App;