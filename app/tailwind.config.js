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
        'shallow_marine': '#37685b',
        'aqua': '#6bd6bb',
        'shallow_aqua': '#a0e9d6',
      },
      w: {
        '98': '26rem',
      },
      gap: {
        'x-18': '4.7rem',
      },
      right: {
        '0.25': '0.095rem',
      }
    },
  },
  plugins: [],
}
