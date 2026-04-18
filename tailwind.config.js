/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#454545',
        'bg-light': '#FFFFFF',
        'bg-card': '#F9F9F9',
        'text-light': '#FFFFFF',
        'text-dark': '#1A1A1A',
        'text-grey': '#555555',
        'accent-yellow': '#FCEE21',
        'accent-hover': '#E6D91E',
        'accent-blue': '#0058BC',
      }
    },
  },
  plugins: [],
}

