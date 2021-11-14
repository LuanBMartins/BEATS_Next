module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beatsBlack: {
          900: '#121212',
          700: '#2C2C2C',
          400: '#333333',
          100: '#414141',
        },

        beatsWhite: {
          900: '#E0E0E0',
          700: '#A0A0A0',
          500: '#696969',
        },

        beatsGreen: {
          900: '#A8CF45',
          500: '#B8CF7C',
        },

        beatsYellow: {
          900: '#FAEA3C',
          500: '#D2C964',
        },

        beatsRed: {
          900: '#EA6A6A',
        },
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        SourceSans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
