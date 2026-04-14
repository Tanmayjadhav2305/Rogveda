import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
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

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 relative z-10">
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary">Rogveda</Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-on-surface-variant text-sm">Sign in to manage your medical journey.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-outline ml-2">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="you@example.com" 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center ml-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">Password</label>
              <a href="#" className="text-xs font-bold text-primary hover:text-secondary transition-colors">Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
            ) : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-on-surface-variant">
            Don't have an account? <Link to="/signup" className="text-primary font-bold hover:text-secondary ml-1">Create one</Link>
          </p>
        </div>
      </div>
      
      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 p-2 bg-white rounded-full shadow-md text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center z-20">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
    </main>
  );
}
