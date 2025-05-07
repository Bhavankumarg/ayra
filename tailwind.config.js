/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        perspective: {
          '1000': '1000px',
        },
        transformStyle: {
          '3d': 'preserve-3d',
        },
        rotate: {
          'y-12': 'rotateY(12deg)',
        },
        translate: {
          'x-4': '1rem',
          'x-8': '2rem',
          'x-12': '3rem',
        },
        animation: {
          fadeIn: 'fadeIn 1.5s ease-in-out forwards',
          fadeZoomIn: 'fadeZoomIn 1.2s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeZoomIn: {
            '0%': {
              opacity: '0',
              transform: 'scale(0.95)',
            },
            '100%': {
              opacity: '1',
              transform: 'scale(1)',
            },
          },
        },
      },
    },
    plugins: [
      require('tailwind-clip-path'),
    ],
  };
  