/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "/frontend/index.html"
    
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}