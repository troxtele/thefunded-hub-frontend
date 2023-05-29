/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        exs: "340px",
      },
      colors: {
        "main-bg": "#090913",
        light: "#3E2A50",
        primary: "#C7B3FC",
        "login-input": "#372439",
        all: "#C381FC",
      },
      backgroundImage: {
        map: "../images/map.svg",
      },
      fontFamily: {
        codePro: "Code Pro regular",
        codeProLight: "Code Pro light",
        codeProBold: "Code Pro bold",
        Montserrat: "Montserrat",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  fontDisplay: {},
};
