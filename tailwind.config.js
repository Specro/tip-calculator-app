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
      }
    },
  },
  plugins: [],
}

