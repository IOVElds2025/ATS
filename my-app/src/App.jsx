import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/register';

function App() {
  return (
    <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
