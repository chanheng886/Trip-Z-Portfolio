import React, { useState, useEffect } from 'react';
import { Bus, Moon, Sun, Menu, X, ExternalLink, Download } from 'lucide-react';
import { APP_LINKS, PROJECT_INFO } from '../config/projectData';

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About TripZ', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Inside TripZ', href: '#showcase' },
    { name: 'Journey', href: '#journey' },
    { name: 'Technology', href: '#technology' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)] shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Team Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#19D66B] flex items-center justify-center text-black shadow-md shadow-[#19D66B]/25 group-hover:scale-105 transition-transform duration-300">
              <Bus className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-[var(--text-primary)] font-sans">
                  Trip<span className="text-[#19D66B]">Z</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--green-surface)] text-[#19D66B] border border-[var(--green-border)] tracking-wide uppercase">
                  {PROJECT_INFO.team}
                </span>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] font-medium tracking-tight">
                Cambodia Express Bus Platform
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-secondary)] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark/light theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Open Web App Link */}
            <a
              href={APP_LINKS.WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--text-primary)] bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all cursor-pointer"
            >
              <span>Open Web App</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#19D66B]" />
            </a>

            {/* Download Mobile App Button */}
            <a
              href="#downloads"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#121214] bg-[#19D66B] hover:bg-[#22C55E] shadow-md shadow-[#19D66B]/25 hover:shadow-[#19D66B]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-[var(--bg-card-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[var(--bg-card-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-secondary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-[var(--border-color)] my-2" />
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={APP_LINKS.WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-[var(--bg-card-secondary)] text-[var(--text-primary)] border border-[var(--border-color)]"
                >
                  <span>Web App</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#19D66B]" />
                </a>
                <a
                  href="#downloads"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-black bg-[#19D66B] text-[#121214] shadow-md shadow-[#19D66B]/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
