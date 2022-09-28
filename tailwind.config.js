/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#03ba80",
        
"secondary": "#37859b",
        
"accent": "#e070c6",
        
"neutral": "#342E38",
        
"base-100": "#2B395F",
        
"info": "#668CEA",
        
"success": "#21DEB5",
        
"warning": "#CF9717",
        
"error": "#F77A64",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
