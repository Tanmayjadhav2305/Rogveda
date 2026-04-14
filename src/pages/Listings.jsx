import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Listings() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedHospitals, setSelectedHospitals] = useState([]);
  const navigate = useNavigate();

  const toggleCompare = (id) => {
    setSelectedHospitals(prev => 
      prev.includes(id) ? prev.filter(hId => hId !== id) : [...prev, id]
    );
  };

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const getFilterClass = (filter) => {
    return activeFilters.includes(filter)
      ? "bg-primary text-white border-primary px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md"
      : "bg-surface-container-high hover:bg-surface-container-highest px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer";
  };

  return (
    <>
      <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 bg-surface dark:bg-slate-950 transition-colors duration-500">
        {/* Search Header & Filters */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-blue-100 mb-2">Knee Replacement in Delhi</h2>
            <p className="text-on-surface-variant dark:text-slate-400 body-lg">14 Premium hospitals matched your search</p>
          </div>
          {/* Sticky Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center gap-2 bg-surface-container-lowest dark:bg-slate-800 px-4 py-2.5 rounded-full shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 scale-90">tune</span>
              <span className="text-sm font-medium dark:text-slate-200">Filters</span>
            </div>
            <div className="h-6 w-[1px] bg-outline-variant opacity-30 mx-2"></div>
            <button onClick={() => toggleFilter('Price')} className={getFilterClass('Price')}>Price Range</button>
            <button onClick={() => toggleFilter('Rating')} className={getFilterClass('Rating')}>Rating (4.5+)</button>
            <button onClick={() => toggleFilter('Distance')} className={getFilterClass('Distance')}>Distance</button>
          </div>
        </section>

        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-10">
          {/* Hospital Card 1 */}
          <div className="group bg-surface-container-low dark:bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-black/40 border border-slate-100 dark:border-slate-800">
            <Link to="/hospital/1" className="md:w-2/5 relative h-64 md:h-auto overflow-hidden block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/apollo.png" alt="Hospital" />
              <div className="absolute top-4 left-4 bg-tertiary-fixed dark:bg-teal-900 text-on-tertiary-fixed dark:text-teal-100 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Top 5 Cardiology
              </div>
            </Link>
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-primary dark:text-blue-100 italic">Apollo International Health City</h3>
                  <div className="flex items-center gap-1 bg-secondary-fixed dark:bg-blue-900/40 px-3 py-1 rounded-full">
                    <span className="material-symbols-outlined text-xs text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm font-bold dark:text-blue-200">4.9</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 mb-6">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-medium">Sarita Vihar, Delhi • 2.4 km away</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400">
                    <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">check_circle</span>
                    <span className="text-sm">24/7 Concierge Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400">
                    <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">check_circle</span>
                    <span className="text-sm">JCI Accredited</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-outline-variant/20 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-on-surface-variant dark:text-slate-500 uppercase tracking-widest">Est. Travel Cost</span>
                  <div className="text-2xl font-black text-primary dark:text-blue-200 tracking-tight">$4,200 - $5,500</div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => toggleCompare(1)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${selectedHospitals.includes(1) ? 'bg-secondary dark:bg-blue-600 text-white shadow-lg' : 'bg-surface dark:bg-slate-800 border border-outline-variant/30 text-primary dark:text-blue-100 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                  >
                    {selectedHospitals.includes(1) ? 'Selected' : 'Compare'}
                  </button>
                  <Link to="/hospital/1" className="bg-primary dark:bg-blue-700 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg hover:scale-[1.05] active:scale-95 transition-all text-center">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Card 2 */}
          <div className="group bg-surface-container-low dark:bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-black/40 border border-slate-100 dark:border-slate-800">
            <Link to="/hospital/1" className="md:w-2/5 relative h-64 md:h-auto overflow-hidden block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/medanta.png" alt="Hospital" />
              <div className="absolute top-4 left-4 bg-tertiary-fixed dark:bg-teal-900 text-on-tertiary-fixed dark:text-teal-100 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Orthopedic Excellence
              </div>
            </Link>
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-primary dark:text-blue-100 italic">Fortis Memorial Research Inst.</h3>
                  <div className="flex items-center gap-1 bg-secondary-fixed dark:bg-blue-900/40 px-3 py-1 rounded-full">
                    <span className="material-symbols-outlined text-xs text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm font-bold dark:text-blue-200">4.8</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 mb-6">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-medium">Gurgaon, NCR • 12 km away</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400">
                    <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">check_circle</span>
                    <span className="text-sm">Robot-Assisted Surgery</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400">
                    <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">check_circle</span>
                    <span className="text-sm">Private Luxury Suites</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/20 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-on-surface-variant dark:text-slate-500 uppercase tracking-widest">Starting from</span>
                  <div className="text-2xl font-black text-primary dark:text-blue-200 tracking-tight">$5,200</div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => toggleCompare(2)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${selectedHospitals.includes(2) ? 'bg-secondary dark:bg-blue-600 text-white shadow-lg' : 'bg-surface dark:bg-slate-800 border border-outline-variant/30 text-primary dark:text-blue-100 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                  >
                    {selectedHospitals.includes(2) ? 'Selected' : 'Compare'}
                  </button>
                  <Link to="/hospital/1" className="bg-primary dark:bg-blue-700 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg hover:scale-[1.05] active:scale-95 transition-all text-center">
                    View Doctors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Floating Bar */}
        {selectedHospitals.length > 0 && (
          <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-primary dark:bg-blue-900 text-white p-4 rounded-[2rem] shadow-2xl flex items-center justify-between z-[100] animate-in slide-in-from-bottom-10">
            <div className="flex items-center gap-4 ml-2">
              <div className="flex -space-x-4">
                {selectedHospitals.map(id => (
                   <div key={id} className="w-10 h-10 rounded-full border-4 border-primary dark:border-blue-900 overflow-hidden bg-white">
                     <img src={id === 1 ? "/images/apollo.png" : "/images/medanta.png"} className="w-full h-full object-cover" alt="Selected" />
                   </div>
                ))}
              </div>
              <span className="text-sm font-bold">{selectedHospitals.length} Hospital{selectedHospitals.length > 1 ? 's' : ''} Selected</span>
            </div>
            <button 
              onClick={() => navigate('/compare')}
              className="bg-white dark:bg-blue-100 text-primary dark:text-blue-900 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Compare Now
            </button>
          </div>
        )}
      </main>
    </>
  );
}
