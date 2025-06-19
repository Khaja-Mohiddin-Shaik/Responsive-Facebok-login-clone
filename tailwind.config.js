/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./mySocialLogin/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
       'rowtheme': '100px', 
  },
  },
  plugins: [],
}

}