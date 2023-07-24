/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
   
    
    extend: {animation: {
      text: 'text 5s ease infinite',
      
    },
    boxShadow: {
      neon: "0 0 5px theme('colors.sky.200'), 0 0 20px theme('colors.sky.700')",
    },
    
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'top center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'bottom center',
        },
      },
    },},
  },
  plugins: [],

}