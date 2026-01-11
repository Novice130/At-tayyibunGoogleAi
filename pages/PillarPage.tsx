
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CITY_DATA, BRAND_NAME, SCALABLE_CITIES } from '../constants';

const PillarPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SEOHead 
        title="Muslim Matrimony USA | Verified Halal Matchmaking | At-Tayyibun"
        description="The ultimate guide to Muslim matrimony in the USA. From Chicago to NYC, discover how At-Tayyibun is helping practicing Muslims find lifelong partners."
      />

      <section className="bg-emerald-50 py-24 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif text-5xl md:text-7xl font-bold text-emerald-950 mb-6">Muslim Matrimony <br/> in the United States</h1>
          <p className="text-xl text-emerald-800 max-w-3xl mx-auto mb-10 leading-relaxed">
            Exploring the landscape of Nikah and halal matchmaking across North America. At-Tayyibun provides the infrastructure for successful, faith-based unions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Halal Verified</h3>
                <p className="text-slate-600">Every profile on {BRAND_NAME} is manually reviewed to ensure intentions are serious and for the purpose of marriage.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Privacy Controlled</h3>
                <p className="text-slate-600">You control who sees your photos. No public galleries, no unprotected information. Your data is an Amanah.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Community Focused</h3>
                <p className="text-slate-600">Our algorithm prioritizes local matches in your specific US city while allowing for wider searches across the nation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="serif text-4xl font-bold mb-12 text-center">Matrimony by City</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {CITY_DATA.map(city => (
                    <Link 
                        key={city.slug} 
                        to={`/muslim-matrimony-${city.slug}`}
                        className="group flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-emerald-50 hover:border-emerald-500 transition"
                    >
                        <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-900">{city.name}</span>
                        <span className="text-xs uppercase tracking-widest text-slate-400 mt-2">Browse Local &rarr;</span>
                    </Link>
                ))}
                {SCALABLE_CITIES.map(citySlug => (
                    <Link 
                        key={citySlug} 
                        to={`/muslim-matrimony-${citySlug}`}
                        className="group flex flex-col items-center justify-center p-8 bg-slate-50/50 border border-slate-100 rounded-2xl hover:bg-emerald-50 hover:border-emerald-300 transition"
                    >
                        <span className="text-lg font-bold text-slate-400 capitalize">{citySlug.replace(/-/g, ' ')}</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-300 mt-2">Expansion Soon</span>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* SEO Table Content Placeholder */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="serif text-3xl font-bold mb-8">Keyword Research & SEO Strategy</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-slate-700">
                            <tr>
                                <th className="pb-4 pr-4">Keyword Group</th>
                                <th className="pb-4 pr-4">Intent</th>
                                <th className="pb-4 pr-4">Target Page</th>
                                <th className="pb-4">Suggested CTA</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            <tr><td className="py-4 pr-4 font-mono">muslim matrimony usa</td><td className="py-4 pr-4">Commercial</td><td className="py-4 pr-4">Pillar Page</td><td className="py-4">Join Nationwide</td></tr>
                            <tr><td className="py-4 pr-4 font-mono">halal matchmaking near me</td><td className="py-4 pr-4">Transactional</td><td className="py-4 pr-4">City Pages</td><td className="py-4">Find Local Matches</td></tr>
                            <tr><td className="py-4 pr-4 font-mono">serious nikah website</td><td className="py-4 pr-4">Commercial</td><td className="py-4 pr-4">Home / Landing</td><td className="py-4">Get Started Free</td></tr>
                            <tr><td className="py-4 pr-4 font-mono">wali matchmaking tips</td><td className="py-4 pr-4">Informational</td><td className="py-4 pr-4">Blog / Guidelines</td><td className="py-4">Learn More</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-12 p-8 bg-slate-800 rounded-2xl border border-slate-700">
                    <h3 className="text-xl font-bold mb-4">Hypothesis Strategy</h3>
                    <p className="text-slate-400">These keywords are selected based on 2025 SaaS Matrimony search patterns. Verification with tools like SEMRush/Ahrefs is recommended upon launch to refine volume-based targeting.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PillarPage;
