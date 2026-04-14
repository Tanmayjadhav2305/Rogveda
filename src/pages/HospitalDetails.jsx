import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function HospitalDetails() {
  const [selectedDoc, setSelectedDoc] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(1);

  return (
    <>
      <main className="pt-24 pb-32 bg-surface dark:bg-slate-950 transition-colors duration-500">
        {/* Hero Gallery Section */}
        <section className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[600px]">
            <div className="md:col-span-8 overflow-hidden rounded-xl relative group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/apollo.png" alt="Hospital Main" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Rogveda Wellness Center</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-teal-400">location_on</span>
                  <p className="text-sm font-medium opacity-90">Mumbai, Medical District • International Excellence</p>
                </div>
              </div>
            </div>
            <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src="/images/hospital-interior.png" alt="Hospital Interior" />
              </div>
              <div className="overflow-hidden rounded-xl relative cursor-pointer group">
                <img className="w-full h-full object-cover" src="/images/hospital-room.png" alt="Hospital Room" />
                <div className="absolute inset-0 bg-primary/60 dark:bg-blue-900/60 flex items-center justify-center backdrop-blur-[2px] group-hover:bg-primary/50 transition-colors">
                  <span className="text-white font-bold text-lg">+12 Photos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Tabs & Content */}
        <section className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            
            <div className="bg-surface-container-low dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-2xl font-bold tracking-tight mb-6 dark:text-blue-100">About the Facility</h3>
              <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed body-lg">
                Rogveda Wellness Center stands at the intersection of clinical precision and holistic recovery. Founded as a flagship for international patient care, we specialize in minimally invasive cardiology and neuro-rehabilitation...
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary dark:text-blue-400 font-bold text-2xl">450+</span>
                  <span className="text-xs uppercase tracking-widest text-outline dark:text-slate-500">Specialists</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary dark:text-blue-400 font-bold text-2xl">15+</span>
                  <span className="text-xs uppercase tracking-widest text-outline dark:text-slate-500">Theaters</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary dark:text-blue-400 font-bold text-2xl">98%</span>
                  <span className="text-xs uppercase tracking-widest text-outline dark:text-slate-500">Success Rate</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary dark:text-blue-400 font-bold text-2xl">JCI</span>
                  <span className="text-xs uppercase tracking-widest text-outline dark:text-slate-500">Accredited</span>
                </div>
              </div>
            </div>

            {/* Dynamic Pricing / Customization Section */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 space-y-8 transition-colors">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight dark:text-blue-100">Customize Your Package</h3>
                  <p className="text-on-surface-variant dark:text-slate-400 text-sm mt-1">Select your preferred care level and accommodation</p>
                </div>
                <span className="bg-tertiary-fixed dark:bg-teal-900 text-on-tertiary-fixed dark:text-teal-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Dynamic Pricing</span>
              </div>

              {/* Step 1: Doctor Selection */}
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-outline dark:text-slate-500 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">clinical_notes</span> 1. Select Specialist
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div onClick={() => setSelectedDoc(1)} className={`border-2 p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${selectedDoc===1 ? 'border-primary dark:border-blue-500 bg-primary-fixed/10 dark:bg-blue-900/40' : 'border-outline-variant dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} relative`}>
                    <img className="w-16 h-16 rounded-full object-cover" src="/images/doctor-1.png" alt="Doctor 1" />
                    <div>
                      <h4 className={`font-bold ${selectedDoc===1 ? 'text-primary dark:text-blue-300' : 'dark:text-slate-200'}`}>Dr. Sarah Chen</h4>
                      <p className="text-xs text-on-surface-variant dark:text-slate-400">Senior Consultant • 20y Exp.</p>
                      <p className="text-sm font-bold mt-1 dark:text-slate-100">+$1,200</p>
                    </div>
                    {selectedDoc===1 && <span className="material-symbols-outlined absolute top-4 right-4 text-primary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                  </div>
                  <div onClick={() => setSelectedDoc(2)} className={`border-2 p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${selectedDoc===2 ? 'border-primary dark:border-blue-500 bg-primary-fixed/10 dark:bg-blue-900/40' : 'border-outline-variant dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} relative`}>
                    <img className="w-16 h-16 rounded-full object-cover" src="/images/doctor-2.png" alt="Doctor 2" />
                    <div>
                      <h4 className={`font-bold ${selectedDoc===2 ? 'text-primary dark:text-blue-300' : 'dark:text-slate-200'}`}>Dr. Marcus Thorne</h4>
                      <p className="text-xs text-on-surface-variant dark:text-slate-400">Lead Specialist • 12y Exp.</p>
                      <p className="text-sm font-bold mt-1 dark:text-slate-100">+$850</p>
                    </div>
                    {selectedDoc===2 && <span className="material-symbols-outlined absolute top-4 right-4 text-primary dark:text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                  </div>
                </div>
              </div>

              {/* Step 2: Room Type */}
              <div className="space-y-4 pt-4">
                <label className="text-sm font-bold uppercase tracking-widest text-outline dark:text-slate-500 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">bed</span> 2. Room Preference
                </label>
                <div className="flex flex-col gap-3">
                  <div onClick={()=>setSelectedRoom(1)} className={`flex justify-between items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedRoom===1 ? 'bg-primary dark:bg-blue-600 border-primary dark:border-blue-500 text-white shadow-lg' : 'bg-surface-container-low dark:bg-slate-800 border-transparent hover:border-secondary dark:text-slate-200'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedRoom===1 ? 'bg-white/20' : 'bg-white dark:bg-slate-700'}`}>
                        <span className={`material-symbols-outlined ${selectedRoom!==1 ? 'text-secondary dark:text-blue-400' : 'text-white'}`}>hotel_class</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Deluxe Suite</h4>
                        <p className={`text-xs ${selectedRoom===1 ? 'opacity-80' : 'text-on-surface-variant dark:text-slate-400'}`}>Private lounge, view</p>
                      </div>
                    </div>
                    <span className="font-bold">+$450/day</span>
                  </div>
                  <div onClick={()=>setSelectedRoom(2)} className={`flex justify-between items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedRoom===2 ? 'bg-primary dark:bg-blue-600 border-primary dark:border-blue-500 text-white shadow-lg' : 'bg-surface-container-low dark:bg-slate-800 border-transparent hover:border-secondary dark:text-slate-200'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedRoom===2 ? 'bg-white/20' : 'bg-white dark:bg-slate-700'}`}>
                        <span className={`material-symbols-outlined ${selectedRoom!==2 ? 'text-secondary dark:text-blue-400' : 'text-white'}`}>meeting_room</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Standard Room</h4>
                        <p className={`text-xs ${selectedRoom===2 ? 'opacity-80' : 'text-on-surface-variant dark:text-slate-400'}`}>Efficient & Comfortable</p>
                      </div>
                    </div>
                    <span className="font-bold">Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="h-[400px] rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-slate-800 shadow-xl">
               <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[19.0760, 72.8777]}>
                    <Popup>Rogveda Wellness Center</Popup>
                  </Marker>
               </MapContainer>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-primary dark:bg-blue-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden transition-colors border border-primary/20 dark:border-blue-800">
               <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container/20 to-secondary/30 opacity-50"></div>
               <div className="relative z-10">
                 <h4 className="text-sm font-bold uppercase tracking-widest opacity-70">Estimated Total Cost</h4>
                 <div className="text-4xl font-extrabold mt-2 mb-8">$8,500 - $12,000</div>
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary dark:text-blue-400">check_circle</span>
                      <span className="text-xs font-medium">JCI Accredited Facility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary dark:text-blue-400">check_circle</span>
                      <span className="text-xs font-medium">Post-Op Recalibration Care</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary dark:text-blue-400">check_circle</span>
                      <span className="text-xs font-medium">Direct Transfer Included</span>
                    </div>
                 </div>
                 <Link to="/checkout" className="block w-full bg-white dark:bg-slate-100 text-primary dark:text-blue-900 text-center py-4 rounded-xl font-black shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-sm tracking-widest uppercase">Select Package</Link>
                 <p className="text-[10px] text-center mt-6 opacity-50 uppercase tracking-widest font-bold">Price shown in USD</p>
               </div>
            </div>

            <div className="bg-surface-container-high dark:bg-slate-900 p-6 rounded-2xl border border-outline-variant/30 dark:border-slate-800">
               <h4 className="font-bold mb-4 dark:text-blue-100">Ready to proceed?</h4>
               <p className="text-xs text-on-surface-variant dark:text-slate-400 leading-relaxed">
                 Our international concierge team is available to assist with your medical records and travel visa.
               </p>
               <button className="w-full mt-6 py-3 border border-primary dark:border-blue-400 text-primary dark:text-blue-400 rounded-xl text-xs font-bold hover:bg-primary/5 transition-colors">Contact Expert</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
