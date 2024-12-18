/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/data.json"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'sans-serif']
      },
      colors: {
        'strong-cyan': '#26C0AB',
        'very-dark-cyan': '#00494D',
        'dark-grayish-cyan': '#5E7A7D',
        'grayish-cyan': '#7F9C9F',
        'light-grayish-cyan': '#C5E4E7',
        'very-light-grayish-cyan': '#F4FAFA',
        'red': '#AB7161',
        'green': '#54A49A'
      },
      maxWidth: {
        card: '850px'
      },
      boxShadow: {
         card: '0 40px 40px 0 rgba(0, 73, 77, 0.1)'
      }
    },
  },
  plugins: [],
}

