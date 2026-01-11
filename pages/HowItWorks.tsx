
import React from 'react';
import SEOHead from '../components/SEOHead';
import { BRAND_NAME } from '../constants';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Create Your Profile", desc: "Share your values, background, and what you seek in a spouse. Profiles are kept private until you approve a match." },
    { title: "Verification", desc: "Every member must undergo a verification process to ensure the community remains safe and serious." },
    { title: "Discovery & Filter", desc: "Browse members in your city or nationwide. Use filters for religious practice, ethnicity, and education." },
    { title: "Connect via Wali", desc: "Start conversations with the option for family oversight. Focus on meaningful discussions about the future." },
    { title: "Meet & Decide", desc: "Once compatibility is established, transition to in-person meetings with family presence to finalize your decision." }
  ];

  return (
    <div className="bg-white">
      <SEOHead 
        title={`How It Works | ${BRAND_NAME} Halal Matrimony`}
        description={`Discover the safe and halal process of finding your spouse on ${BRAND_NAME}. Step-by-step guide to our matrimony platform.`}
      />
      
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif text-5xl font-bold text-emerald-900 mb-6">How At-Tayyibun Works</h1>
          <p className="text-xl text-emerald-800 max-w-2xl mx-auto">A modern platform built on timeless principles.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="w-16 h-16 bg-emerald-900 text-white flex items-center justify-center rounded-2xl text-2xl font-bold mb-6">
                    0{i + 1}
                  </div>
                  <h2 className="serif text-3xl font-bold text-slate-900 mb-6">{step.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200 relative">
                    <img src={`https://picsum.photos/seed/step${i}/800/450`} alt={step.title} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-emerald-900 font-bold text-xl uppercase tracking-widest">{BRAND_NAME}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif text-4xl font-bold mb-8">Ready to start your journey?</h2>
          <button className="bg-emerald-800 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-900 transition shadow-xl">
            Register Your Profile Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
