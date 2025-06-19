import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FindCoFounders from './pages/FindCoFounders';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Mentorship from './pages/Mentorship';
import Jobs from './pages/Jobs';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-cofounders" element={<FindCoFounders />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;