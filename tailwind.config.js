/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#00A8DC', // Your custom background color
      },
    },
  },
  plugins: [],
}