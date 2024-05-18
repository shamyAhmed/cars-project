/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      "mainColor": "#CC6119",
      "mainColorHovered": "#e07b38"
    }
  },
  },
  plugins: [],
  }
  