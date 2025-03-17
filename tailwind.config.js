/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
darkMode: "class",
  theme: {
    extend: {
      colors:{
        mint:"#29F0B4",
      }
    },
  },
  // plugins: [],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], 
  }

}


