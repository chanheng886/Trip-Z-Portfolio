import React from 'react';
import { 
  ArrowRight, Download, Smartphone, Apple, Globe, ExternalLink, 
  MapPin, Sparkles, Navigation, ShieldCheck, Bus 
} from 'lucide-react';
import { APP_LINKS, PROJECT_INFO } from '../config/projectData';
import BusGraphic from './BusGraphic';

export default function Hero({ onDownloadApk, onDownloadIpa }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambience & Route Lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#19D66B]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      {/* Abstract Cambodia Transit Route SVGs in background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 -z-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M 100 250 Q 300 180, 500 320 T 900 200 T 1300 380" fill="none" stroke="#19D66B" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M 200 450 Q 450 350, 700 480 T 1100 390" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="4 8" />
        <circle cx="500" cy="320" r="5" fill="#19D66B" />
        <circle cx="900" cy="200" r="5" fill="#19D66B" />
        <circle cx="700" cy="480" r="5" fill="#A78BFA" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, Project Badge & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Badge: UNNOOOB PROJECT • 2026 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#19D66B] animate-pulse" />
              <span>{PROJECT_INFO.badge}</span>
              <span className="text-[var(--border-color)]">|</span>
              <span className="text-[var(--text-secondary)] text-[11px] font-normal">Cambodia Express Bus Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.12]">
              Explore Cambodia.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#19D66B] via-[#22C55E] to-[#A78BFA]">
                One Journey at a Time.
              </span>
            </h1>

            {/* Supporting Tagline */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {PROJECT_INFO.description}
            </p>

            {/* Crucial Note about Project Showcase vs Booking System */}
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-start gap-3 max-w-xl mx-auto lg:mx-0 text-left shadow-sm">
              <div className="w-5 h-5 rounded-lg bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <p>
                <strong className="text-[var(--text-primary)]">Project Showcase Note:</strong> This website is an engineering portfolio presenting the TripZ architecture and Unnooob team. Actual bus booking is conducted directly inside the TripZ mobile & web applications.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary: Open Web Application */}
              <a
                href={APP_LINKS.WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#19D66B] hover:bg-[#22C55E] text-[#121214] font-bold text-sm shadow-xl shadow-[#19D66B]/25 hover:shadow-[#19D66B]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Open Web Application</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download Mobile App */}
              <a
                href="#downloads"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] border border-[var(--border-color)] hover:border-[#19D66B]/40 text-[var(--text-primary)] font-semibold text-sm transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#19D66B]" />
                <span>Download Mobile App</span>
              </a>
            </div>

            {/* Small Platform Release Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-[var(--text-secondary)]">
              <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">Available:</span>
              <button
                onClick={onDownloadApk}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs transition-colors cursor-pointer shadow-sm"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#19D66B]" />
                <span>Android APK (v1.2.0)</span>
              </button>

              <button
                onClick={onDownloadIpa}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs transition-colors cursor-pointer shadow-sm"
              >
                <Apple className="w-3.5 h-3.5 text-slate-300" />
                <span>iOS IPA (v1.2.0)</span>
              </button>

              <a
                href={APP_LINKS.WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs transition-colors cursor-pointer shadow-sm"
              >
                <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>Web App (Live)</span>
              </a>
            </div>

            {/* Project Quick Highlights */}
            <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-black text-[var(--text-primary)]">4 Months</div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Development Cycle</p>
              </div>
              <div>
                <div className="text-2xl font-black text-[#19D66B]">7 Members</div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Unnooob Team</p>
              </div>
              <div>
                <div className="text-2xl font-black text-[#A78BFA]">3 Apps</div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Android, iOS & Web</p>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Bus Illustration / Abstract Transportation Graphic with Green Accent */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glow backdrop */}
            <div className="absolute w-80 h-80 bg-[#19D66B]/15 rounded-full blur-[100px] -z-10" />

            <div className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[36px] p-6 sm:p-7 shadow-2xl relative">
              
              {/* Graphic Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#19D66B] flex items-center justify-center text-black">
                    <Bus className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[var(--text-primary)]">TripZ Express Transit</h3>
                    <p className="text-[10px] text-[var(--text-secondary)]">Phnom Penh ➔ Siem Reap (2.5h Expressway)</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--green-surface)] text-[#19D66B] border border-[var(--green-border)]">
                  LIVE FLEET
                </span>
              </div>

              {/* Modern VIP Luxury Express Coach Graphic Canvas */}
              <div className="relative py-3 my-0.5 flex items-center justify-center">
                <BusGraphic />
              </div>

              {/* Fleet Feature Badges */}
              <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-[var(--text-muted)] py-1">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19D66B] animate-pulse" />
                  VIP Recliner Berths
                </span>
                <span className="text-[var(--border-color)]">•</span>
                <span>Expressway 120 km/h</span>
                <span className="text-[var(--border-color)]">•</span>
                <span>Live GPS</span>
              </div>

              {/* Status Pills */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-left">
                  <span className="text-[10px] text-[var(--text-muted)] block">Transit Network</span>
                  <span className="text-xs font-bold text-[var(--text-primary)]">25 Provinces</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-left">
                  <span className="text-[10px] text-[var(--text-muted)] block">Architecture</span>
                  <span className="text-xs font-bold text-[#19D66B]">Spring Boot + Flutter</span>
                </div>
              </div>

              {/* Floating Pill: Unnooob Engineering */}
              <div className="absolute -bottom-4 -left-4 bg-[var(--green-surface)] border border-[var(--green-border)] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#19D66B] shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#19D66B]" />
                <span>Engineered by Team Unnooob</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
