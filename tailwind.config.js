/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3F72AF",
          hover: "#355e91",
        },
        secondary: {
          DEFAULT: "#DBE2EF",
          hover: "#c4d0e0",
        },
        accent: "#F9F7F7",
        background: "#112D4E",
      },
      fontFamily: {
        display: ["Raleway", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
