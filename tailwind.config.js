// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        100: '100',
      },
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
        'screen-100': '100vh',
      },
      colors: {
        overlay: 'rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
