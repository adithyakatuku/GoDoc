import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PatientDashboard from './pages/PatientDashboard';
import MedicalRecords from './pages/MedicalRecords';
import Appointments from './pages/Appointments';

const PatientApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<PatientDashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="medical-records" element={<MedicalRecords />} />
        <Route path="" element={<Navigate to="home" replace />} />
      </Routes>
    </>
  );
};

export default PatientApp;

