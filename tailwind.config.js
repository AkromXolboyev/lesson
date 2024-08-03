/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:"20px",
        center:true,
        screens:{
          lg:"1320px"
        }
      }
    },
  },
  plugins: [],
  colors:{
  primary: "#3F51B5"
  }
}