const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)"
        },
        neutral: {
          pale: "hsl(225, 100%, 98%)",
          soft: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
