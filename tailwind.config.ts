import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: '#1E2A3A',
        'steel-700': '#2A3A4D',
        'steel-900': '#0D1420',
        mgold: '#B8A15C',
        'mgold-600': '#96834A',
        bone: '#F2EFE6',
        ink: '#1A1A1A',
        flag: '#9F2A26',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        trackout: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
