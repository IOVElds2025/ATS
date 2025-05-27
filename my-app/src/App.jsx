import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
