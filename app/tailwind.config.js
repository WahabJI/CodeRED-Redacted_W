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
        'marine': '#354b45',
        'deep_marine': '#155342',
        'aqua': '#6bd6bb',
      },
      w: {
        '98': '26rem',
      }

    },
  },
  plugins: [],
}
