import React, { useState } from 'react';
import { Smartphone, Monitor, LayoutDashboard, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { APP_LINKS } from '../config/projectData';
import mobileAppImg from '../assets/tripz_mobile_app.png';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <section id="showcase" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#19D66B]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Product Showcase
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Inside <span className="text-[#19D66B]">TripZ</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            Explore authentic screenshots of the TripZ cross-platform client applications developed by the Unnooob team.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-sm">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'mobile'
                  ? 'bg-[#19D66B] text-[#121214] shadow-md shadow-[#19D66B]/25'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Application (Flutter)</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#19D66B] text-[#121214] shadow-md shadow-[#19D66B]/25'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Web Application & Dashboard</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Mobile Application Showcase */}
        {activeTab === 'mobile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto animate-fadeIn">
            
            {/* Left: Device Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[340px] rounded-[48px] p-3 bg-gradient-to-b from-[#303542] via-[#222630] to-[#121214] border border-[#303542] shadow-2xl shadow-black/60 group">
                
                {/* Speaker Grill subtle indicator */}
                <div className="w-16 h-1 bg-[#303542] rounded-full mx-auto mb-2" />

                <div className="relative rounded-[36px] overflow-hidden bg-[#121214] border border-black shadow-inner">
                  <img
                    src={mobileAppImg}
                    alt="TripZ Real Flutter Mobile Application"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* Subtitle tag below device */}
                <div className="mt-3 px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--text-primary)]">Flutter Mobile UI</span>
                  <span className="text-[#19D66B] font-mono text-[10px] font-bold">Android & iOS</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Explanation */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] text-[#19D66B] text-xs font-bold border border-[var(--green-border)]">
                Cross-Platform Flutter & Dart
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                Mobile Application Interface
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The mobile client is the primary interface for travelers across Cambodia. Engineered with Flutter and Dart, it connects directly with our Spring Boot REST API for lightning-fast schedule discovery, station maps, and booking management.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#19D66B] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)]">Express Route & Schedule Search</h4>
                    <p className="text-[11px] text-[var(--text-secondary)]">Instant origin-to-destination departure selector with one-tap location swapping and calendar date picker.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#19D66B] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)]">Nearby Terminal & Station Radar</h4>
                    <p className="text-[11px] text-[var(--text-secondary)]">Live GPS integration pinpointing closest departure hubs (such as Larryta Express BKK1 Hub) and interactive station maps.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#19D66B] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)]">Integrated Navigation & Live Helpdesk</h4>
                    <p className="text-[11px] text-[var(--text-secondary)]">Docked navigation bar for passenger profile, active bookings, telephone hotline, and real-time support chat.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#downloads"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#19D66B] hover:underline"
                >
                  <span>Download Android APK or Explore the Web App in Download Section</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Web Application & Transportation Dashboard */}
        {activeTab === 'web' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
            
            {/* Desktop Browser Window Mockup */}
            <div className="rounded-[28px] overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl">
              
              {/* Browser Top Chrome */}
              <div className="bg-[var(--bg-card-secondary)] px-4 py-3 border-b border-[var(--border-color)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#19D66B]" />
                </div>

                {/* URL Bar */}
                <div className="w-2/3 max-w-md bg-[var(--bg-main)] py-1 px-4 rounded-xl text-center text-xs text-[var(--text-secondary)] font-mono border border-[var(--border-color)] truncate">
                  {APP_LINKS.WEB_APP_URL}
                </div>

                <div className="w-10" />
              </div>

              {/* Inside Dashboard Content Preview */}
              <div className="p-6 sm:p-8 bg-[var(--bg-main)] space-y-6">
                
                {/* Header banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)]">
                  <div>
                    <span className="text-[10px] font-bold text-[#19D66B] uppercase tracking-wider">
                      TripZ Transportation Dashboard
                    </span>
                    <h4 className="text-xl font-black text-[var(--text-primary)]">Central Operations & Fleet Monitoring</h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">Admin web portal connected to Spring Boot REST backend services</p>
                  </div>
                  <a
                    href={APP_LINKS.WEB_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#19D66B] text-[#121214] text-xs font-bold hover:bg-[#22C55E] transition-colors"
                  >
                    <span>Launch Web App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">Active Lines</span>
                    <span className="text-2xl font-black text-[var(--text-primary)]">128</span>
                    <span className="text-[10px] text-[#19D66B] block">Expressways & Provinces</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">Daily Departures</span>
                    <span className="text-2xl font-black text-[#19D66B]">540+</span>
                    <span className="text-[10px] text-[var(--text-secondary)] block">Synchronized schedules</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">Database Engine</span>
                    <span className="text-2xl font-black text-[var(--text-primary)]">PostgreSQL</span>
                    <span className="text-[10px] text-[var(--text-secondary)] block">ACID transactional integrity</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">API Response</span>
                    <span className="text-2xl font-black text-[#A78BFA]">&lt; 45ms</span>
                    <span className="text-[10px] text-[var(--text-secondary)] block">Spring Boot REST API</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Description */}
            <p className="text-xs text-center text-[var(--text-muted)]">
              The Web Application allows both passengers to book tickets from desktop browsers and transport operators to manage schedules, buses, and fares.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}
