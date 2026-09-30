import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Smartphone, Apple } from 'lucide-react';

const faqs = [
  {
    q: 'How do I install the .APK file on Android?',
    a: 'Tap "Download APK" to save TripZ-v1.2.0.apk to your phone. Open the downloaded file from your notifications or Files app. If prompted, toggle "Allow from this source" in Settings > Security. Then tap Install and Open.',
  },
  {
    q: 'How can I access TripZ on an iPhone or iPad (iOS)?',
    a: 'You can access TripZ immediately on iOS through our responsive Web Application at trip-z-web-application.web.app. In Safari on your iPhone, tap Share > "Add to Home Screen" to install it as a standalone app on your home screen with zero download needed.',
  },
  {
    q: 'Is the Android APK release file safe?',
    a: 'Yes, 100%. The APK package is a verified developer build compiled directly from clean source code with zero malware or tracking ads. You can verify the SHA-256 checksum listed in the Download Center.',
  },
  {
    q: 'Does TripZ work without an internet connection?',
    a: 'Yes! Once you book a ticket or load your route, your digital boarding pass and QR token are saved locally using MMKV encrypted offline storage, allowing terminal gate attendants to scan your ticket without Wi-Fi or cellular data.',
  },
  {
    q: 'Which payment systems are integrated into the TripZ app?',
    a: 'TripZ integrates Bakong KHQR, ABA Mobile Pay, ACLEDA, Apple Pay, and international Visa/Mastercard, supporting both US Dollars ($) and Khmer Riel (៛) automatically.',
  },
];

export default function FaqSection({ onOpenGuide }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0c0e14] border-t border-[#282e3e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13281d] text-[#00D26A] text-xs font-bold uppercase tracking-wider border border-[#1e3d2d]">
            <HelpCircle className="w-3.5 h-3.5" />
            Support & Installation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-[#00D26A]">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about testing and installing the TripZ mobile release.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#161922] border border-[#282e3e] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#212633] cursor-pointer"
                >
                  <span className="font-semibold text-white text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#212633] flex items-center justify-center text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00D26A] bg-[#13281d]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-[#282e3e] animate-fadeIn">
                    <p>{faq.a}</p>
                    {idx === 0 && (
                      <button
                        onClick={() => onOpenGuide('android')}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] hover:underline cursor-pointer"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        View Visual Android Guide →
                      </button>
                    )}
                    {idx === 1 && (
                      <button
                        onClick={() => onOpenGuide('ios')}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:underline cursor-pointer"
                      >
                        <Apple className="w-3.5 h-3.5 text-[#00D26A]" />
                        View Visual iOS Guide →
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
