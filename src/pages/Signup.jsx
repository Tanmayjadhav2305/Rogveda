import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-surface flex flex-col justify-center pt-24 pb-28 px-4 md:px-8 relative overflow-y-auto animate-in fade-in duration-500">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-fixed/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10">
        
        {/* Left Side: App Details / Value Proposition */}
        <div className="md:w-5/12 bg-primary p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-2">
            <Link to="/" className="text-3xl font-black tracking-tighter inline-block mb-12">Rogveda</Link>
            <h2 className="text-3xl font-bold tracking-tight leading-tight">Your International Medical Journey Starts Here</h2>
            <p className="opacity-80 pt-2 text-sm leading-relaxed">Join the premier platform connecting global patients with India's highest-tier medical facilities.</p>
          </div>

          <div className="relative z-10 space-y-6 mt-12 md:mt-0">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed bg-white/10 p-2 rounded-xl">verified</span>
              <div>
                <h4 className="font-bold text-sm">JCI Accredited Hospitals</h4>
                <p className="text-xs opacity-70 mt-1">Direct access to internationally certified care centers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed bg-white/10 p-2 rounded-xl">support_agent</span>
              <div>
                <h4 className="font-bold text-sm">Dedicated Concierge</h4>
                <p className="text-xs opacity-70 mt-1">24/7 visa, housing, and translation assistance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed bg-white/10 p-2 rounded-xl">payments</span>
              <div>
                <h4 className="font-bold text-sm">Transparent Pricing</h4>
                <p className="text-xs opacity-70 mt-1">Dynamic pricing tailored for international patients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Account Creation Form */}
        <div className="md:w-7/12 p-10 md:p-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-primary">Create Account</h1>
            <p className="text-on-surface-variant text-sm mt-1">Set up your profile to book and track treatments.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline ml-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline ml-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com" 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline ml-2">Country of Origin</label>
                <select required className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                  <option value="" disabled selected>Select country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="NG">Nigeria</option>
                  <option value="KE">Kenya</option>
                  <option value="AE">UAE</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline ml-2">Passport/Medical ID (Optional)</label>
                <input 
                  type="text" 
                  placeholder="For visa assistance" 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline ml-2">Password</label>
              <input 
                type="password" 
                required
                placeholder="Create a strong password" 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-[0.98] mt-4"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-on-surface-variant">
              Already have an account? <Link to="/login" className="text-primary font-bold hover:text-secondary ml-1">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 p-2 bg-white rounded-full shadow-md text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center z-20">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
    </main>
  );
}
