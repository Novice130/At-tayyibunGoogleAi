
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PillarPage from './pages/PillarPage';
import CityPage from './pages/CityPage';
import ProfileBrowser from './pages/ProfileBrowser';
import HowItWorks from './pages/HowItWorks';
import WaliGuidelines from './pages/WaliGuidelines';
import Signup from './pages/Signup';
import SEOHead from './components/SEOHead';
import { BRAND_NAME } from './constants';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/muslim-matrimony-usa" element={<PillarPage />} />
          <Route path="/muslim-matrimony-:citySlug" element={<CityPage />} />
          <Route path="/app/browse" element={<ProfileBrowser />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/wali-guardian-guidelines" element={<WaliGuidelines />} />
          <Route path="/privacy" element={<div className="p-20 text-center">Privacy Policy Page Content</div>} />
          <Route path="/terms" element={<div className="p-20 text-center">Terms of Service Page Content</div>} />
          <Route path="/safety" element={<div className="p-20 text-center">Safety Guidelines Page Content</div>} />
          <Route path="/pricing" element={<div className="p-20 text-center">Membership Plans Content</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
