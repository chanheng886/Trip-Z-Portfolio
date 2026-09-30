import React from 'react';
import { Calendar, CheckCircle2, ArrowRight, GitCommit, Layers, Database, Smartphone, Award, Sparkles } from 'lucide-react';
import { TIMELINE_MONTHS } from '../config/projectData';

export default function DevelopmentJourney() {
  return (
    <section id="journey" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#19D66B]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            4-Month Engineering Roadmap
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            From Idea to <span className="text-[#19D66B]">Application</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            Four months of learning, planning, designing, building, and refining.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {TIMELINE_MONTHS.map((item, idx) => (
            <div
              key={item.month}
              className={`relative rounded-[32px] p-7 sm:p-9 bg-[var(--bg-card)] border transition-all duration-300 shadow-xl ${
                item.isCompleted
                  ? 'border-[#19D66B]/70 shadow-[#19D66B]/10'
                  : 'border-[var(--border-color)] hover:border-[#19D66B]/40'
              }`}
            >
              {/* Header: Month badge, Title, Subtitle Flow */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded-lg bg-[var(--bg-card-secondary)] text-[#19D66B] border border-[var(--border-color)]">
                      {item.month}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  {item.focus && (
                    <p className="text-xs text-[var(--text-secondary)] font-medium pt-0.5">Focus: {item.focus}</p>
                  )}
                </div>

                {/* Subtitle Flow Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)]">
                  <span>{item.subtitle}</span>
                </div>
              </div>

              {/* Stages Grid inside each month */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {item.stages.map((stage, stageIdx) => (
                  <div
                    key={stageIdx}
                    className="p-5 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#19D66B] uppercase tracking-wider">
                        {stage.phase}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#19D66B]" />
                    </div>

                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      {stage.name}
                    </h4>

                    <p className="text-xs text-[var(--text-secondary)]">
                      {stage.desc}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {stage.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#19D66B] flex-shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Month 04 Final Completion Badge */}
              {item.isCompleted && (
                <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-black text-[#19D66B]">
                    <CheckCircle2 className="w-4 h-4 text-[#19D66B]" />
                    <span>PROJECT COMPLETED • ALL DELIVERABLES SUBMITTED</span>
                  </div>
                  <span className="text-[11px] text-[var(--text-secondary)] font-medium">
                    Evaluated & Signed Off by Project Mentor
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
