/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '320px', // 320px width
        'sm': '375px', // 375px width
        'semi-sm': '425px', // 425px width
      },
    },
  },
  plugins: [require("daisyui")],
}

