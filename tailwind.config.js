/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#f97316",
        secondary:"#c2410c",
        cart:"#eab676"
      },
      fontFamily: {
        //sans:["Poetsen One"]
      }
    },
  },
  plugins: [],
}
