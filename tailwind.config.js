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
      },
      blue: '#3d7aed',
      pink: '#ff63c3',
      purple: {
        500: '#805ad5',
        600: '#6B46C1',
      },
      gray: '#1a202c',
      darkgray: '#202023',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
