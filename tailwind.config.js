module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueHeader: '#0a2d4c',
      },
      spacing: {
        '65' : '286px',
        '96.5' : '400px',
        '97' : '600px',
        '98' : '650px',
        '28.5' : '117px',
        '29' : '115px',
        '36.5' : '138px',
        '39' : '156px',
        '45' : '185px',
      },
      fontFamily: {
        nunito: ['Nunito'],
        caveat: ['Caveat'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
