import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Emily Chen',
    email: 'emily.chen@example.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    passport: 'US987654321'
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-surface dark:bg-slate-950 pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto transition-colors duration-500">
      
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row justify-between relative z-10 gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-blue-100">My Profile</h1>
          <p className="text-on-surface-variant dark:text-slate-400 body-lg mt-2">Manage your account and medical journey.</p>
        </div>
        <div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-3 bg-secondary text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">{isEditing ? 'close' : 'edit'}</span>
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Personal Details Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-outline-variant/20 dark:border-slate-800 relative overflow-hidden transition-colors">
            <div className="w-24 h-24 bg-tertiary-fixed dark:bg-teal-900 rounded-full flex items-center justify-center text-4xl font-bold text-on-tertiary-fixed dark:text-teal-100 mb-6 shadow-inner">
              EC
            </div>
            
            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500">Full Name</label>
                  <input type="text" value={user.name} onChange={e => setUser({...user, name: e.target.value})} className="w-full bg-surface-container-lowest dark:bg-slate-800 border border-outline-variant dark:border-slate-700/50 rounded-xl p-3 text-sm font-medium text-on-surface dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500">Email</label>
                  <input type="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} className="w-full bg-surface-container-lowest dark:bg-slate-800 border border-outline-variant dark:border-slate-700/50 rounded-xl p-3 text-sm font-medium text-on-surface dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500">Phone Number</label>
                  <input type="tel" value={user.phone} onChange={e => setUser({...user, phone: e.target.value})} className="w-full bg-surface-container-lowest dark:bg-slate-800 border border-outline-variant dark:border-slate-700/50 rounded-xl p-3 text-sm font-medium text-on-surface dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500">Passport ID</label>
                  <input type="text" value={user.passport} onChange={e => setUser({...user, passport: e.target.value})} className="w-full bg-surface-container-lowest dark:bg-slate-800 border border-outline-variant dark:border-slate-700/50 rounded-xl p-3 text-sm font-medium text-on-surface dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-4">Save Changes</button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold dark:text-blue-100">{user.name}</h2>
                  <p className="text-on-surface-variant dark:text-slate-400 flex items-center gap-1 text-sm mt-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> {user.country}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 dark:border-slate-800 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500 block">Email</span>
                    <span className="font-medium text-sm dark:text-slate-200">{user.email}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500 block">Phone</span>
                    <span className="font-medium text-sm dark:text-slate-200">{user.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500 block">Passport ID</span>
                    <span className="font-medium text-sm dark:text-slate-200">•••••{user.passport.slice(-4)}</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-error text-error rounded-xl font-bold hover:bg-error/10 transition-colors">Sign Out</button>
              </div>
            )}
          </div>
        </div>

        {/* History & Bookings Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-outline-variant/20 dark:border-slate-800 transition-colors">
            <h2 className="text-2xl font-bold tracking-tight mb-6 dark:text-blue-100">Booking History</h2>
            
            <div className="space-y-4">
              {/* Upcoming Booking */}
              <div className="border border-primary-fixed dark:border-blue-800 rounded-2xl p-6 bg-primary-fixed/5 dark:bg-blue-900/20 flex flex-col md:flex-row gap-6 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 bg-primary dark:bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl tracking-wider">UPCOMING</div>
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 text-3xl">medical_services</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary dark:text-blue-200">Total Knee Replacement</h3>
                  <p className="text-on-surface-variant dark:text-slate-400 font-medium text-sm mt-1">Rogveda Wellness Center • Mumbai</p>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm bg-white px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">calendar_month</span>
                      <span className="font-semibold">Oct 24, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-white px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">stethoscope</span>
                      <span className="font-semibold">Dr. Sarah Chen</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/20 pt-4 md:pt-0 md:pl-6">
                  <button className="bg-primary text-white font-bold px-6 py-2.5 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors text-sm">View Details</button>
                  <button className="text-on-surface-variant font-bold px-6 py-2.5 rounded-xl hover:bg-surface-container transition-colors text-sm">Contact Concierge</button>
                </div>
              </div>

              {/* Past Booking */}
              <div className="border border-outline-variant/40 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:bg-surface-container-lowest transition-colors">
                 <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-outline text-3xl">fact_check</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-outline">Initial Tele-Consultation</h3>
                    <span className="bg-surface-container-high text-xs px-2 py-0.5 rounded text-on-surface-variant font-bold">COMPLETED</span>
                  </div>
                  <p className="text-on-surface-variant font-medium text-sm mt-1">Appollo International Health</p>
                  <p className="text-xs text-outline mt-3">Sept 12, 2026 • Video Call</p>
                </div>
                <div className="flex flex-col justify-center shrink-0">
                  <button className="border border-outline-variant text-primary font-bold px-5 py-2 rounded-xl hover:bg-primary/5 transition-colors text-sm">View Report</button>
                </div>
              </div>

            </div>
          </div>
          
          <div className="bg-tertiary-fixed dark:bg-teal-900 rounded-3xl p-8 flex items-center justify-between shadow-lg shadow-tertiary-fixed/20 dark:shadow-black/20 relative overflow-hidden transition-colors">
             <div className="absolute right-0 top-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
             <div className="relative z-10 w-2/3">
               <h3 className="text-xl font-bold text-on-tertiary-fixed dark:text-teal-100">Need Visa Assistance?</h3>
               <p className="text-on-tertiary-fixed/80 dark:text-teal-200/60 text-sm mt-1 mt-2">Your dedicated concierge can accelerate your medical visa application.</p>
             </div>
             <button className="relative z-10 bg-white dark:bg-slate-100 text-tertiary dark:text-teal-950 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md">
               Request Help
             </button>
          </div>
        </div>
      </div>
    </main>
  );
}
