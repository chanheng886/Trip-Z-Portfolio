import React from 'react';
import { 
  Bus, Clock, MapPin, CreditCard, Route, Smartphone, ShieldCheck, Sparkles 
} from 'lucide-react';
import { APP_FEATURES } from '../config/projectData';

export default function FeaturesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Bus': return <Bus className="w-5 h-5 text-[#19D66B]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#19D66B]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#19D66B]" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-[#19D66B]" />;
      case 'Route': return <Route className="w-5 h-5 text-[#19D66B]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#19D66B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#19D66B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#19D66B]" />;
    }
  };

  return (
    <section id="features" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Built Around the <span className="text-[#19D66B]">Journey</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            The key features engineered into the TripZ mobile and web applications to streamline Cambodian intercity transit.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_FEATURES.map((feat, idx) => (
            <div
              key={feat.title}
              className={`p-6 sm:p-7 rounded-[28px] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(feat.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[var(--bg-card-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] uppercase tracking-wider">
                    {feat.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#19D66B] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Tag indicator */}
              <div className="mt-5 pt-3 border-t border-[var(--border-color)] flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19D66B]" />
                <span>TripZ Application Feature</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
