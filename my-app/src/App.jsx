import Register from './pages/register';
<<<<<<< HEAD
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
=======
import './index.css';
import Explore from './pages/Explore';


function App() {
  return <UploadResumePage/>;
>>>>>>> 4183a88c70282d993e5b385674805b294ad50ec2
}

export default App;
