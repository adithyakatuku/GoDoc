import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Heading } from '@chakra-ui/react';
import DoctorNavbar from './components/DoctorNavbar';
import DoctorDashboard from './pages/DoctorDashboard';
import Schedule from './pages/Schedule';

const ComingSoon = ({ title }: { title: string }) => (
  <Box minH="100vh" bg="#e8f5f0">
    <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
      <Heading size="xl" fontWeight="800" color="gray.800" textAlign="center">
        {title} - Coming Soon
      </Heading>
    </Container>
  </Box>
);

const DoctorApp = () => {
  return (
    <>
      <DoctorNavbar />
      <Routes>
        <Route path="home" element={<DoctorDashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="patients" element={<ComingSoon title="Patients Page" />} />
        <Route path="messages" element={<ComingSoon title="Messages Page" />} />
        <Route path="" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </>
  );
};

export default DoctorApp;

