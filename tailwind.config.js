module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './pages/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                beatsBlack: {
                    900: '#121212',
                    800: '#202020',
                    700: '#2C2C2C',
                    400: '#333333',
                    100: '#414141',
                },

                beatsWhite: {
                    900: '#E0E0E0',
                    700: '#A0A0A0',
                    500: '#696969',
                    100: '#878787',
                    full: '#FFFFFF',
                },

                beatsGreen: {
                    900: '#A8CF45',
                    700: '#B8CF7C',
                    500: '#687E2F',
                    300: '#3F452F',
                    100: '#31322D',
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

            borderRadius: {
                '10px': '0.625rem',
                '20px': '1.25rem',
                '3px': '3px',
            },

            backgroundImage: {
                'before-decorator': "url('/before.svg')",
                'after-decorator': "url('/after.svg')",
            },
            transitionDuration: {
                400: '400ms',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
