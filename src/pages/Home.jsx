import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function Home() {
  const [procedure, setProcedure] = useState('Knee Replacement');
  const [tier, setTier] = useState('Premium');

  const costs = {
    'Knee Replacement': { Standard: 3800, Premium: 4850, Luxury: 7200 },
    'LASIK Eye': { Standard: 800, Premium: 1200, Luxury: 2500 },
    'Cardiology': { Standard: 5000, Premium: 8500, Luxury: 15000 },
    'Dental Implants': { Standard: 500, Premium: 1500, Luxury: 3500 }
  };

  return (
    <>
      <main className="pt-16 pb-32 overflow-x-hidden bg-surface dark:bg-slate-950 transition-colors duration-500">
        {/* Hero Section */}
        <section className="relative min-h-[618px] flex items-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              className="w-full h-full object-cover opacity-10 dark:opacity-20" 
              src="https://images.unsplash.com/photo-1538108149393-fdfd81691d12?auto=format&fit=crop&q=80&w=2074" 
              alt="Background Medical"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 dark:from-blue-500/10 dark:to-teal-500/10"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-medium text-xs uppercase tracking-widest dark:bg-teal-900 dark:text-teal-100">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                India's Leading Medical Concierge
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold text-primary dark:text-blue-100 tracking-tight leading-[1.05]">
                Find World-Class <span className="text-secondary dark:text-blue-400">Medical Care</span> in India
              </h2>
              <p className="text-lg text-on-surface-variant dark:text-slate-400 max-w-lg leading-relaxed">
                Access top-tier JCI accredited hospitals, renowned surgeons, and personalized care journeys designed for international patients.
              </p>
            </div>
            
            {/* Floating Search Bento */}
            <div className="relative">
              <div className="bg-surface-container-lowest dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl shadow-primary/5 dark:shadow-black/20 border border-white/40 dark:border-slate-700/50 glass-effect relative z-10 transition-colors">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-blue-400 ml-1">Treatment or Procedure</label>
                    <div className="bg-surface-container-low dark:bg-slate-700/50 rounded-xl px-5 py-4 flex items-center gap-4 group focus-within:ring-2 ring-secondary/20 transition-all">
                      <span className="material-symbols-outlined text-secondary dark:text-blue-400">medical_services</span>
                      <input className="bg-transparent border-none outline-none focus:ring-0 w-full text-on-surface dark:text-white font-medium placeholder:text-outline dark:placeholder:text-slate-500" placeholder="e.g. Knee Replacement" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-blue-400 ml-1">Preferred City</label>
                    <div className="bg-surface-container-low dark:bg-slate-700/50 rounded-xl px-5 py-4 flex items-center gap-4 focus-within:ring-2 ring-secondary/20 transition-all">
                      <span className="material-symbols-outlined text-secondary dark:text-blue-400">location_on</span>
                      <input className="bg-transparent border-none outline-none focus:ring-0 w-full text-on-surface dark:text-white font-medium placeholder:text-outline dark:placeholder:text-slate-500" placeholder="Delhi, Mumbai, Chennai" type="text" />
                    </div>
                  </div>
                  <Link to="/search" className="w-full py-5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">search</span> Explore Hospitals
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-fixed rounded-full -z-10 blur-3xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-container rounded-full -z-10 blur-3xl opacity-30"></div>
            </div>
          </div>
        </section>

        {/* Quick Links: Popular Procedures */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="text-sm font-bold text-outline-variant dark:text-slate-600 uppercase tracking-widest w-full text-center mb-4">Popular Procedures</span>
            <Link to="/search" className="bg-tertiary-fixed dark:bg-teal-900 px-6 py-3 rounded-full text-on-tertiary-fixed dark:text-teal-100 font-semibold flex items-center gap-2 hover:bg-[#73d8c3] dark:hover:bg-teal-800 transition-colors">
              <span className="material-symbols-outlined text-[20px]">favorite</span> Cardiology
            </Link>
            <Link to="/search" className="bg-surface-container-high dark:bg-slate-800 px-6 py-3 rounded-full text-primary dark:text-blue-200 font-semibold flex items-center gap-2 hover:bg-[#e4e2e2] dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">skeleton</span> Orthopedics
            </Link>
            <Link to="/search" className="bg-surface-container-high dark:bg-slate-800 px-6 py-3 rounded-full text-primary dark:text-blue-200 font-semibold flex items-center gap-2 hover:bg-[#e4e2e2] dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">child_care</span> IVF & Fertility
            </Link>
            <Link to="/search" className="bg-surface-container-high dark:bg-slate-800 px-6 py-3 rounded-full text-primary dark:text-blue-200 font-semibold flex items-center gap-2 hover:bg-[#e4e2e2] dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">eye_tracking</span> Ophthalmology
            </Link>
          </div>
        </section>

        {/* Trust Section: Top Hospitals */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h3 className="text-3xl font-bold text-primary dark:text-blue-100 tracking-tight mb-2">Partnering with Excellence</h3>
              <p className="text-on-surface-variant dark:text-slate-400">JCI & NABH Accredited Institutions in India</p>
            </div>
            <Link to="/search" className="text-secondary dark:text-blue-400 font-bold flex items-center gap-1 hover:underline">
              View All Hospitals
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hospital Card 1 */}
            <Link to="/hospital/1" className="bg-white dark:bg-slate-800 rounded-[1.5rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer block border border-slate-100 dark:border-slate-700">
              <div className="relative h-64">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/apollo.png" alt="Apollo" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold dark:text-white">4.9</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h4 className="text-xl font-bold text-primary dark:text-blue-100">Apollo Hospitals</h4>
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span> New Delhi, India
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs font-bold text-secondary dark:text-blue-400 uppercase tracking-widest">Pricing starts at</div>
                  <div className="text-2xl font-black text-primary dark:text-blue-200">$4,200</div>
                </div>
              </div>
            </Link>

            {/* Hospital Card 2 */}
            <Link to="/hospital/1" className="bg-white dark:bg-slate-800 rounded-[1.5rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer block border border-slate-100 dark:border-slate-700">
              <div className="relative h-64">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/medanta.png" alt="Medanta" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold dark:text-white">4.8</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h4 className="text-xl font-bold text-primary dark:text-blue-100">Medanta - The Medicity</h4>
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span> Gurugram, India
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs font-bold text-secondary dark:text-blue-400 uppercase tracking-widest">Pricing starts at</div>
                  <div className="text-2xl font-black text-primary dark:text-blue-200">$3,850</div>
                </div>
              </div>
            </Link>

            {/* Hospital Card 3 */}
            <Link to="/hospital/1" className="bg-white dark:bg-slate-800 rounded-[1.5rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer block border border-slate-100 dark:border-slate-700">
              <div className="relative h-64">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/fortis.png" alt="Fortis" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold dark:text-white">4.7</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h4 className="text-xl font-bold text-primary dark:text-blue-100">Fortis Memorial</h4>
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span> Bengaluru, India
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs font-bold text-secondary dark:text-blue-400 uppercase tracking-widest">Pricing starts at</div>
                  <div className="text-2xl font-black text-primary dark:text-blue-200">$5,100</div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Global Hubs Map Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 bg-surface-container-lowest dark:bg-slate-900/30 overflow-hidden transition-colors duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-4xl font-extrabold text-primary dark:text-blue-100 tracking-tight">Global Medical Hubs</h3>
              <p className="text-on-surface-variant dark:text-slate-400 body-lg leading-relaxed">
                Our network spans India's most advanced medical districts, ensuring you're never far from world-class care, no matter where you land.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-blue-900/40 flex items-center justify-center text-primary dark:text-blue-400 font-bold">D</div>
                  <div>
                    <h4 className="font-bold text-sm dark:text-white">Delhi NCR</h4>
                    <p className="text-xs text-on-surface-variant dark:text-slate-500">6 Partner Hospitals • 140+ Specialists</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-blue-900/40 flex items-center justify-center text-primary dark:text-blue-400 font-bold">M</div>
                  <div>
                    <h4 className="font-bold text-sm dark:text-white">Mumbai</h4>
                    <p className="text-xs text-on-surface-variant dark:text-slate-500">4 Partner Hospitals • 90+ Specialists</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 z-0">
               <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="w-full h-full grayscale dark:invert-[0.9] dark:hue-rotate-180 dark:opacity-80 transition-all">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[28.6139, 77.2090]}>
                    <Popup><strong>Delhi Hub</strong><br />6 Top-tier Hospitals</Popup>
                  </Marker>
                  <Marker position={[19.0760, 72.8777]}>
                    <Popup><strong>Mumbai Hub</strong><br />4 Specialization Centers</Popup>
                  </Marker>
                  <Marker position={[12.9716, 77.5946]}>
                    <Popup><strong>Bengaluru Hub</strong><br />Orthopedic Excellence Centers</Popup>
                  </Marker>
                </MapContainer>
            </div>
          </div>
        </section>

        {/* Treatment Cost Estimator */}
        <section className="max-w-7xl mx-auto px-6 py-24 bg-surface-container-low/30 dark:bg-slate-900/50 rounded-[3rem] border border-white/50 dark:border-slate-800 transition-colors duration-500">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-primary dark:text-blue-100 tracking-tight">Treatment Cost Estimator</h3>
            <p className="text-on-surface-variant dark:text-slate-400 mt-2">Get an instant estimate for your medical procedure in India.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-outline dark:text-slate-500">Select Procedure</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Knee Replacement', 'LASIK Eye', 'Cardiology', 'Dental Implants'].map(proc => (
                    <button 
                      key={proc}
                      onClick={() => setProcedure(proc)}
                      className={`p-4 rounded-2xl text-sm font-bold border transition-all ${procedure === proc ? 'bg-primary dark:bg-blue-600 text-white border-primary shadow-lg scale-[1.02]' : 'bg-surface dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-100 dark:border-slate-700 dark:text-slate-300'}`}
                    >
                      {proc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-outline dark:text-slate-500">Hospital Tier</label>
                <div className="flex gap-4">
                  {['Standard', 'Premium', 'Luxury'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setTier(t)}
                      className={`flex-1 py-3 rounded-xl text-xs font-bold border transition-all ${tier === t ? 'bg-secondary dark:bg-blue-500 text-white border-secondary shadow-md' : 'bg-surface dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-100 dark:border-slate-700 dark:text-slate-200'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary dark:bg-blue-900 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-primary/20 dark:border-blue-800 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
              <div className="relative z-10 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Estimated Treatment Cost</span>
                <div className="text-6xl md:text-8xl font-black mt-4 mb-4 tabular-nums">
                  ${costs[procedure][tier].toLocaleString()}
                </div>
                <p className="opacity-70 text-sm max-w-xs mx-auto mb-8">
                  Includes procedure, JCI hospital fees, and shared room stay. Final price may vary after initial consultation.
                </p>
                <Link to="/search" className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                  Browse Matching Hospitals
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Review Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-4xl font-extrabold text-primary dark:text-blue-100 tracking-tight">Voices of Healing</h3>
              <p className="text-on-surface-variant dark:text-slate-400 mt-2">Hear directly from the thousands of international patients we assist every year.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah J.', country: 'UK', text: 'The transition from London to Delhi was seamless. Rogveda handled every detail, from my medical visa to my private villa stay.', rating: 5, treatment: 'Knee Replacement' },
              { name: 'Mohammed A.', country: 'Nigeria', text: 'Top-tier cardiology care at a fraction of the cost. The concierge team felt like family throughout my recovery.', rating: 5, treatment: 'Heart Surgery' },
              { name: 'David L.', country: 'USA', text: 'Modern facilities that rivaled the best in New York. Incredible experience with my dental restoration.', rating: 5, treatment: 'Dental Implants' }
            ].map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 space-y-4"
              >
                <div className="flex gap-1 text-secondary dark:text-blue-400 text-sm">
                  {[...Array(review.rating)].map((_, i) => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <p className="italic text-on-surface dark:text-slate-200 leading-relaxed italic">"{review.text}"</p>
                <div className="pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-primary dark:text-blue-200">{review.name}</span>
                    <span className="text-xs text-on-surface-variant dark:text-slate-500">{review.country} • {review.treatment}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed dark:bg-teal-900 flex items-center justify-center text-xs font-bold text-on-tertiary-fixed dark:text-teal-100">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
