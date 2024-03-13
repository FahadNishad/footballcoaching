/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'main-primary': '#00FFF0',
        'main-dark': '#49BBBD',
        'custom-red': '#dc3545',
      },
      fontSize: {
        'mianheading': '45px',
        'secondheading': '20px',  
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
});