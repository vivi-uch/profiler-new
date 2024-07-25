/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#1F70B2', 
        customWhite: 'rgba(255, 255, 255, 0.95)', // equivalent to #FFFFFFF2
      },
    },
  },
  plugins: [],
}

