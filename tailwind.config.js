/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '42rem',
      },
      fontFamily: {
        //sans: ['mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

