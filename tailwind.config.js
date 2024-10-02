/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: "#131415",
      fontFamily: {
        sans: [
          "Hanken Grotesk",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#1e2125",
        secondary: "#818795",
        darkSecondary: "#323539",
        accent: "#ffd37d",
        background: "#131415",
        textColor: "#fff",
        btnBg: "#564c38"
      },
    },
  },
  plugins: [
    require("tailwindcss-glassmorphism")
  ],
};
