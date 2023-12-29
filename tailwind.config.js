/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ['"Bebas Neue"', "sans-serif"],
        AvenirNextCyr: ['"Avenir Next Cyr"', "sans-serif"],
        Inter: ['Inter', "sans-serif"],

      },
    },
  },
  plugins: [],
}

