import React, { useState } from 'react';
import { X, QrCode, Smartphone, Apple, Globe, Copy, Check } from 'lucide-react';
import { APP_LINKS } from '../config/projectData';

export default function QrModal({ isOpen, onClose }) {
  const [platform, setPlatform] = useState('android');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://tripz.app';
  const downloadLink = platform === 'android' 
    ? `${currentUrl}/downloads/TripZ-v1.2.0.apk`
    : platform === 'ios'
    ? `${currentUrl}/downloads/TripZ-v1.2.0.ipa`
    : APP_LINKS.WEB_APP_URL;

  const handleCopy = () => {
    navigator.clipboard.writeText(downloadLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#161922] border border-[#282e3e] rounded-[32px] p-6 sm:p-8 shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#212633] hover:bg-[#2c3344] text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] mx-auto mb-3">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white">Scan to Access</h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-5">
          Scan with your smartphone camera to grab the package or open the web app.
        </p>

        {/* Platform Switcher: 3 Options */}
        <div className="flex p-1 bg-[#212633] rounded-xl border border-[#282e3e] mb-6">
          <button
            onClick={() => setPlatform('android')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              platform === 'android'
                ? 'bg-[#00D26A] text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Android
          </button>
          <button
            onClick={() => setPlatform('ios')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              platform === 'ios'
                ? 'bg-slate-100 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            iOS IPA
          </button>
          <button
            onClick={() => setPlatform('web')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              platform === 'web'
                ? 'bg-[#A78BFA] text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            Web App
          </button>
        </div>

        {/* QR Code Container */}
        <div className="p-4 bg-white rounded-2xl inline-block shadow-xl shadow-[#00D26A]/10 mx-auto relative group">
          <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="white" rx="8" />
            
            {/* Corner Markers */}
            <rect x="15" y="15" width="45" height="45" rx="6" fill="#0c0e14" />
            <rect x="23" y="23" width="29" height="29" rx="3" fill="white" />
            <rect x="29" y="29" width="17" height="17" rx="2" fill="#00D26A" />

            <rect x="140" y="15" width="45" height="45" rx="6" fill="#0c0e14" />
            <rect x="148" y="23" width="29" height="29" rx="3" fill="white" />
            <rect x="154" y="29" width="17" height="17" rx="2" fill="#00D26A" />

            <rect x="15" y="140" width="45" height="45" rx="6" fill="#0c0e14" />
            <rect x="23" y="148" width="29" height="29" rx="3" fill="white" />
            <rect x="29" y="154" width="17" height="17" rx="2" fill="#00D26A" />

            {/* Pattern Dots */}
            <rect x="70" y="20" width="10" height="10" rx="2" fill="#0c0e14" />
            <rect x="85" y="20" width="10" height="10" rx="2" fill="#0c0e14" />
            <rect x="100" y="20" width="20" height="10" rx="2" fill="#0c0e14" />
            <rect x="70" y="35" width="25" height="10" rx="2" fill="#0c0e14" />
            <rect x="110" y="35" width="15" height="10" rx="2" fill="#0c0e14" />
            <rect x="75" y="50" width="10" height="10" rx="2" fill="#0c0e14" />
            <rect x="95" y="50" width="25" height="10" rx="2" fill="#0c0e14" />

            <rect x="20" y="70" width="10" height="25" rx="2" fill="#0c0e14" />
            <rect x="35" y="70" width="20" height="10" rx="2" fill="#0c0e14" />
            <rect x="20" y="105" width="25" height="10" rx="2" fill="#0c0e14" />
            <rect x="50" y="90" width="10" height="25" rx="2" fill="#0c0e14" />

            <rect x="70" y="70" width="15" height="15" rx="2" fill="#0c0e14" />
            <rect x="95" y="70" width="20" height="10" rx="2" fill="#0c0e14" />
            <rect x="125" y="70" width="15" height="20" rx="2" fill="#0c0e14" />
            <rect x="150" y="70" width="30" height="10" rx="2" fill="#0c0e14" />

            {/* Center Bus Icon Badge */}
            <circle cx="100" cy="100" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="91" y="92" width="18" height="16" rx="3" fill="#00D26A" />
            <circle cx="94" cy="105" r="1.5" fill="white" />
            <circle cx="106" cy="105" r="1.5" fill="white" />
            <rect x="93" y="94" width="14" height="6" rx="1" fill="white" />

            {/* Bottom Dots */}
            <rect x="70" y="125" width="20" height="10" rx="2" fill="#0c0e14" />
            <rect x="100" y="120" width="25" height="15" rx="2" fill="#0c0e14" />
            <rect x="135" y="115" width="15" height="20" rx="2" fill="#0c0e14" />
            <rect x="160" y="120" width="20" height="10" rx="2" fill="#0c0e14" />

            <rect x="70" y="150" width="30" height="10" rx="2" fill="#0c0e14" />
            <rect x="110" y="145" width="15" height="25" rx="2" fill="#0c0e14" />
            <rect x="135" y="150" width="25" height="10" rx="2" fill="#0c0e14" />
            <rect x="170" y="145" width="10" height="25" rx="2" fill="#0c0e14" />
          </svg>
        </div>

        {/* Copy Link Bar */}
        <div className="mt-5 p-2 bg-[#0c0e14] rounded-xl border border-[#282e3e] flex items-center justify-between gap-2">
          <span className="text-xs text-slate-400 truncate pl-2 font-mono">
            {downloadLink}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#212633] hover:bg-[#2c3344] text-xs text-[#00D26A] font-bold transition-colors flex-shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
