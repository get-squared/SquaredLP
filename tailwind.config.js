/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          500: '#265078',
          600: '#183F63',
          700: '#10304E',
          800: '#0B2741',
          900: '#071E2B ',
        },
        'teal': {
          100: '#C5F5FA',
          200: '#ADF7FF',
          300: '#90F0F7',
          400: '#74DDE7',
          500: '#4EC5D0',
        },
        'grey': {
          100: '#EFF6FF',
          200: '#DFE9F3',
          300: '#D8E1EA',
        },
        'purple': {
          100: '#EADBFF',
          200: '#CAA4FF',
          300: '#B47EFF',
          400: '#955EDE',
          500: '#7D3ED1',
          600: '#6B2AC1',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Helvetica'],
        titles: ['Titles font', 'sans-serif', 'system-ui'],
      },
      fontSize: {
        'h1': '56px',
        'h2': '50px',
        'h3': '44px',
        'h4': '32px',
        'h5': '24px',
        'h6': '20px',
        'p': '17px',
        'link': '16px',
        'caption1': '14px',
        'caption2': '13px',
      },
      backgroundImage: (theme) => ({
        "gradient-light1": [
          `linear-gradient(90.15deg, ${theme("colors.dark.500")} 0.25%, ${theme("colors.teal.400")} 99.76%)`,
        ],
        "gradient-light2": [
          `linear-gradient(90.15deg, ${theme("colors.dark.500")} 0.25%, ${theme("colors.teal.500")} 99.76%)`,
        ],
        "gradient-medium": [
          `linear-gradient(51.45deg, ${theme("colors.dark.800")} 0.05%, ${theme("colors.dark.500")} 99%)`,
        ],
        "gradient-dark": [
          `linear-gradient(192.45deg, ${theme("colors.dark.900")} -0.41%, ${theme("colors.dark.700")} 94.4%)`,
        ],
      }),
    },
  },
  plugins: [],
}

