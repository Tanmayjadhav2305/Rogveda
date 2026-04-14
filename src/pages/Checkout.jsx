import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState('USD');

  const handleConfirm = (e) => {
    e.preventDefault();
    alert('Booking Confirmed! You selected ROGVEDA PREMIUM PACKAGE.');
    navigate('/');
  };

  return (
    <>
      <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto transition-colors duration-500">
        {/* Progress Indicator */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest dark:bg-slate-800 -z-10 -translate-y-1/2"></div>
            {/* Step 1: Active */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary dark:bg-blue-600 flex items-center justify-center text-white font-bold ring-4 ring-background dark:ring-slate-950">1</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary dark:text-blue-400">Summary</span>
            </div>
            {/* Step 2: Pending */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest dark:bg-slate-800 flex items-center justify-center text-outline dark:text-slate-600 font-bold ring-4 ring-background dark:ring-slate-950">2</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500">Details</span>
            </div>
            {/* Step 3: Pending */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest dark:bg-slate-800 flex items-center justify-center text-outline dark:text-slate-600 font-bold ring-4 ring-background dark:ring-slate-950">3</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-outline dark:text-slate-500">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section 1: Selection Summary */}
            <section className="bg-surface-container-low dark:bg-slate-900 p-8 rounded-[2rem] transition-colors border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-primary dark:text-blue-100">Review Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                  <span className="material-symbols-outlined text-secondary dark:text-blue-400 mb-3">local_hospital</span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-outline dark:text-slate-500 mb-1">Institution</p>
                  <h3 className="font-bold text-lg leading-tight dark:text-slate-200">St. Mary's Medical Center</h3>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">London, UK</p>
                </div>
                <div className="bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                  <span className="material-symbols-outlined text-secondary dark:text-blue-400 mb-3">medical_services</span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-outline dark:text-slate-500 mb-1">Specialist</p>
                  <h3 className="font-bold text-lg leading-tight dark:text-slate-200">Dr. Elena Rodriguez</h3>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">Cardiology Senior Fellow</p>
                </div>
                <div className="bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                  <span className="material-symbols-outlined text-secondary dark:text-blue-400 mb-3">bed</span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-outline dark:text-slate-500 mb-1">Accommodation</p>
                  <h3 className="font-bold text-lg leading-tight dark:text-slate-200">Private Suite (Level 4)</h3>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">Garden View Premium</p>
                </div>
              </div>
            </section>

            {/* Section 2: Patient Details Form */}
            <section className="bg-surface-container-low dark:bg-slate-900 p-8 rounded-[2rem] transition-colors border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-primary dark:text-blue-100">Patient Details</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-outline dark:text-slate-500 ml-1">Full Legal Name</label>
                    <input className="w-full bg-surface-container-highest dark:bg-slate-800 border dark:border-slate-700/50 outline-none rounded-xl p-4 text-on-surface dark:text-white focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="As it appears on passport" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-outline dark:text-slate-500 ml-1">Country of Residence</label>
                    <select className="w-full bg-surface-container-highest dark:bg-slate-800 border dark:border-slate-700/50 outline-none rounded-xl p-4 text-on-surface dark:text-white focus:ring-2 focus:ring-secondary/20 transition-all">
                      <option>Select Country</option>
                      <option>United States</option>
                      <option>India</option>
                      <option>Nigeria</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline dark:text-slate-500 ml-1">Medical Reports Upload</label>
                  <div className="border-2 border-dashed border-outline-variant dark:border-slate-700 bg-surface-container-low dark:bg-slate-800/50 rounded-xl p-8 text-center hover:bg-surface-container-high dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-outline dark:text-slate-600 mb-2 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">cloud_upload</span>
                    <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400">Drag and drop reports or <span className="text-secondary dark:text-blue-400 underline">browse files</span></p>
                    <p className="text-[10px] text-outline dark:text-slate-500 mt-2 uppercase tracking-tighter">PDF, JPEG or PNG (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Payment/Currency */}
            <section className="bg-surface-container-low dark:bg-slate-900 p-8 rounded-[2rem] transition-colors border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-primary dark:text-blue-100">Payment Preference</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['USD', 'INR', 'NGN'].map((curr) => (
                  <label key={curr} className={`relative flex items-center justify-between p-4 bg-surface-container-lowest dark:bg-slate-800 rounded-xl border-2 cursor-pointer transition-all ${currency === curr ? 'border-secondary dark:border-blue-400 ring-offset-2 ring-offset-slate-900 shadow-lg' : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                    <input className="hidden peer" name="currency" type="radio" checked={currency === curr} onChange={() => setCurrency(curr)} />
                    <div className="flex flex-col">
                      <span className="font-bold text-lg dark:text-slate-200">{curr}</span>
                      <span className="text-xs text-outline dark:text-slate-500">{curr === 'USD' ? 'US Dollar' : curr === 'INR' ? 'Indian Rupee' : 'Nigerian Naira'}</span>
                    </div>
                    <span className={`material-symbols-outlined text-secondary dark:text-blue-400 transition-opacity ${currency === curr ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Summary & CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 z-10">
            <div className="bg-primary dark:bg-blue-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden transition-colors border border-primary/20 dark:border-blue-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container/20 to-secondary/30 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6 opacity-90">Estimated Total</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-slate-100">
                    <span className="text-sm opacity-70">Medical Procedure</span>
                    <span className="font-medium">$12,400.00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-100">
                    <span className="text-sm opacity-70">Hospital Stay (5 Days)</span>
                    <span className="font-medium">$1,850.00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-100">
                    <span className="text-sm opacity-70">Concierge Services</span>
                    <span className="font-medium">$450.00</span>
                  </div>
                  <div className="h-[1px] bg-white/10 my-4"></div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-200">Total Due</span>
                    <span className="text-3xl font-extrabold text-white">{currency === 'USD' ? '$14,700.00' : currency === 'INR' ? '₹12,20,100' : '₦15,000,000'}</span>
                  </div>
                </div>
                <button onClick={handleConfirm} className="w-full bg-tertiary-fixed dark:bg-teal-400 text-on-tertiary-fixed dark:text-teal-950 font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  Confirm Booking <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-[10px] text-center mt-4 opacity-50">Secure 256-bit SSL Encrypted Payment</p>
              </div>
            </div>
            
            <div className="bg-surface-container dark:bg-slate-900 p-6 rounded-xl flex items-center gap-4 transition-colors border border-slate-100 dark:border-slate-800">
              <div className="bg-tertiary/10 dark:bg-teal-900/40 p-3 rounded-full">
                <span className="material-symbols-outlined text-tertiary dark:text-teal-400">verified_user</span>
              </div>
              <div>
                <h4 className="text-sm font-bold dark:text-slate-200">Rogveda Protection</h4>
                <p className="text-xs text-outline dark:text-slate-400 leading-tight">Full refund policy valid up to 48 hours before procedure date.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Visual Support Float */}
      <button className="fixed bottom-28 right-6 md:bottom-10 md:right-10 bg-primary-container dark:bg-blue-800 text-on-primary-container dark:text-blue-100 p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
        <span className="font-bold text-sm pr-2 hidden group-hover:block transition-all">Need Help?</span>
      </button>

      {/* Visual Polish */}
      <div className="fixed top-0 right-0 -z-20 w-[500px] h-[500px] bg-secondary-fixed/20 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-20 w-[600px] h-[600px] bg-tertiary-fixed/10 dark:bg-teal-900/10 blur-[150px] rounded-full pointer-events-none"></div>
    </>
  );
}
