/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "385px",
      },
      colors: {
        darkpurple: "#22143A",
        middlebluepurple: "#8E71BF",
        glossygrape: '#9F90B6',
        lavenderblue: '#C7CDFF',
        brightlavender: '#B593EE',
        darkgray: '#A8A8A8',
      },
      fontFamily: {
        adonis: ["adonis-web", "serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      fontSize: {
        '0.5xl': ['1.375rem', '1.688rem'],
        '2.5xl': ['1.75rem', '2.688rem'],
        '3.2xl': ['2rem', '2.25rem'],
        '3.5xl': ['2.125rem', '2.375rem'],
        '4.5xl': ['2.75rem', '3rem'],
        '4.7xl': ['2.875rem', '3.5rem'],
        '5xl': ['3.125rem', '3.438rem'],
        '5.5xl': ['3.375rem', '3.75rem'],
        '6.2xl': ['4rem', '6rem'],
        '7xl': ['4.625rem', '5rem'],
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      listStyleType: {
        square: 'square',
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
}
