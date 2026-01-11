
import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, CITY_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 px-4 md:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="serif text-3xl font-bold text-white mb-6">{BRAND_NAME}</h2>
            <p className="max-w-md text-lg leading-relaxed mb-8">
              Empowering the Muslim community in the USA to find their lifelong partners through a privacy-first, halal, and verified matchmaking experience. 
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 bg-slate-900 rounded-full"></div>
              <div className="w-10 h-10 bg-slate-900 rounded-full"></div>
              <div className="w-10 h-10 bg-slate-900 rounded-full"></div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/how-it-works" className="hover:text-emerald-400 transition">How It Works</Link></li>
              <li><Link to="/wali-guardian-guidelines" className="hover:text-emerald-400 transition">Wali Guidelines</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400 transition">Membership</Link></li>
              <li><Link to="/app/browse" className="hover:text-emerald-400 transition">Browse Profiles</Link></li>
              <li><Link to="/safety" className="hover:text-emerald-400 transition">Safety Tips</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Top Cities</h3>
            <ul className="space-y-4">
              {CITY_DATA.map(city => (
                <li key={city.slug}><Link to={`/muslim-matrimony-${city.slug}`} className="hover:text-emerald-400 transition capitalize">{city.name} Matrimony</Link></li>
              ))}
              <li><Link to="/muslim-matrimony-usa" className="hover:text-emerald-400 transition">More Cities...</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2025 {BRAND_NAME}. All rights reserved. Built with Taqwa.</p>
          <div className="flex gap-8 text-xs font-medium">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
