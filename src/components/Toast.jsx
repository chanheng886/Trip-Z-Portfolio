import React from 'react';
import { CheckCircle2, Download, X } from 'lucide-react';

export default function Toast({ message, subMessage, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--green-border)] text-[var(--text-primary)] px-5 py-4 rounded-2xl shadow-2xl shadow-[#19D66B]/20 backdrop-blur-xl animate-fadeIn transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-[var(--green-surface)] border border-[var(--green-border)] flex items-center justify-center text-[#19D66B]">
        <Download className="w-5 h-5 animate-pulse" />
      </div>
      <div>
        <p className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
          {message}
          <CheckCircle2 className="w-4 h-4 text-[#19D66B] inline" />
        </p>
        {subMessage && (
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">{subMessage}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="ml-3 p-1 rounded-lg hover:bg-[var(--bg-card-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
