import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Propath1 from './pages/Propath1';
import Propath2 from './pages/Propath2';
import DesignJobBoard from './pages/DesignJobBoard';
import Dashboard from './pages/Dashboard';
import Professional from './pages/Professional';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import ProfessionalPortal from './pages/ProfessionalPortal';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 pt-16">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/propath1" element={<Propath1 />} />
                <Route path="/propath2" element={<Propath2 />} />
                <Route path="/job-board" element={<DesignJobBoard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/professional" element={<Professional />} />
                <Route path="/prof-dashboard" element={<ProfessionalDashboard />} />
                <Route path="/prof-portal" element={<ProfessionalPortal />} />
              </Routes>
            </main>
          </div>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
