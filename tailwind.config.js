/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1280px",
      },
    },
  },
  plugins: [],
};