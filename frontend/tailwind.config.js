/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary:"#09001e",
      secondary:"#000383",
      tertiary:"#0e38ae",
      queternary:"#7751a8 ",
      light:"#ffd1ee",
      orange:"#ff6600",
      grey:"#808080",
      white:"#fafafa",
      black:"#000",
      red:"#f00",
      yellowgreen:"#9acd32",
      indigo6:"#4B0082",
      none:"none",
    },
    
    extend: {
      backgroundImage:{
        news:"url('finance.jpg')"
      },
	borderWidth:{1:"1px"},
      gridTemplateRows:{
        7:"repeat(7,minmax(0,1fr))",
        8:"repeat(8,minmax(0,1fr))",
      },
      right:{
        '3/25':"25%"
      },
      left:{
        '450':"450px"
      }
    },
  },
  plugins: [],
}