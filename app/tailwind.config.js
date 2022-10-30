/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#343b5e',
        'teal': '#8df2d9',
        'aqua': '#6bd6bb',
      }

    },
  },
  plugins: [],
}
