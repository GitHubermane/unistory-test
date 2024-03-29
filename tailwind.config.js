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
      colors: {
        'orange': {
          light: "#E75626",
          dark: "#BE3B10",
        },
        'gray': {
          light: "#C7C7C7",
          DEFAULT: "#D2C4C4",
          dark: "#5A5A5A",
        },
        'black': {
          light: '#1E1E20',
          DEFAULT: "#262628",
          dark: "#171719"
        },
        'smoky': {
          DEFAULT: '#323232',
        }
      }
    },
  },
  plugins: [],
}

