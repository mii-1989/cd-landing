/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,css}"],
  theme: {
    extend: {
      backgroundImage:
      {
        'logo': "url('./mars-bg.jpg')"
      }
    },
  },
  plugins: [],
}

