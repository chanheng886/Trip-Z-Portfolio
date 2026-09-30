import React from 'react';
import { ArrowRight, Smartphone, Apple, ExternalLink } from 'lucide-react';
import { APP_LINKS } from '../config/projectData';

export default function FinalCta({ onDownloadApk, onDownloadIpa }) {
  return (
    <section className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#19D66B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Ready to Explore <span className="text-[#19D66B]">TripZ</span>?
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            See what our team built.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Open Web Application */}
          <a
            href={APP_LINKS.WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#19D66B] hover:bg-[#22C55E] text-[#121214] font-black text-sm shadow-xl shadow-[#19D66B]/25 hover:shadow-[#19D66B]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Open Web Application</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Download APK */}
          <button
            onClick={onDownloadApk}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] border border-[var(--border-color)] hover:border-[#19D66B]/40 text-[var(--text-primary)] font-bold text-sm transition-all duration-300 cursor-pointer shadow-sm"
          >
            <Smartphone className="w-4 h-4 text-[#19D66B]" />
            <span>Download APK (v1.2.0)</span>
          </button>

          {/* Download IPA */}
          <button
            onClick={onDownloadIpa}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] border border-[var(--border-color)] hover:border-[#19D66B]/40 text-[var(--text-primary)] font-bold text-sm transition-all duration-300 cursor-pointer shadow-sm"
          >
            <Apple className="w-4 h-4 text-slate-300" />
            <span>Download IPA (v1.2.0)</span>
          </button>
        </div>

        {/* Tagline Footer */}
        <div className="pt-6 text-xs text-[var(--text-muted)] font-mono tracking-wider">
          TripZ • Unnooob • 2026
        </div>

      </div>
    </section>
  );
}
