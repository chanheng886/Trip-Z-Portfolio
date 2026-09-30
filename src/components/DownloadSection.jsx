import React, { useState } from 'react';
import {
  Smartphone, Apple, Globe, Download, ExternalLink, ShieldCheck,
  Copy, Check, FileCode, Sparkles
} from 'lucide-react';
import { APP_LINKS } from '../config/projectData';

export default function DownloadSection({ onDownloadApk, onDownloadIpa, onOpenGuide }) {
  const [copiedSha, setCopiedSha] = useState('');

  const apkSha = "0822c1d8081b530e57d46c652fbf45d661ddd087969c54c598443f39fbd13ba3";
  const ipaSha = "365b7965847d3f0e9cc65b4714503c55757139f5aea5461d574caaf0f69d9f0a";

  const handleCopy = (type, sha) => {
    navigator.clipboard.writeText(sha);
    setCopiedSha(type);
    setTimeout(() => setCopiedSha(''), 2500);
  };

  return (
    <section id="downloads" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Download className="w-3.5 h-3.5" />
            Client Distributions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Take TripZ <span className="text-[#19D66B]">With You</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            The complete TripZ experience is available through our mobile and web applications.
          </p>
        </div>

        {/* 3 Large Cards: Android, iOS, Web */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1: Android */}
          <div className="rounded-[28px] p-7 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center text-[#19D66B] group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-card-secondary)] text-[#19D66B] border border-[var(--border-color)] uppercase">
                  Android APK
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1.5">Android</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Download the TripZ APK package directly to your Android smartphone.
              </p>

              {/* Specs */}
              <div className="space-y-1.5 bg-[var(--bg-card-secondary)] p-3 rounded-xl border border-[var(--border-color)] text-xs mb-4">
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Package</span>
                  <span className="text-[var(--text-primary)] font-mono">TripZ-v1.2.0.apk</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Size</span>
                  <span className="text-[#19D66B] font-bold">61.4 MB</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Requires</span>
                  <span className="text-[var(--text-primary)]">Android 8.0+</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={onDownloadApk}
                className="w-full py-3.5 px-4 rounded-xl bg-[#19D66B] hover:bg-[#22C55E] text-[#121214] font-black text-xs shadow-md shadow-[#19D66B]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download APK</span>
              </button>

              <button
                onClick={() => onOpenGuide('android')}
                className="w-full text-center text-[11px] text-[var(--text-secondary)] hover:text-[#19D66B] underline transition-colors cursor-pointer"
              >
                Android installation instructions
              </button>
            </div>
          </div>

          {/* Card 2: iOS */}
          <div className="rounded-[28px] p-7 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:scale-110 transition-transform">
                  <Apple className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-card-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] uppercase">
                  iOS IPA
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1.5">iOS</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Install the TripZ iOS application via Sideloadly, AltStore, or TestFlight.
              </p>

              {/* Specs */}
              <div className="space-y-1.5 bg-[var(--bg-card-secondary)] p-3 rounded-xl border border-[var(--border-color)] text-xs mb-4">
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Package</span>
                  <span className="text-[var(--text-primary)] font-mono">TripZ-v1.2.0.ipa</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Size</span>
                  <span className="text-[var(--text-primary)] font-bold">9.1 MB</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Requires</span>
                  <span className="text-[var(--text-primary)]">iOS 15.0+</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={onDownloadIpa}
                className="w-full py-3.5 px-4 rounded-xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#19D66B]" />
                <span>Download IPA</span>
              </button>

              <button
                onClick={() => onOpenGuide('ios')}
                className="w-full text-center text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline transition-colors cursor-pointer"
              >
                iOS sideload instructions
              </button>
            </div>
          </div>

          {/* Card 3: Web */}
          <div className="rounded-[28px] p-7 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center text-[#19D66B] group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-card-secondary)] text-[#A78BFA] border border-[var(--border-color)] uppercase">
                  Web App
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1.5">Web</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Open TripZ directly in your browser with zero download needed.
              </p>

              {/* Specs */}
              <div className="space-y-1.5 bg-[var(--bg-card-secondary)] p-3 rounded-xl border border-[var(--border-color)] text-xs mb-4">
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Access</span>
                  <span className="text-[var(--text-primary)]">Desktop / Laptop</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Technology</span>
                  <span className="text-[#A78BFA] font-bold">Flutter + Spring Boots</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Hosting</span>
                  <span className="text-[var(--text-primary)]">Cloud Hosted</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={APP_LINKS.WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] border border-[var(--border-color)] hover:border-[#19D66B]/50 text-[var(--text-primary)] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Web App</span>
                <ExternalLink className="w-4 h-4 text-[#19D66B]" />
              </a>

              <p className="text-center text-[11px] text-[var(--text-muted)]">
                External TripZ production web client
              </p>
            </div>
          </div>

        </div>

        {/* SHA-256 Checksum note */}
        <div className="mt-12 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)] shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#19D66B]" />
            <span>Developer signed packages • SHA-256 integrity verified</span>
          </div>
          <a
            href="/downloads/checksums.txt"
            download
            className="text-[#19D66B] hover:underline font-semibold flex items-center gap-1"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>checksums.txt</span>
          </a>
        </div>

      </div>
    </section>
  );
}
