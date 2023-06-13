/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5465FF',
        secondary: '#D85D5D',
        customGray: '#3C3C3D'
      }
    },
  },
  plugins: [],
}

