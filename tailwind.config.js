/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0c0a',
          800: '#0d110e',
          700: '#111814',
          600: '#16201a',
          500: '#1c2820',
        },
        botanical: {
          50: '#f0f7f2',
          100: '#d9ebe0',
          200: '#b3d7c1',
          300: '#7ab38a',
          400: '#4d8a5e',
          500: '#2f6b40',
          600: '#1f4d2d',
          700: '#163a22',
          800: '#0f2b18',
          900: '#0a1d11',
          950: '#06140b',
        },
        crimson: {
          50: '#fff0f0',
          100: '#ffe0e0',
          200: '#ffc5c5',
          300: '#ff9b9b',
          400: '#f95e5e',
          500: '#e63946',
          600: '#c1121f',
          700: '#9d0208',
          800: '#7a0a0a',
          900: '#5c0606',
        },
        lily: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        cream: {
          50: '#fefdf9',
          100: '#fdf8ef',
          200: '#f8efd9',
          300: '#efe2c0',
          400: '#e3d0a0',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-15px) translateX(-8px)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-10px) translateX(5px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.7', filter: 'blur(28px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -20px) rotate(5deg)' },
          '50%': { transform: 'translate(-15px, -40px) rotate(-3deg)' },
          '75%': { transform: 'translate(-30px, 10px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
