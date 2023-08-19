/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      beige: '#f0e7db',
      yellow: '#fbd38d',
      teal: {
        50: '#e6fffa',
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
      gray: {
        400: '#525252',
        900: '#202023',
      },
      slate: '#1a202c',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        'm-plus-rounded-1c': ['var(--font-m-plus-rounded-1c)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
