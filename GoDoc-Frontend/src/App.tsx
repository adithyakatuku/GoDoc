import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PatientApp from './patient';
import DoctorApp from './doctor';
import HospitalApp from './hospital';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PatientRegistration from './pages/PatientRegistration';
import HospitalRegistration from './pages/HospitalRegistration';
import StyleGuide from './pages/StyleGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/register/patient" element={<PatientRegistration />} />
        <Route path="/register/hospital" element={<HospitalRegistration />} />
        <Route path="/patient/*" element={<PatientApp />} />
        <Route path="/doctor/*" element={<DoctorApp />} />
        <Route path="/hospital/*" element={<HospitalApp />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
