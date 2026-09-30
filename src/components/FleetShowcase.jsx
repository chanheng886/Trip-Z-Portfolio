import React from 'react';
import { Wifi, Sparkles, BatteryCharging, Wind, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FleetShowcase({ onDownloadClick }) {
  const highlights = [
    {
      icon: Wifi,
      title: 'Satellite 5G Onboard',
      desc: 'Seamless video streaming and remote work on the Phnom Penh-Sihanoukville Expressway.',
    },
    {
      icon: BatteryCharging,
      title: '65W Fast-Charging Sockets',
      desc: 'Dedicated USB-C PD and universal AC plugs installed at each sleeper and recliner berth.',
    },
    {
      icon: Wind,
      title: 'Medical-Grade HEPA Filtration',
      desc: 'Continuous micro-filtered air circulation with personalized cooling vents.',
    },
    {
      icon: ShieldCheck,
      title: 'Central Fleet GPS & Telemetry',
      desc: '24/7 central command telemetry monitoring vehicle speed and real-time location.',
    },
  ];

  return (
    <section id="fleet" className="py-24 relative overflow-hidden bg-[#0c0e14] border-t border-[#282e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bus Image Display */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D26A]/30 to-[#00B85C]/10 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative rounded-[32px] overflow-hidden border border-[#282e3e] shadow-2xl bg-[#161922]">
                <img
                  src="/assets/tripz_luxury_bus.jpg"
                  alt="TripZ Express Luxury Coach"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating pill over image */}
                <div className="absolute top-4 left-4 bg-[#161922]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#1e3d2d] text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse" />
                  TripZ Express • Flagship Luxury Fleet
                </div>

                <div className="absolute bottom-4 right-4 bg-[#161922]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#282e3e] text-xs font-semibold text-slate-200">
                  Phnom Penh ➔ Siem Reap • 2.5h Expressway
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Details & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13281d] border border-[#1e3d2d] text-[#00D26A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Fleet & Rider Comfort
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A First-Class Ride Across <span className="text-[#00D26A]">Cambodia</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every coach connected to TripZ undergoes rigorous technical inspections. From quiet overnight sleeper pods to high-speed expressway daytime express vans, enjoy peaceful travel.
            </p>

            {/* Highlights List */}
            <div className="space-y-3.5 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#161922] border border-[#282e3e]">
                    <div className="w-9 h-9 rounded-xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onDownloadClick}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#00D26A] hover:underline tracking-wide uppercase transition-colors cursor-pointer"
              >
                <span>Download App to Reserve Seats</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
