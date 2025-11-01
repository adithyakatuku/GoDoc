import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import PatientDashboard from './pages/PatientDashboard';

const PatientApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<PatientDashboard />} />
        <Route path="appointments" element={<Box p={8}>Appointments Page - Coming Soon</Box>} />
        <Route path="messages" element={<Box p={8}>Messages Page - Coming Soon</Box>} />
        <Route path="" element={<Navigate to="home" replace />} />
      </Routes>
    </>
  );
};

export default PatientApp;

