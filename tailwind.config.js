/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          600: '#0E5979',
          700: '#0E5979',
          800: '#0E3850',
        },
        'teal': {
          100: '#E1FFF1',
          200: '#AEF3EC',
          300: '#70DBDD',
          400: '#34B9C1',
          500: '#239BA3',
        },
        'grey': {
          100: '#EFF6FF',
          200: '#DEF9F3',
        },
        'purple': {
          100: '#EADBFF',
          200: '#D6C0F5',
          300: '#B47EFF',
          400: '#955EDE',
          500: '#7D3ED1',
          600: '#6B2AC1',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Helvetica'],
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
    },
  },
  plugins: [],
}

