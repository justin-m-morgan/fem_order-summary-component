const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: theme => ({
        'pattern-desktop': "url('../images/pattern-background-desktop.svg')",
        'pattern-mobile': "url('../images/pattern-background-mobile.svg')"
      }),
      colors: {
        primary: {
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)",
        },
        neutral: {
          pale: "hsl(225, 100%, 98%)",
          soft: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)",
        },
      },
      boxShadow: {
        primarybright: "0 15px 15px hsl(245, 75%, 52%, 0.2)",
        neutraldark: "0 35px 35px hsl(223, 47%, 23%, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
