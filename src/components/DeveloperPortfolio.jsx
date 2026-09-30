import React from 'react';
import { 
  Code2, Layers, Cpu, Database, GitBranch, Terminal, 
  Mail, Sparkles, CheckCircle2 
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function DeveloperPortfolio() {
  const techStack = [
    { name: 'Mobile Architecture', desc: 'React Native / Flutter native core with 60FPS fluid UI transitions' },
    { name: 'State & Caching', desc: 'Redux Toolkit + MMKV high-speed offline persistent storage for QR passes' },
    { name: 'Live Telemetry', desc: 'WebSockets & MQTT for low-latency GPS express bus location tracking' },
    { name: 'Payment Integrations', desc: 'Bakong KHQR, ABA Mobile Pay, ACLEDA, and Apple Pay checkout pipelines' },
    { name: 'Build Pipeline', desc: 'Fastlane automated CI/CD compiling signed standalone APK & IPA packages' },
    { name: 'Mapping & Routing', desc: 'Mapbox SDK with offline Cambodia road network and terminal coordinates' },
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-[#0c0e14] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D26A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13281d] border border-[#1e3d2d] text-[#00D26A] text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            Engineering & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Scale & <span className="text-[#00D26A]">Reliability</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            TripZ is architected with an offline-first foundation to handle highway signal drops gracefully.
          </p>
        </div>

        {/* Tech Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[24px] bg-[#161922] border border-[#282e3e] hover:border-[#00D26A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A]">
                    {idx === 0 && <Layers className="w-5 h-5" />}
                    {idx === 1 && <Database className="w-5 h-5" />}
                    {idx === 2 && <Cpu className="w-5 h-5" />}
                    {idx === 3 && <Terminal className="w-5 h-5" />}
                    {idx === 4 && <GitBranch className="w-5 h-5" />}
                    {idx === 5 && <Code2 className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-mono text-[#00D26A]">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{tech.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#282e3e] flex items-center gap-1.5 text-[11px] text-[#00D26A] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Optimized</span>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Spotlight Card */}
        <div className="bg-[#161922] rounded-[32px] p-8 sm:p-10 border border-[#282e3e] max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D26A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Developer Avatar / Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#00D26A] p-1 shadow-xl shadow-[#00D26A]/20">
                <div className="w-full h-full rounded-[22px] bg-[#0c0e14] flex items-center justify-center text-[#00D26A] font-black text-3xl">
                  TZ
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#00D26A] text-black text-[10px] font-black shadow-md">
                ACTIVE
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#13281d] text-[#00D26A] text-xs font-bold border border-[#1e3d2d]">
                Developer Portfolio Showcase
              </div>
              <h3 className="text-2xl font-bold text-white">
                TripZ Mobility App & Infrastructure
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Engineered to demonstrate mobile development proficiency—from native Android & iOS builds to seamless Cambodian transit booking with live telemetry. Open for mobile and full-stack software development engagements.
              </p>

              {/* Social / Contact Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#212633] hover:bg-[#2c3344] text-xs font-semibold text-slate-200 border border-[#282e3e] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-200" />
                  GitHub Repository
                </a>
                <a
                  href="mailto:contact@tripz.app"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#212633] hover:bg-[#2c3344] text-xs font-semibold text-slate-200 border border-[#282e3e] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00D26A]" />
                  Email Developer
                </a>
                <a
                  href="#downloads"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-xs font-black text-black shadow-md shadow-[#00D26A]/20 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Download APK / IPA
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
