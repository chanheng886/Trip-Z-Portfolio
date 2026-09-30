import React from 'react';
import { Layers, Smartphone, Globe, Shield, Server, Database, ArrowDown, ArrowRight } from 'lucide-react';

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            System Blueprint
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            System <span className="text-[#19D66B]">Architecture</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            Clean, decoupled 3-tier architecture designed for high availability and straightforward client scaling.
          </p>
        </div>

        {/* Visual Architecture Diagram Container */}
        <div className="max-w-4xl mx-auto bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[36px] p-6 sm:p-10 shadow-2xl space-y-8 relative">

          {/* Top Layer: Clients */}
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4 text-center">
              Tier 1 • Client Presentation Layer
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Client 1: Flutter Mobile */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all text-center space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center mx-auto">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Flutter Mobile App</h4>
                <p className="text-[11px] text-[var(--text-secondary)]">Android (.APK) & iOS (.IPA)</p>
                <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--bg-main)] text-[#19D66B] border border-[var(--border-color)]">
                  Passenger Interface
                </span>
              </div>

              {/* Client 2: Web Application */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all text-center space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center mx-auto">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Web Application</h4>
                <p className="text-[11px] text-[var(--text-secondary)]">Hosted on Firebase</p>
                <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--bg-main)] text-[#A78BFA] border border-[var(--border-color)]">
                  Firebase CDN
                </span>
              </div>

              {/* Client 3: Admin Dashboard */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] hover:border-[#19D66B]/50 transition-all text-center space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Admin Dashboard</h4>
                <p className="text-[11px] text-[var(--text-secondary)]">Fleet & Route Console</p>
                <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--bg-main)] text-amber-500 border border-[var(--border-color)]">
                  Operator Management
                </span>
              </div>
            </div>
          </div>

          {/* Connection Lines ↓ */}
          <div className="flex flex-col items-center justify-center py-1">
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#19D66B] to-[#22C55E]" />
            <div className="px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[10px] font-mono text-[#19D66B] font-bold flex items-center gap-1.5 shadow-md">
              <ArrowDown className="w-3 h-3 text-[#19D66B]" />
              <span>HTTPS REST JSON (JWT Auth)</span>
            </div>
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#22C55E] to-[#19D66B]" />
          </div>

          {/* Middle Layer: Spring Boot REST API on Render */}
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4 text-center">
              Tier 2 • Application Backend Services (Deployed on Render)
            </div>

            <div className="p-6 rounded-2xl bg-[var(--green-surface)] border border-[var(--green-border)] text-center space-y-3 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#19D66B] text-black flex items-center justify-center mx-auto shadow-md shadow-[#19D66B]/30">
                <Server className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-black text-[var(--text-primary)]">Spring Boot REST API Engine (Render)</h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto">
                Java, Spring Boot, Spring Security JWT tokens, JPA/Hibernate ORM, and booking controllers deployed live on Render Cloud.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]">Auth API</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]">Schedules API</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]">Booking API</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]">Render Cloud Service</span>
              </div>
            </div>
          </div>

          {/* Connection Lines ↓ */}
          <div className="flex flex-col items-center justify-center py-1">
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#19D66B] to-[#22C55E]" />
            <div className="px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[10px] font-mono text-[#19D66B] font-bold flex items-center gap-1.5 shadow-md">
              <ArrowDown className="w-3 h-3 text-[#19D66B]" />
              <span>TCP JDBC Connection Pool</span>
            </div>
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#22C55E] to-[#19D66B]" />
          </div>

          {/* Bottom Layer: PostgreSQL Database on Render */}
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4 text-center">
              Tier 3 • Relational Database Layer (Render PostgreSQL)
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center mx-auto">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[var(--text-primary)]">PostgreSQL Database on Render</h4>
              <p className="text-xs text-[var(--text-secondary)] max-w-lg mx-auto">
                Managed PostgreSQL instance on Render Cloud handling relational schemas for bus routes, schedules, seat reservations, transactions, and audit logs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
