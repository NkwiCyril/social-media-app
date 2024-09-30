/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'], 
      },
      colors: {
        primary: '#323539',
        accent: '#ffd37d',
        background: '#131415',
        textColor: '#d9e4ed',
      },
    },
  },
  plugins: [],
}
