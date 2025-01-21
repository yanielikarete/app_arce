/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#024b78',
          light: '#003872',
          dark: '#001f42',
        },
        secondary: {
          DEFAULT: '#f0f4f8',
          light: '#f8fafc',
          dark: '#e2e8f0',
        }
      }
    },
  },
  plugins: [],
};