/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'hot': "url('/src/assets/hot.jpg)"
      }
    },
  },
  plugins: [],
}

