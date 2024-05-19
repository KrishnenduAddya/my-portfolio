/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0px 0px -15px purple',
      }
    },
  },
  plugins: [],
}