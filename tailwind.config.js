/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#fffafa",
        primary: "#008000",
        accent: "#fffff0",
      }
    },
  },
  plugins: [],
}

