import React, { useState } from 'react';
import { 
  X, Smartphone, Apple, ShieldCheck, AlertCircle, 
  ExternalLink, Download, Laptop, CheckCircle2, Globe 
} from 'lucide-react';
import { APP_LINKS } from '../config/projectData';

export default function InstallGuideModal({ isOpen, onClose, initialPlatform = 'android' }) {
  const [platform, setPlatform] = useState(initialPlatform);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[32px] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center text-[#19D66B]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Installation Guide</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">Step-by-step instructions to install and run TripZ on your device</p>
          </div>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex p-1.5 bg-[var(--bg-card-secondary)] rounded-2xl border border-[var(--border-color)] mb-6">
          <button
            onClick={() => setPlatform('android')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              platform === 'android'
                ? 'bg-[#19D66B] text-[#121214] shadow-md shadow-[#19D66B]/25'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Android (.APK)
          </button>
          <button
            onClick={() => setPlatform('ios')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              platform === 'ios'
                ? 'bg-[var(--text-primary)] text-[var(--bg-main)] shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Apple className="w-4 h-4" />
            iOS (.IPA Mobile)
          </button>
        </div>

        {/* Android Instructions */}
        {platform === 'android' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--green-surface)] text-[#19D66B] font-bold text-xs flex items-center justify-center border border-[var(--green-border)]">
                1
              </span>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Download the .APK file</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Click "Download APK" to save <code className="text-[#19D66B] font-mono">TripZ-v1.2.0.apk</code> (61.4 MB) to your Android device.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--green-surface)] text-[#19D66B] font-bold text-xs flex items-center justify-center border border-[var(--green-border)]">
                2
              </span>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Allow "Install Unknown Apps"</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  When prompted by your browser: go to <strong className="text-[var(--text-primary)]">Settings &gt; Security &gt; Install Unknown Apps</strong> and toggle "Allow from this source" on.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--green-surface)] text-[#19D66B] font-bold text-xs flex items-center justify-center border border-[var(--green-border)]">
                3
              </span>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Tap Install & Launch</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Tap <strong className="text-[var(--text-primary)]">Install</strong>. Once completed, tap <strong className="text-[var(--text-primary)]">Open</strong> to experience TripZ smart bus booking!
                </p>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center gap-3 text-[#19D66B] text-xs">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>Google Play Protect prompt: tap "Install anyway" since this is a direct portfolio developer build.</span>
            </div>
          </div>
        )}

        {/* iOS Instructions: Sideloadly for iPhone */}
        {platform === 'ios' && (
          <div className="space-y-4">
            
            {/* Note about iOS Sideloading */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-center gap-2.5">
              <Laptop className="w-5 h-5 text-[#19D66B] flex-shrink-0" />
              <span>Apple requires sideloading for developer IPAs outside the App Store. Sideloadly lets any iPhone user install it for free in 3 minutes:</span>
            </div>

            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--bg-card-elevated)] text-[var(--text-primary)] font-bold text-xs flex items-center justify-center border border-[var(--border-color)]">
                1
              </span>
              <div className="space-y-1.5">
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Download the IPA & Sideloadly</h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Save <code className="text-[#19D66B] font-mono">TripZ-v1.2.0.ipa</code> (10.0 MB) to your PC or Mac. Next, download and open the free tool <strong className="text-[var(--text-primary)]">Sideloadly</strong>.
                </p>
                <div className="pt-1">
                  <a
                    href="https://sideloadly.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#19D66B] hover:underline font-semibold"
                  >
                    <span>Download Sideloadly (Windows / Mac)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--bg-card-elevated)] text-[var(--text-primary)] font-bold text-xs flex items-center justify-center border border-[var(--border-color)]">
                2
              </span>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Connect iPhone & Sign</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Connect your iPhone to your computer via USB. Drag <code className="text-[var(--text-primary)] font-mono">TripZ-v1.2.0.ipa</code> into Sideloadly, type your personal Apple ID, and click <strong className="text-[var(--text-primary)]">Start</strong>. Sideloadly signs and installs the app onto your phone.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--bg-card-elevated)] text-[var(--text-primary)] font-bold text-xs flex items-center justify-center border border-[var(--border-color)]">
                3
              </span>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Trust Profile & Launch</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  On your iPhone, navigate to <strong className="text-[var(--text-primary)]">Settings &gt; General &gt; VPN & Device Management</strong>, tap your Apple ID profile, and tap <strong className="text-[#19D66B]">Trust</strong>. Tap the TripZ app icon on your home screen to launch!
                </p>
              </div>
            </div>

            {/* Alternative PWA / Web option */}
            <div className="mt-4 p-4 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-start gap-3 text-xs text-[var(--text-primary)]">
              <Globe className="w-5 h-5 text-[#19D66B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#19D66B] block mb-0.5">Don't have a computer right now?</strong>
                <span>You can also open <a href={APP_LINKS.WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-[#19D66B]">trip-z-web-application.web.app</a> in iPhone Safari, tap <strong>Share &gt; Add to Home Screen</strong> to run TripZ fullscreen with zero setup!</span>
              </div>
            </div>

          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] text-[var(--text-primary)] text-sm font-semibold transition-colors cursor-pointer border border-[var(--border-color)]"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
