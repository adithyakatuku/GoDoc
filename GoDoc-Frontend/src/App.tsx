import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PatientApp from './patient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patient/*" element={<PatientApp />} />
        <Route path="/" element={<Navigate to="/patient/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
