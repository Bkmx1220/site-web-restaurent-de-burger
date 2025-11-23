/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#ff6b00",
        "brand-yellow": "#ffcc00",
        "brand-red": "#e63946",
      },
    },
  },
  plugins: [],
}
