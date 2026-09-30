import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ProductShowcase from './components/ProductShowcase';
import DevelopmentJourney from './components/DevelopmentJourney';
import TechnologySection from './components/TechnologySection';
import SystemArchitecture from './components/SystemArchitecture';
import TeamSection from './components/TeamSection';
import StatsAndGoalSection from './components/StatsAndGoalSection';
import DownloadSection from './components/DownloadSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import InstallGuideModal from './components/InstallGuideModal';
import Toast from './components/Toast';
import { APP_LINKS } from './config/projectData';

export default function App() {
  // Read persisted theme preference or default to dark
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tripz_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const [toast, setToast] = useState(null);
  const [guideState, setGuideState] = useState({ isOpen: false, platform: 'android' });

  // Synchronize Dark/Light theme class on <html> document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('tripz_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('tripz_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const triggerFileDownload = (filePath, fileName) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadApk = () => {
    triggerFileDownload(APP_LINKS.APK_URL, 'TripZ-v1.2.0.apk');
    setToast({
      message: 'Downloading TripZ-v1.2.0.apk (61.4 MB)',
      subMessage: 'Android standalone package for testing and evaluation.',
    });
  };

  const handleDownloadIpa = () => {
    triggerFileDownload(APP_LINKS.IPA_URL, 'TripZ-v1.2.0.ipa');
    setToast({
      message: 'Downloading TripZ-v1.2.0.ipa (10.0 MB)',
      subMessage: 'iOS mobile package ready for Sideloadly or AltStore.',
    });
  };

  const handleOpenGuide = (platform = 'android') => {
    setGuideState({ isOpen: true, platform });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#19D66B] selection:text-black flex flex-col relative overflow-x-hidden theme-bg-main theme-text-primary transition-colors duration-300">
      {/* Sticky Navigation with Dark/Light toggle */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Showcase Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onDownloadApk={handleDownloadApk}
          onDownloadIpa={handleDownloadIpa}
        />

        {/* 2. What is TripZ? */}
        <AboutSection />

        {/* 3. Built Around the Journey (Features) */}
        <FeaturesSection />

        {/* 4. Inside TripZ (Device Mockups) */}
        <ProductShowcase />

        {/* 5. From Idea to Application (4-Month Journey) */}
        <DevelopmentJourney />

        {/* 6. Powered by Modern Technology (Tech Stack) */}
        <TechnologySection />

        {/* 7. System Architecture (Visual 3-Tier Diagram) */}
        <SystemArchitecture />

        {/* 8. Meet Unnooob (7 Members + Workflow) */}
        <TeamSection />

        {/* 9. Statistics & Pedagogical Goal */}
        <StatsAndGoalSection />

        {/* 10. Client Download Station */}
        <DownloadSection
          onDownloadApk={handleDownloadApk}
          onDownloadIpa={handleDownloadIpa}
          onOpenGuide={handleOpenGuide}
        />

        {/* 11. Final Call To Action */}
        <FinalCta
          onDownloadApk={handleDownloadApk}
          onDownloadIpa={handleDownloadIpa}
        />
      </main>

      {/* Footer */}
      <Footer
        onDownloadApk={handleDownloadApk}
        onDownloadIpa={handleDownloadIpa}
      />

      {/* Installation Guide Modal */}
      <InstallGuideModal
        isOpen={guideState.isOpen}
        initialPlatform={guideState.platform}
        onClose={() => setGuideState({ isOpen: false, platform: 'android' })}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          subMessage={toast.subMessage}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
