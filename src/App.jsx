import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Listings from './pages/Listings';
import HospitalDetails from './pages/HospitalDetails';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Compare from './pages/Compare';

function App() {
  const location = useLocation();
  const [currency, setCurrency] = useState('USD');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const cycleCurrency = () => {
    const currencies = ['USD', 'INR', 'NGN'];
    const next = currencies[(currencies.indexOf(currency) + 1) % currencies.length];
    setCurrency(next);
  };

  const activeClass = "text-blue-700 dark:text-blue-400 font-bold";
  const inactiveClass = "text-slate-500 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800 transition-colors";

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm flex justify-between items-center px-6 h-16 transition-colors duration-500">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-blue-900 dark:text-blue-300">menu</span>
          </button>
          <NavLink to="/" className="text-xl font-bold tracking-tighter text-blue-950 dark:text-blue-50">Rogveda</NavLink>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `${isActive ? activeClass : inactiveClass} font-inter tracking-tight`}>Home</NavLink>
          <NavLink to="/search" className={({ isActive }) => `${isActive ? activeClass : inactiveClass} font-inter tracking-tight`}>Search</NavLink>
          <NavLink to="/checkout/1" className={({ isActive }) => `${isActive ? activeClass : inactiveClass} font-inter tracking-tight`}>Bookings</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `${isActive ? activeClass : inactiveClass} font-inter tracking-tight`}>Profile</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800 rounded-full transition-colors text-blue-900 dark:text-blue-300"
          >
            <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button onClick={cycleCurrency} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/30 text-blue-900 dark:text-blue-100 font-medium text-sm hover:bg-slate-100/50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-sm">payments</span> {currency}
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Menu */}
      <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-surface-container-lowest dark:bg-slate-900 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary dark:text-blue-100 tracking-tighter">Rogveda</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant dark:text-slate-400">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-4 flex-1">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-slate-800 ${isActive ? 'text-primary dark:text-blue-300 bg-primary/5' : 'text-on-surface-variant dark:text-slate-400'} transition-colors font-semibold`}>
              <span className="material-symbols-outlined">home</span> Home
            </NavLink>
            <NavLink to="/search" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-slate-800 ${isActive ? 'text-primary dark:text-blue-300 bg-primary/5' : 'text-on-surface-variant dark:text-slate-400'} transition-colors font-semibold`}>
              <span className="material-symbols-outlined">search</span> Explore
            </NavLink>
            <NavLink to="/checkout/1" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-slate-800 ${isActive ? 'text-primary dark:text-blue-300 bg-primary/5' : 'text-on-surface-variant dark:text-slate-400'} transition-colors font-semibold`}>
              <span className="material-symbols-outlined">event_available</span> Bookings
            </NavLink>
          </nav>
          <div className="mt-auto border-t border-outline-variant/20 dark:border-slate-800 pt-6">
             <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-slate-800 text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors font-semibold block text-left">
              <span className="material-symbols-outlined">login</span> Sign In
            </NavLink>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Listings />} />
            <Route path="/hospital/:id" element={<HospitalDetails />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-32 right-6 z-50">
        <AnimatePresence>
          {isAssistantOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 w-80 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
            >
              <div className="bg-primary p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">support_agent</span>
                  </div>
                  <span className="font-bold text-sm">Rogveda Assistant</span>
                </div>
                <button onClick={() => setIsAssistantOpen(false)}>
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
              <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-2xl text-xs text-on-surface-variant dark:text-slate-300">
                  Hello! I'm here to help you with your medical journey. How can I assist you today?
                </div>
                <div className="flex flex-col gap-2">
                  <button className="text-left p-3 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-semibold hover:bg-primary/5 transition-colors">
                    Find a Hospital
                  </button>
                  <button className="text-left p-3 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-semibold hover:bg-primary/5 transition-colors">
                    Visa Assistance
                  </button>
                  <button className="text-left p-3 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-semibold hover:bg-primary/5 transition-colors">
                    Pricing Questions
                  </button>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-700 flex gap-2">
                <input className="flex-1 bg-slate-50 dark:bg-slate-700 border-none rounded-full px-4 py-2 text-xs outline-none" placeholder="Type your message..." />
                <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">{isAssistantOpen ? 'close' : 'chat'}</span>
        </button>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 transition-colors duration-500">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center py-2 scale-95 active:scale-90 transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-blue-400 bg-teal-100/50 dark:bg-blue-900/40 rounded-2xl px-5' : 'text-slate-400 hover:text-blue-800'}`}>
          <span className="material-symbols-outlined">home</span>
          <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Home</span>
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center justify-center py-2 scale-95 active:scale-90 transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-blue-400 bg-teal-100/50 dark:bg-blue-900/40 rounded-2xl px-5' : 'text-slate-400 hover:text-blue-800'}`}>
          <span className="material-symbols-outlined">search</span>
          <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Search</span>
        </NavLink>
        <NavLink to="/checkout/1" className={({ isActive }) => `flex flex-col items-center justify-center py-2 scale-95 active:scale-90 transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-blue-400 bg-teal-100/50 dark:bg-blue-900/40 rounded-2xl px-5' : 'text-slate-400 hover:text-blue-800'}`}>
          <span className="material-symbols-outlined">event_available</span>
          <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Bookings</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center justify-center py-2 scale-95 active:scale-90 transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-blue-400 bg-teal-100/50 dark:bg-blue-900/40 rounded-2xl px-5' : 'text-slate-400 hover:text-blue-800'}`}>
          <span className="material-symbols-outlined">person</span>
          <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Profile</span>
        </NavLink>
      </nav>
    </>
  );
}

export default App;
