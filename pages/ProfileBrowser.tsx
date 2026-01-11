
import React, { useState, useEffect } from 'react';
import { Profile } from '../types';

const MOCK_PROFILES: Profile[] = [
  { id: '1', name: 'Zaynab', age: 26, location: 'Chicago, IL', ethnicity: 'Desi', profession: 'Pediatrician', religiousPractice: 'Practicing', bio: 'Seeking someone who balances deen and dunya. Loves reading and volunteering at the masjid.', imageUrl: 'https://picsum.photos/seed/zaynab/400/600', verified: true },
  { id: '2', name: 'Ahmed', age: 29, location: 'Brooklyn, NY', ethnicity: 'Arab', profession: 'Software Engineer', religiousPractice: 'Very Practicing', bio: 'Active in the community, looking for a serious partner for life.', imageUrl: 'https://picsum.photos/seed/ahmed/400/600', verified: true },
  { id: '3', name: 'Sara', age: 24, location: 'Houston, TX', ethnicity: 'African American', profession: 'Graphic Designer', religiousPractice: 'Practicing', bio: 'Artist soul with a heart for Islam. Looking for a supportive partner.', imageUrl: 'https://picsum.photos/seed/sara/400/600', verified: true },
  { id: '4', name: 'Omar', age: 31, location: 'Dearborn, MI', ethnicity: 'Arab', profession: 'Dentist', religiousPractice: 'Practicing', bio: 'Family oriented and looking for a pious wife.', imageUrl: 'https://picsum.photos/seed/omar/400/600', verified: false },
];

const ProfileBrowser: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar - Profile List */}
      <div className={`w-full md:w-96 bg-white border-r border-slate-200 overflow-y-auto h-[60vh] md:h-screen sticky top-16 md:top-0 ${selectedProfile ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-800">Browse Profiles</h2>
          <button className="text-emerald-700 text-sm font-semibold">Filter</button>
        </div>
        
        <div className="p-2 space-y-2">
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex gap-4 p-3 animate-pulse">
                <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            MOCK_PROFILES.map((profile) => (
              <button 
                key={profile.id}
                onClick={() => handleProfileClick(profile)}
                className={`w-full flex gap-4 p-4 rounded-2xl text-left transition ${selectedProfile?.id === profile.id ? 'bg-emerald-50 border-emerald-100' : 'hover:bg-slate-50'}`}
              >
                <img src={profile.imageUrl} alt={profile.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h3 className="font-bold text-slate-900 flex items-center gap-1">
                    {profile.name}, {profile.age}
                    {profile.verified && <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                  </h3>
                  <p className="text-sm text-slate-500">{profile.location} • {profile.profession}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Main View - Profile Detail */}
      <div className="flex-1 overflow-y-auto">
        {selectedProfile ? (
          <div className="max-w-3xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <button 
              onClick={() => setSelectedProfile(null)}
              className="md:hidden mb-4 text-emerald-700 font-semibold flex items-center gap-1"
            >
              &larr; Back to list
            </button>
            
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
              <div className="relative h-96 md:h-[30rem]">
                <img src={selectedProfile.imageUrl} alt={selectedProfile.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-4xl font-bold mb-2">{selectedProfile.name}, {selectedProfile.age}</h2>
                  <p className="text-xl opacity-90">{selectedProfile.location}</p>
                </div>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Ethnicity</div>
                    <div className="font-bold text-slate-800">{selectedProfile.ethnicity}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Practice</div>
                    <div className="font-bold text-slate-800">{selectedProfile.religiousPractice}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Profession</div>
                    <div className="font-bold text-slate-800">{selectedProfile.profession}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Status</div>
                    <div className="font-bold text-emerald-600">Verified</div>
                  </div>
                </div>

                <div>
                  <h3 className="serif text-2xl font-bold mb-4">About Me</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{selectedProfile.bio}</p>
                </div>

                <div className="pt-8 border-t border-slate-100 flex gap-4">
                  <button className="flex-1 bg-emerald-800 text-white py-4 rounded-2xl font-bold hover:bg-emerald-900 transition shadow-lg">
                    Send Interest
                  </button>
                  <button className="px-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition">
                    <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-12 text-center text-slate-400">
             <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
             </div>
             <h3 className="text-xl font-bold text-slate-500">Select a profile to view details</h3>
             <p className="mt-2 max-w-xs">Discover amazing, pious Muslims waiting to meet you.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileBrowser;
