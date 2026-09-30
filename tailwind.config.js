/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tripz: {
          primary: '#22C55E',      // Primary green
          bright: '#19D66B',       // Bright green
          darkGreen: '#123B2B',    // Dark green
          greenSurface: 'var(--green-surface)',
          greenBorder: 'var(--green-border)',
          darkBg: 'var(--bg-main)',
          mainCard: 'var(--bg-card-secondary)',
          secondaryCard: 'var(--bg-card)',
          elevated: 'var(--bg-card-elevated)',
          border: 'var(--border-color)',
          borderSec: 'var(--border-secondary)',
          textPrimary: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          textMuted: 'var(--text-muted)',
          accentPurple: '#A78BFA', // Subtle purple/blue-gray accent
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'green-glow': '0 0 25px -4px rgba(25, 214, 107, 0.35)',
        'green-lg': '0 0 45px -10px rgba(34, 197, 94, 0.25)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
