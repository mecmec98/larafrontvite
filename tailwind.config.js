/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '26rem', 
        '128': '38rem',
        
      },
      width: {
        '100': '26rem', 
        '128': '38rem',
      },
      fontFamily: {
        //sans: ['mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

