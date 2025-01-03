/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF9494",
          hover: "#ff8080",
        },
        secondary: {
          DEFAULT: "#FFD1D1",
          hover: "#ffc2c2",
        },
        accent: "#FFE3E1",
        background: "#FFF5E4",
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
