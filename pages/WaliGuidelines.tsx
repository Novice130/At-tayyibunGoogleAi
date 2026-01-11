
import React from 'react';
import SEOHead from '../components/SEOHead';
import { BRAND_NAME } from '../constants';

const WaliGuidelines: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <SEOHead 
        title={`Wali & Guardian Guidelines | Halal Matchmaking | ${BRAND_NAME}`}
        description={`Learn how ${BRAND_NAME} integrates Wali/Guardian supervision into the matrimonial process to maintain halal standards.`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100">
          <h1 className="serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Wali & Guardian Guidelines</h1>
          
          <div className="prose prose-emerald lg:prose-xl max-w-none text-slate-600">
            <p className="text-lg leading-relaxed">
              At {BRAND_NAME}, we believe that marriage is not just the union of two individuals, but the joining of families. Following traditional Islamic guidelines, we facilitate the role of a <strong>Wali (Guardian)</strong> to ensure the safety, modesty, and barakah of your journey.
            </p>

            <h2 className="serif text-2xl font-bold text-emerald-900 mt-12 mb-4">What is a Wali?</h2>
            <p>In Islamic jurisprudence, a Wali is a protector or guardian who oversees the marriage process for a woman, ensuring her rights are upheld and that the potential spouse is suitable. Typically, this is the father, but can also be a brother, uncle, or paternal grandfather.</p>

            <h2 className="serif text-2xl font-bold text-emerald-900 mt-12 mb-4">How At-Tayyibun Includes Your Wali</h2>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                <div><strong>Guardian Dashboard:</strong> Walis can create their own 'Guardian Account' and link it to their ward's profile.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                <div><strong>Monitored Chats:</strong> All initial communication can be set to be visible to the Guardian, preventing khulwah (seclusion) in digital form.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                <div><strong>Safety Verification:</strong> Potential suitors are aware from the start that a family member is involved, filtering out those with non-serious intentions.</div>
              </li>
            </ul>

            <div className="mt-16 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                <h3 className="serif text-xl font-bold text-emerald-950 mb-4 text-center">"A marriage without a Wali is invalid."</h3>
                <p className="text-sm text-center italic text-emerald-800">— Hadith (narrated in various collections regarding the importance of family oversight)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaliGuidelines;
