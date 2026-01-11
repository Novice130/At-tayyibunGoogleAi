
import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import JSONLD from '../components/JSONLD';
import { CITY_DATA, BRAND_NAME } from '../constants';

const CityPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const city = useMemo(() => 
    CITY_DATA.find(c => c.slug === citySlug), 
  [citySlug]);

  if (!city) {
    return <div className="p-32 text-center">
      <h2 className="text-2xl font-bold mb-4">City Profile Coming Soon</h2>
      <p className="mb-8">We are actively expanding to {citySlug?.replace(/-/g, ' ')}.</p>
      <Link to="/muslim-matrimony-usa" className="text-emerald-700 underline">View all available cities</Link>
    </div>;
  }

  return (
    <div className="bg-white">
      <SEOHead 
        title={city.title}
        description={city.metaDesc}
      />
      <JSONLD type="FAQPage" data={{
        mainEntity: city.faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      }} />

      {/* City Hero */}
      <section className="relative py-24 bg-emerald-900 text-white overflow-hidden">
        <img 
          src={`https://picsum.photos/seed/${city.slug}/1920/1080`} 
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
          alt={city.name}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="flex justify-center space-x-2 text-emerald-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/muslim-matrimony-usa" className="hover:text-white">USA</Link>
            <span>/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="serif text-4xl md:text-6xl font-bold mb-6">{city.h1}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            Secure, halal, and verified introductions for practicing Muslims in {city.name}.
          </p>
          <Link to="/app/browse" className="bg-amber-400 text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-500 transition shadow-lg">
            Find Your Match in {city.name}
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-emerald lg:prose-xl text-slate-700 leading-relaxed mb-16">
            <p className="text-lg font-medium text-emerald-800 mb-6">
              Welcome to {BRAND_NAME}, where we understand that {city.name} Muslims deserve a matchmaking experience that reflects their faith and cultural background.
            </p>
            <div className="space-y-6">
              {city.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <h2 className="serif text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {city.faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-emerald-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">More Muslim Matrimony Cities</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {CITY_DATA.filter(c => c.slug !== city.slug).map(c => (
                    <Link 
                        key={c.slug} 
                        to={`/muslim-matrimony-${c.slug}`}
                        className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:border-emerald-500 hover:text-emerald-700 transition"
                    >
                        {c.name}
                    </Link>
                ))}
            </div>
            <div className="mt-12 space-x-6">
                <Link to="/how-it-works" className="text-emerald-800 hover:underline">How it Works</Link>
                <Link to="/privacy" className="text-emerald-800 hover:underline">Privacy Policy</Link>
                <Link to="/safety" className="text-emerald-800 hover:underline">Safety Tips</Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
