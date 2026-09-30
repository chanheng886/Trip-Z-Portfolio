import React from 'react';
import { Cpu, Server, Database, Smartphone, Globe, GitBranch, Cloud, Terminal, Shield, Check } from 'lucide-react';
import { TECH_STACK } from '../config/projectData';

export default function TechnologySection() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend (Spring Boot)':
      case 'Backend Engine':
      case 'Backend': return <Server className="w-5 h-5 text-[#19D66B]" />;
      case 'Database (PostgreSQL)':
      case 'Database': return <Database className="w-5 h-5 text-[#19D66B]" />;
      case 'Mobile (Flutter)':
      case 'Mobile Application': return <Smartphone className="w-5 h-5 text-[#19D66B]" />;
      case 'Web Application': return <Globe className="w-5 h-5 text-[#19D66B]" />;
      case 'Cloud & Deployment':
      case 'Deployment & Hosting': return <Cloud className="w-5 h-5 text-[#19D66B]" />;
      case 'Version Control':
      case 'Development & DevOps': return <GitBranch className="w-5 h-5 text-[#19D66B]" />;
      default: return <Cpu className="w-5 h-5 text-[#19D66B]" />;
    }
  };

  return (
    <section id="technology" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Engineering Stack
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Powered by <span className="text-[#19D66B]">Modern Technology</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            The verified, production-grade tools and frameworks implemented by team Unnooob to build TripZ.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-[28px] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#19D66B] transition-colors">
                      {group.category}
                    </h3>
                    <span className="text-[10px] text-[var(--text-muted)]">Used in TripZ</span>
                  </div>
                </div>

                {/* Techs list */}
                <div className="space-y-2.5">
                  {group.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] flex items-start justify-between gap-3 shadow-sm"
                    >
                      <div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{tech.name}</div>
                        <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">{tech.role}</div>
                      </div>
                      <span className="w-4 h-4 rounded-full bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-color)] text-[11px] text-[var(--text-muted)]">
                <span>Verified implementation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
