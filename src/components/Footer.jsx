import React from 'react';
import { Bus, Smartphone, Apple, Globe, Heart } from 'lucide-react';
import { APP_LINKS, PROJECT_INFO } from '../config/projectData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer({ onDownloadApk, onDownloadIpa }) {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border-color)] text-[var(--text-secondary)] text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#19D66B] flex items-center justify-center text-black shadow-md shadow-[#19D66B]/20">
                <Bus className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-2xl font-black text-[var(--text-primary)]">
                  Trip<span className="text-[#19D66B]">Z</span>
                </span>
                <p className="text-[10px] text-[#19D66B] font-semibold">{PROJECT_INFO.tagline}</p>
              </div>
            </div>
            
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
              A comprehensive Cambodia express bus booking platform engineered by team Unnooob. Developed using Spring Boot, PostgreSQL, and Flutter.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
              <span>Team: <strong className="text-[#19D66B]">{PROJECT_INFO.team}</strong></span>
              <span>•</span>
              <span>Project Year: {PROJECT_INFO.year}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#19D66B] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#19D66B] transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-[#19D66B] transition-colors">Features</a></li>
              <li><a href="#journey" className="hover:text-[#19D66B] transition-colors">Journey</a></li>
              <li><a href="#technology" className="hover:text-[#19D66B] transition-colors">Technology</a></li>
              <li><a href="#team" className="hover:text-[#19D66B] transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Application Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Application</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onDownloadApk}
                  className="hover:text-[#19D66B] flex items-center gap-1.5 transition-colors text-left cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#19D66B]" />
                  <span>Android APK</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onDownloadIpa}
                  className="hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors text-left cursor-pointer"
                >
                  <Apple className="w-3.5 h-3.5 text-slate-400" />
                  <span>iOS IPA</span>
                </button>
              </li>
              <li>
                <a
                  href={APP_LINKS.WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A78BFA] flex items-center gap-1.5 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Web Application</span>
                </a>
              </li>
              <li>
                <a href="/downloads/checksums.txt" download className="hover:text-[var(--text-primary)] transition-colors">
                  Checksums (.txt)
                </a>
              </li>
            </ul>
          </div>

          {/* Team & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Social</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={APP_LINKS.GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--text-secondary)]" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] flex items-center gap-2 transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-[var(--text-secondary)]" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[var(--text-secondary)]" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-center sm:text-left">
            © 2026 Unnooob. TripZ Project.
          </p>
          <div className="flex items-center gap-1 text-[var(--text-muted)]">
            <span>Developed with passion by Team Unnooob</span>
            <Heart className="w-3 h-3 text-[#19D66B] fill-[#19D66B]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
