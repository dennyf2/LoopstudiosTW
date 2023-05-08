/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        Alata: ['Alata', 'sans-serif'],
        JosefinSans: ['Josefin Sans','sans-serif']
      }
    },
  },
  plugins: [],
}

