import React from 'react';
import { Compass, Network, Smartphone, MapPin, Info, ArrowUpRight } from 'lucide-react';
import { ABOUT_CARDS, PROJECT_INFO } from '../config/projectData';

export default function AboutSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#19D66B]" />;
      case 'Network': return <Network className="w-6 h-6 text-[#19D66B]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#19D66B]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#19D66B]" />;
      default: return <Compass className="w-6 h-6 text-[#19D66B]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            Project Overview
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            What is <span className="text-[#19D66B]">TripZ</span>?
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {PROJECT_INFO.longDescription}
          </p>
        </div>

        {/* 4 Core Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CARDS.map((card) => (
            <div
              key={card.number}
              className="p-7 rounded-[28px] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl font-black text-[var(--text-muted)] group-hover:text-[#19D66B] transition-colors">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(card.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#19D66B] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                <span>Cambodian Transit</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-[#19D66B] transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Boundary Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-[var(--text-primary)]">
            <span className="font-bold text-[#19D66B]">Scope Reminder:</span> This portfolio website introduces the TripZ project and the Unnooob team. All passenger search, seat reservation, and ticketing workflows are executed within the client applications.
          </p>
        </div>

      </div>
    </section>
  );
}
