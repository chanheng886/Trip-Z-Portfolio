import React from 'react';
import { Users, Crown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS, TEAM_WORKFLOW } from '../config/projectData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-surface)] border border-[var(--green-border)] text-[#19D66B] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            The Creators
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Meet <span className="text-[#19D66B]">Unnooob</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            Seven members. One project. One journey.
          </p>
        </div>

        {/* 7 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className={`relative rounded-[28px] p-6 bg-[var(--bg-card)] border transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 ${member.isLeader
                ? 'border-[#19D66B]/60 shadow-[#19D66B]/15 sm:col-span-2 lg:col-span-1'
                : 'border-[var(--border-color)] hover:border-[#19D66B]/40'
                }`}
            >
              {/* Leader Badge */}
              {member.isLeader && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#19D66B] text-[#121214] text-[10px] font-black uppercase tracking-wider shadow-md shadow-[#19D66B]/30 flex items-center gap-1">
                  <Crown className="w-3 h-3 text-[#121214]" />
                  <span>TEAM LEADER</span>
                </div>
              )}

              <div>
                {/* Profile Placeholder Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-transform group-hover:scale-105 overflow-hidden ${member.isLeader
                    ? 'bg-[#19D66B] text-[#121214] shadow-md shadow-[#19D66B]/30'
                    : 'bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]'
                    }`}>
                    {typeof member.avatar === 'string' && member.avatar.length <= 3 ? (
                      <span>{member.avatar}</span>
                    ) : (
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#19D66B] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#19D66B] font-semibold">{member.role}</p>
                  </div>
                </div>

                {/* Responsibility */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {member.responsibility}
                </p>
              </div>

              {/* Social Links & Editable Notice */}
              <div className="mt-5 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Editable Placeholder</span>
                <div className="flex items-center gap-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[var(--bg-card-secondary)] hover:bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Workflow Subsection */}
        <div className="rounded-[32px] p-8 sm:p-10 bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#19D66B] uppercase tracking-wider">
              Iterative Process
            </span>
            <h3 className="text-2xl font-black text-[var(--text-primary)]">How Team Unnooob Worked Together</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
              "Every stage of TripZ was developed through collaboration, iteration, and continuous learning."
            </p>
          </div>

          {/* Workflow Sequence Horizontal Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-4">
            {TEAM_WORKFLOW.map((wf) => (
              <div
                key={wf.step}
                className="p-3.5 rounded-2xl bg-[var(--bg-card-secondary)] border border-[var(--border-color)] text-center space-y-1 relative group hover:border-[#19D66B]/50 transition-all shadow-sm"
              >
                <span className="text-[10px] font-mono text-[#19D66B] font-bold block">{wf.step}</span>
                <div className="text-xs font-bold text-[var(--text-primary)]">{wf.name}</div>
                <div className="text-[10px] text-[var(--text-secondary)] leading-tight">{wf.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
