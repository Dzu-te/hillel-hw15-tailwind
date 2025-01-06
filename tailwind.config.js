/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {

      'tb': '640px',
      'ds': '1280px',
    },
    extend: {
      backgroundImage: {
        'burger-header-menu': "url('../svg/header-burger.svg')",
        'burger-button': "url('../svg/catalog-burger.svg')",
        'hero-main': "url('../pictures/bgi-main.png')",
        'hero-main-tb': "url('../pictures/bgi-main-tb.png')",
        'assort-dot': "url('../pictures/assort-dot4.png')",

      },
      colors: {
        'custom-blue': '#01B7E6',
        'color-two': '#587478',
        'footer-color': '#777777',

      },
    },
  },
  plugins: [],
}

