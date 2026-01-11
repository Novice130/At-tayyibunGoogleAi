
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition duration-300">
              <img src={BRAND_LOGO_URL} alt={`${BRAND_NAME} Logo`} className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
            <span className="serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-emerald-700 tracking-tight">
              {BRAND_NAME}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/muslim-matrimony-usa" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition">Matrimony USA</Link>
            <Link to="/how-it-works" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition">How it Works</Link>
            <Link to="/wali-guardian-guidelines" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition">Wali</Link>
            <Link to="/app/browse" className="bg-emerald-800 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-900 transition shadow-lg shadow-emerald-900/10">
              Launch App
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <Link to="/muslim-matrimony-usa" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl">Matrimony USA</Link>
            <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl">How it Works</Link>
            <Link to="/wali-guardian-guidelines" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl">Wali Guidelines</Link>
            <Link to="/app/browse" onClick={() => setIsOpen(false)} className="block px-4 py-5 text-xl font-bold text-center text-white bg-emerald-800 rounded-3xl mt-6 shadow-xl">Launch App</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
