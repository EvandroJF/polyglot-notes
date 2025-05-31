/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2F7',
          100: '#D0DCE9',
          200: '#A1B9D3',
          300: '#7296BE',
          400: '#4A6FA5',
          500: '#385280',
          600: '#2A3D60',
          700: '#1C2840',
          800: '#0E1420',
          900: '#050A10',
        },
        accent: {
          50: '#FFEEEE',
          100: '#FFCFCF',
          200: '#FF9F9F',
          300: '#FF6B6B',
          400: '#FF3B3B',
          500: '#FF0000',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: {
          300: '#86EFAC',
          500: '#22C55E',
          700: '#15803D',
        },
        warning: {
          300: '#FCD34D',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          300: '#FDA4AF',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};