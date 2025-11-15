import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PatientApp from './patient';
import DoctorApp from './doctor';
import Registration from './pages/Registration';
import StyleGuide from './pages/StyleGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/patient/*" element={<PatientApp />} />
        <Route path="/doctor/*" element={<DoctorApp />} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
