/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      beige: '#f0e7db',
      yellow: '#fbd38d',
      teal: {
        200: '#88ccca',
        300: '#81e6d9',
        700: '#319795',
        800: '#2c7a7b',
      },
      blue: '#3d7aed',
      pink: '#ff63c3',
      purple: {
        500: '#805ad5',
        600: '#6B46C1',
      },
      lightgray: '#525252',
      gray: '#1a202c',
      darkgray: '#202023',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        'm-plus-rounded-1c': ['var(--font-m-plus-rounded-1c)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
