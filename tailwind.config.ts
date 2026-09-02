import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b1220',
          soft: '#111827',
        },
        cloud: {
          DEFAULT: '#f8fafc',
          muted: '#e2e8f0',
        },
        brand: {
          DEFAULT: '#00A1E0',
          deep: '#032D60',
          accent: '#FFA500',
        },
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(2, 6, 23, 0.06), 0 8px 24px -8px rgba(2, 6, 23, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
