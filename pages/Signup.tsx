
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BRAND_NAME, BRAND_LOGO_URL } from '../constants';

type SignupStep = 1 | 2 | 3 | 4 | 'verify';

const Signup: React.FC = () => {
  const [step, setStep] = useState<SignupStep>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    age: '',
    city: '',
    ethnicity: '',
    practice: '',
    waliName: '',
    waliRelation: '',
  });
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [simulatedEmail, setSimulatedEmail] = useState<string | null>(null);
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let interval: any;
    if (step === 'verify' && resendTimer > 0) {
      interval = setInterval(() => setResendTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) {
      setStep('verify');
      // Trigger simulation immediately on step transition
      triggerSimulatedEmail();
    }
  };

  const triggerSimulatedEmail = () => {
    setSimulatedEmail(null);
    setTimeout(() => {
      setSimulatedEmail("123456"); // Fixed simulation code
    }, 800);
  };

  const handleBack = () => {
    if (step === 'verify') {
        setStep(4);
        setSimulatedEmail(null);
    }
    else if (step === 4) setStep(3);
    else if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 'verify') {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        handleNext();
      }, 1200);
    } else {
      setIsSubmitting(true);
      const code = verificationCode.join('');
      setTimeout(() => {
        setIsSubmitting(false);
        if (code === "123456") {
            navigate('/app/browse');
        } else {
            alert("Verification failed. Please enter 123456.");
        }
      }, 1500);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    if (value.length > 1) return;
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const getProgress = () => {
    if (step === 'verify') return 100;
    return (step as number / 5) * 100;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 py-12 relative overflow-hidden">
      <SEOHead 
        title={`Sign Up | ${BRAND_NAME} - Start Your Halal Journey`}
        description="Join At-Tayyibun today. A privacy-first platform for serious Muslims seeking Nikah in the USA."
      />

      {/* Simulated Email Notification - High Visibility */}
      {simulatedEmail && step === 'verify' && (
        <div className="fixed top-8 right-8 w-80 bg-white border-2 border-emerald-500 shadow-2xl rounded-3xl p-6 z-[60] animate-in slide-in-from-right-10 duration-500">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex-1">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">New Verification Code</p>
                    <p className="text-sm font-bold text-slate-800">Verify your At-Tayyibun account</p>
                </div>
                <button onClick={() => setSimulatedEmail(null)} className="text-slate-300 hover:text-slate-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl text-center border border-emerald-200">
                <p className="text-xs text-emerald-800 mb-2 font-bold italic">SIMULATED EMAIL RECEIVED</p>
                <p className="text-3xl font-black text-emerald-900 tracking-[0.2em]">{simulatedEmail}</p>
            </div>
        </div>
      )}

      <div className="w-full max-w-xl">
        {/* Brand Logo in Header */}
        <div className="flex justify-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
           <div className="flex flex-col items-center gap-2">
             <div className="w-20 h-20 group transition duration-500 flex items-center justify-center">
               <img src={BRAND_LOGO_URL} alt={`${BRAND_NAME} Logo`} className="w-full h-full object-contain filter drop-shadow-md" />
             </div>
             <h1 className="serif text-2xl font-bold text-emerald-900 mt-2">{BRAND_NAME}</h1>
           </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 px-4">
          <div className="flex justify-between text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-3">
            <span>{step === 'verify' ? 'Last Step' : `Step ${step} of 5`}</span>
            <span>{Math.round(getProgress())}% Complete</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden p-[2px]">
            <div 
              className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-700 ease-out shadow-sm" 
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 p-8 md:p-14">
          {step !== 'verify' ? (
            <>
              <h2 className="serif text-3xl font-bold text-slate-900 mb-2 text-center">
                {step === 1 && "Welcome to At-Tayyibun"}
                {step === 2 && "Profile Essentials"}
                {step === 3 && "Religious Foundation"}
                {step === 4 && "Wali Information"}
              </h2>
              <p className="text-slate-500 mb-10 font-medium text-center">
                {step === 1 && "Start your journey toward a halal marriage."}
                {step === 2 && "Tell us about your background and location."}
                {step === 3 && "Connecting you with partners of similar practice."}
                {step === 4 && "Safe and halal: who will support your journey?"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="e.g., Haroon Al-Rashid"
                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Gender</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          type="button"
                          onClick={() => updateField('gender', 'male')}
                          className={`py-5 rounded-2xl font-bold border-2 transition-all ${formData.gender === 'male' ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-md' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                        >
                          Brother
                        </button>
                        <button 
                          type="button"
                          onClick={() => updateField('gender', 'female')}
                          className={`py-5 rounded-2xl font-bold border-2 transition-all ${formData.gender === 'female' ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-md' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                        >
                          Sister
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Age</label>
                        <input 
                          required
                          type="number" 
                          value={formData.age}
                          onChange={(e) => updateField('age', e.target.value)}
                          placeholder="25"
                          className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">City</label>
                        <input 
                          required
                          type="text" 
                          value={formData.city}
                          onChange={(e) => updateField('city', e.target.value)}
                          placeholder="NYC"
                          className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Ethnicity</label>
                      <select 
                        required
                        value={formData.ethnicity}
                        onChange={(e) => updateField('ethnicity', e.target.value)}
                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none appearance-none font-medium"
                      >
                        <option value="">Choose Ethnicity</option>
                        <option value="Arab">Arab</option>
                        <option value="Desi">Desi</option>
                        <option value="African">African</option>
                        <option value="Caucasian">Caucasian</option>
                        <option value="Hispanic">Hispanic</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 text-center">How often do you practice?</label>
                    <div className="space-y-3">
                      {['Somewhat Practicing', 'Practicing', 'Very Practicing'].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => updateField('practice', level)}
                          className={`w-full p-5 rounded-3xl text-left border-2 transition-all flex justify-between items-center ${formData.practice === level ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-sm' : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'}`}
                        >
                          <span className="font-bold">{level}</span>
                          {formData.practice === level && (
                            <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="bg-emerald-900 text-emerald-100 p-6 rounded-[2rem] text-sm leading-relaxed shadow-lg">
                      <div className="flex gap-3 items-center mb-2">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="font-bold text-white">Wali Integration</span>
                      </div>
                      Adding a Wali's details helps maintain the barakah and safety of your search.
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Wali's Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.waliName}
                        onChange={(e) => updateField('waliName', e.target.value)}
                        placeholder="Guardian Name"
                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Relation</label>
                      <input 
                        required
                        type="text" 
                        value={formData.waliRelation}
                        onChange={(e) => updateField('waliRelation', e.target.value)}
                        placeholder="e.g., Father"
                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-8 flex gap-4">
                  {step > 1 && (
                    <button 
                      type="button" 
                      onClick={handleBack}
                      className="px-8 py-5 border-2 border-slate-100 rounded-3xl font-bold text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-emerald-800 text-white py-5 rounded-[2rem] font-bold hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20 disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
                  >
                    {isSubmitting ? (
                       <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : (
                      step === 4 ? "Complete & Verify" : "Continue"
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="serif text-3xl font-bold text-slate-900 mb-4">Email Verification</h2>
              <p className="text-slate-500 mb-10 font-medium leading-relaxed">
                Check your inbox! We've sent a 6-digit code to <br/> <span className="text-emerald-800 font-bold underline decoration-emerald-200 underline-offset-4">{formData.email}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="flex justify-between gap-2 md:gap-4">
                  {verificationCode.map((digit, idx) => (
                    <input 
                      key={idx}
                      ref={(el) => (inputRefs.current[idx] = el)}
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={digit}
                      onChange={(e) => handleCodeChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      className="w-12 h-16 md:w-16 md:h-20 text-center text-3xl font-bold bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none"
                    />
                  ))}
                </div>

                <div className="space-y-4">
                    <button 
                    type="submit"
                    disabled={isSubmitting || verificationCode.some(d => !d)}
                    className="w-full bg-emerald-800 text-white py-5 rounded-[2rem] font-bold hover:bg-emerald-900 transition-all shadow-2xl shadow-emerald-900/20 disabled:opacity-40 flex items-center justify-center text-xl"
                    >
                    {isSubmitting ? 'Verifying...' : 'Verify Email'}
                    </button>

                    <button 
                        type="button"
                        onClick={triggerSimulatedEmail}
                        className="w-full text-emerald-700 font-bold py-2 hover:bg-emerald-50 rounded-xl transition-all text-sm"
                    >
                        Haven't received it? Click to Re-send Simulation
                    </button>
                </div>

                <div className="text-sm font-medium">
                  {resendTimer > 0 ? (
                    <p className="text-slate-400">Timer: <span className="text-emerald-800 font-bold">{resendTimer}s</span></p>
                  ) : (
                    <button 
                      type="button" 
                      onClick={() => {
                        setResendTimer(30);
                        triggerSimulatedEmail();
                      }}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      Resend Now
                    </button>
                  )}
                </div>
              </form>
              
              <button 
                onClick={handleBack}
                className="mt-10 text-slate-400 font-bold hover:text-slate-600 text-sm transition-all"
              >
                &larr; Start over or Change email
              </button>
            </div>
          )}
        </div>
        
        <p className="mt-12 text-center text-slate-400 text-sm font-medium">
          Need help? <span className="text-emerald-800 font-bold hover:underline cursor-pointer">Support Center</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
