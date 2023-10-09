/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  
  theme: {
    extend: {},
  },
  plugins: [],
  
}

// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-animated')
  ],
}
