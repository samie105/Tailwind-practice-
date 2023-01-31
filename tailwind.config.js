/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        half: "100px"
      },
      colors: {
        buttonPink: "#8E1044"
      }
    },
  },
  plugins: [],
}
