/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#150925',
        secondary: '#261537',
        start: '#1B062E',
        end: '#120A20',
      }
    },
  },
  plugins: [],
}

// 1B062E 150925 120A20