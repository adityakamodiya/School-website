/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#fdfcf7',
          100: '#f9f6e5',
          200: '#f1eabb',
          300: '#e7d983',
          400: '#dbbf4c',
          500: '#c69d2d',
          600: '#ab7b23',
          700: '#8b5d1e',
          800: '#734d1d',
          900: '#62421c',
          950: '#38220c',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'heading': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
