import { Link, useNavigate } from 'react-router-dom';

export default function Compare() {
  const navigate = useNavigate();

  const mockHospitals = [
    {
      id: 1,
      name: "Apollo International Health City",
      img: "https://images.unsplash.com/photo-1586773860418-d319a22851ec?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      price: "$4,850",
      distance: "2.4 km",
      jci: true,
      concierge: true,
      roomTypes: "Standard, Suite, Luxury",
      highlights: "Top 5 Cardiology, Robotic Surgery",
      docs: 140
    },
    {
      id: 2,
      name: "Fortis Memorial Research Inst.",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      price: "$5,200",
      distance: "12 km",
      jci: true,
      concierge: true,
      roomTypes: "Standard, Premium, Luxury Suite",
      highlights: "Orthopedic Excellence, VIP Wings",
      docs: 110
    }
  ];

  return (
    <main className="min-h-screen bg-surface dark:bg-slate-950 pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto transition-colors duration-500">
      <div className="mb-8 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-surface-container dark:bg-slate-800 hover:bg-surface-container-high dark:hover:bg-slate-700 rounded-full transition-colors flex items-center justify-center dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-blue-100">Compare Hospitals</h1>
          <p className="text-on-surface-variant dark:text-slate-400 body-lg">Side-by-side breakdown of your selected facilities.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-outline-variant/20 dark:border-slate-800 overflow-x-auto no-scrollbar transition-colors">
        <div className="min-w-[800px] p-8">
          
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-6 mb-8 border-b border-outline-variant/20 dark:border-slate-800 pb-8">
            <div className="col-span-1 flex flex-col justify-end">
              <span className="text-lg font-bold text-outline dark:text-slate-500 uppercase tracking-widest">Select to Book</span>
            </div>
            {mockHospitals.map(h => (
              <div key={h.id} className="col-span-1 flex flex-col pt-4">
                 <div className="w-full h-32 rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
                   <img src={h.img} alt={h.name} className="w-full h-full object-cover" />
                 </div>
                 <h2 className="text-xl font-bold tracking-tight text-primary dark:text-blue-100 mb-1">{h.name}</h2>
                 <div className="flex items-center gap-1 mb-4">
                   <span className="material-symbols-outlined text-[16px] text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                   <span className="font-bold text-sm text-secondary dark:text-blue-400">{h.rating}</span>
                 </div>
                 <Link to={`/hospital/${h.id}`} className="bg-primary dark:bg-blue-600 text-white text-center py-3 rounded-xl font-bold hover:bg-primary-container dark:hover:bg-blue-500 transition-colors shadow-sm">
                   View Facility
                 </Link>
              </div>
            ))}
          </div>

          {/* Metric Rows */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl hover:bg-surface-container-lowest dark:hover:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">Starting Price</div>
              <div className="font-black text-2xl text-primary dark:text-blue-200">{mockHospitals[0].price}</div>
              <div className="font-black text-2xl text-primary dark:text-blue-200">{mockHospitals[1].price}</div>
            </div>
            
             <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl bg-surface-container-lowest dark:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">Distance from Airport</div>
              <div className="font-medium dark:text-slate-200">{mockHospitals[0].distance}</div>
              <div className="font-medium dark:text-slate-200">{mockHospitals[1].distance}</div>
            </div>

            <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl hover:bg-surface-container-lowest dark:hover:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">Key Highlights</div>
              <div className="font-medium text-sm text-on-surface-variant dark:text-slate-400 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary dark:text-teal-400">check_circle</span> {mockHospitals[0].highlights}
              </div>
              <div className="font-medium text-sm text-on-surface-variant dark:text-slate-400 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary dark:text-teal-400">check_circle</span> {mockHospitals[1].highlights}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl bg-surface-container-lowest dark:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">JCI Accredited</div>
              <div className="font-medium">
                {mockHospitals[0].jci ? <span className="material-symbols-outlined text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> : '-'}
              </div>
              <div className="font-medium">
                {mockHospitals[1].jci ? <span className="material-symbols-outlined text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> : '-'}
              </div>
            </div>

             <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl hover:bg-surface-container-lowest dark:hover:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">Concierge Support</div>
              <div className="font-medium">
                {mockHospitals[0].concierge ? <span className="material-symbols-outlined text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span> : '-'}
              </div>
              <div className="font-medium">
                {mockHospitals[1].concierge ? <span className="material-symbols-outlined text-secondary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span> : '-'}
              </div>
            </div>

             <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl bg-surface-container-lowest dark:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">Total Doctors</div>
              <div className="font-medium dark:text-slate-200">{mockHospitals[0].docs}+ Specialists</div>
              <div className="font-medium dark:text-slate-200">{mockHospitals[1].docs}+ Specialists</div>
            </div>

            <div className="grid grid-cols-3 gap-6 items-center p-4 rounded-2xl hover:bg-surface-container-lowest dark:hover:bg-slate-800/40 transition-colors">
              <div className="font-bold text-outline dark:text-slate-500">Room Configuration</div>
              <div className="font-medium text-sm dark:text-slate-300">{mockHospitals[0].roomTypes}</div>
              <div className="font-medium text-sm dark:text-slate-300">{mockHospitals[1].roomTypes}</div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
