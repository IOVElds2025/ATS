import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import UploadResumePage from './pages/UploadResumePage';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UploadResume" element={<UploadResumePage />} />
        </Routes>
    </div>
  );
}

export default App;


