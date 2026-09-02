import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#05060f',
          900: '#0a0d1f',
          800: '#111533',
          700: '#1a1f4d',
        },
        neon: {
          violet: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#22d3ee',
          pink: '#ec4899',
        },
        ink: {
          DEFAULT: '#e2e8f0',
          muted: '#94a3b8',
          faint: '#64748b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,0.05) inset, 0 20px 60px -30px rgba(139,92,246,0.35)',
        glow: '0 0 40px -10px rgba(139, 92, 246, 0.55)',
      },
      backgroundImage: {
        'grad-hero':
          'radial-gradient(60% 60% at 20% 10%, rgba(139,92,246,0.35), transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(236,72,153,0.18), transparent 60%)',
        'grad-text':
          'linear-gradient(120deg, #ffffff 0%, #c7d2fe 40%, #67e8f9 70%, #f5d0fe 100%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-16px,0)' },
        },
        blob: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(30px,-20px,0) scale(1.05)' },
          '66%': { transform: 'translate3d(-20px,20px,0) scale(0.98)' },
        },
        gradient: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
        fadeUp: 'fadeUp 700ms cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
