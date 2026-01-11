
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BRAND_NAME, TAGLINE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEOHead 
        title={`${BRAND_NAME} | Privacy-First Halal Muslim Matrimony USA`}
        description="At-Tayyibun is a premium, halal matrimony platform designed for practicing Muslims in the USA. Focus on privacy, serious intentions, and family involvement."
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-52 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
              Assalamu Alaikum
            </span>
            <h1 className="serif text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              The Path to a <br/>
              <span className="text-emerald-800 italic">Beautiful Nikah</span> <br/>
              Starts Here.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              {TAGLINE} We combine traditional values with modern technology to help serious Muslims find their life partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <Link to="/signup" className="bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-900 transition shadow-lg text-center">
                Get Started Free
              </Link>
              <Link to="/how-it-works" className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition shadow-sm text-center">
                How it Works
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decors */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path fill="#064E3B" d="M37.5,-63.3C49.9,-54.2,62.2,-46.3,71.7,-35.1C81.2,-23.8,87.8,-9.2,87.3,5.4C86.7,19.9,79.1,34.4,68.4,46.1C57.7,57.7,43.9,66.6,29.4,72.4C14.8,78.2,-0.4,80.9,-16,78.7C-31.5,76.5,-47.4,69.4,-59.5,57.9C-71.6,46.4,-79.9,30.5,-82.2,14.2C-84.5,-2.1,-80.7,-18.8,-72.6,-33.1C-64.4,-47.4,-51.9,-59.4,-38.3,-67.7C-24.7,-76,-9.9,-80.5,1.7,-83.4C13.3,-86.3,25,-87.6,37.5,-63.3Z" transform="translate(300 100)" />
            </svg>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl font-bold text-slate-900 mb-4">Finding Love Across the USA</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Connecting pious Muslims in Chicago, New York, Houston, and beyond.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['chicago', 'new-york-city', 'houston'].map((city) => (
              <Link 
                key={city}
                to={`/muslim-matrimony-${city}`} 
                className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >
                <img 
                  src={`https://picsum.photos/seed/${city}/800/600`} 
                  alt={`Muslim Matrimony ${city}`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white text-3xl font-bold capitalize mb-2">{city.replace(/-/g, ' ')}</h3>
                  <p className="text-emerald-300 font-medium">Browse Local Profiles &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/muslim-matrimony-usa" className="text-emerald-800 font-bold hover:underline">
              View All US Cities &rsaquo;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="serif text-4xl md:text-5xl font-bold mb-8">A Halal Foundation for Marriage</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Privacy-First Approach</h3>
                    <p className="text-emerald-100 leading-relaxed">Your photos and details are only visible to profiles you approve. No public browsing of sensitive data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wali Integration</h3>
                    <p className="text-emerald-100 leading-relaxed">Directly involve a guardian or Wali to supervise chats, maintaining the sanctity of the process.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-[4rem] flex items-center justify-center overflow-hidden border border-white/20">
                <img src="https://picsum.photos/seed/happy/800/800" alt="Halal Marriage" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <p className="serif text-3xl font-bold italic">"Good women are for good men, and good men are for good women."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl font-bold text-emerald-900 mb-2">5,000+</div>
                    <div className="text-slate-600 font-medium">Successful Nikahs</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-emerald-900 mb-2">100k+</div>
                    <div className="text-slate-600 font-medium">Verified Profiles</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-emerald-900 mb-2">100%</div>
                    <div className="text-slate-600 font-medium">Privacy Guaranteed</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-emerald-900 mb-2">USA</div>
                    <div className="text-slate-600 font-medium">Wide Presence</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
