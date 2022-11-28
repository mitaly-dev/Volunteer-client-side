/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:'#FCBC45',
        blue:'#3F90FC'
      }
    },
  },
  plugins: [require("daisyui")],
}
