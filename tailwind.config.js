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
      animation: {
        'bounce-twice': 'bounce 0.5s ease-in-out 2',
        'shake': 'shake 0.5s ease-in-out 0.5',
      },
      keyframes: {
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-0.2rem)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(0.2rem)' },
        },
      },
    },
    plugins: [],
  }
}
