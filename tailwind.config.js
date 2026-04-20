/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        harmony: {
          950: '#040714', // Sophisticated deepest midnight
          900: '#080C24', // Rich, classier main blue
          800: '#0F1640', // Deep naval secondary
          700: '#1A235E',
          600: '#1D3B8A', // Deep refined accent
          500: '#2B5BBF', 
          400: '#4D82E6',
          300: '#7AA1F0',
          200: '#A8C2F7',
          100: '#D6E2FB',
          50: '#F5F8FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'brand': '2rem',
        'super': '3rem',
      },
      animation: {
        'reveal-up': 'revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-left': 'revealLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-right': 'revealRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'harmonyFloat 10s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'ken-burns': 'kenBurns 20s ease infinite alternate',
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        revealRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        harmonyFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-1%, -1%)' },
        },
      },
      boxShadow: {
        'luxury': '0 30px 60px -12px rgba(4, 7, 20, 0.15)',
        'luxury-hover': '0 50px 100px -20px rgba(4, 7, 20, 0.2)',
      }
    },
  },
  plugins: [],
};
