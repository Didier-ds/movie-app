/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "5rem",
        xl: "5rem",
        "2xl": "12rem",
      },
    },
    extend: {
      colors: {
        rose: "#BE123C"
      }
    },
  },
  plugins: [],
}