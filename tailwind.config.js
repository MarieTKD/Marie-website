/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      nanum: ['Nanum Pen Script', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif']
    },

    extend: {
      colors: {
        lightGreen: '#C7D36F',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
      }
    },
  },
  plugins: [],
}
