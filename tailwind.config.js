/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'lg':{'min':'1000px'},
      'tall': { 'raw': '(min-height: 800px)' },
    },
    extend: {  
     colors:{
     'Green': 'hsl(154, 59%, 51%)',
     'text-gray':' hsl(246, 25%, 77%),',
     'text-input':'hsl(249, 10%, 26%) ',
     'Red': 'hsl(0, 100%, 74%) ',
     'Blue': 'hsl(248, 32%, 49%)',
     
     }
    },
  },
  plugins: [],
}

