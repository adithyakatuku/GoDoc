import { Routes, Route, Navigate } from 'react-router-dom';
import HospitalNavbar from './components/HospitalNavbar';
import HospitalPerformanceDashboard from './pages/HospitalPerformanceDashboard';
import HospitalBranches from './pages/HospitalBranches';
import RegisterBranch from './pages/RegisterBranch';
import ManageDoctors from './pages/ManageDoctors';
import RegisterDoctor from './pages/RegisterDoctor';

const HospitalApp = () => {
  return (
    <>
      <HospitalNavbar />
      <Routes>
        <Route path="home" element={<HospitalPerformanceDashboard />} />
        <Route path="branches" element={<HospitalBranches />} />
        <Route path="branches/register" element={<RegisterBranch />} />
        <Route path="doctors" element={<ManageDoctors />} />
        <Route path="doctors/register" element={<RegisterDoctor />} />
        <Route path="" element={<Navigate to="home" replace />} />
      </Routes>
    </>
  );
};

export default HospitalApp;

