import React from 'react';
import { Target, Award, ArrowRight, BookOpen, Hammer, TestTube, Truck } from 'lucide-react';
import { PROJECT_STATS } from '../config/projectData';

export default function StatsAndGoalSection() {
  const steps = [
    { name: 'Learning', icon: BookOpen, desc: 'Spring Boot, Flutter & Dart mastery' },
    { name: 'Building', icon: Hammer, desc: 'PostgreSQL, REST APIs & UI screens' },
    { name: 'Testing', icon: TestTube, desc: 'Functional & integration verification' },
    { name: 'Delivering', icon: Truck, desc: 'Mentor defense & client builds' },
  ];

  return (
    <section className="py-20 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Project Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PROJECT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-[28px] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#19D66B]/40 transition-all text-center space-y-1 shadow-xl"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#19D66B] font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--text-secondary)]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Mentor / Project Goal Card ("Built to Learn. Built to Deliver.") */}
        <div className="rounded-[36px] p-8 sm:p-12 bg-[var(--green-surface)] border border-[var(--green-border)] shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#19D66B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] text-[#19D66B] text-xs font-bold uppercase tracking-wider border border-[var(--green-border)] shadow-sm">
              <Target className="w-3.5 h-3.5" />
              Pedagogical Objective
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
              Built to Learn. <span className="text-[#19D66B]">Built to Deliver.</span>
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
              "TripZ was developed as a practical software engineering project where our team could transform what we learned into a real-world application."
            </p>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Throughout the four-month development cycle, our team immersed ourselves in modern software engineering principles, rigorous database schema design, enterprise backend architecture, cross-platform mobile development, and agile project management.
            </p>

            {/* Visual Step Representation: Learning → Building → Testing → Delivering */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {steps.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.name} className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-center space-y-1.5 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-[var(--green-surface)] text-[#19D66B] flex items-center justify-center mx-auto border border-[var(--green-border)]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">{st.name}</div>
                    <p className="text-[10px] text-[var(--text-secondary)] leading-tight">{st.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
