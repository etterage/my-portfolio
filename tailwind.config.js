/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        DarkBlue: "#1E2749",
        WhiteBlue: "#E2E7F4",
        TransparentWhiteBlue: "#E7E8ED"
      },
      width: {
        "60rem": "60rem"
      },
      minHeight: {
        ScreenMinusNav: "calc(100vh - 72px)",
        SmScreen: "60vh"
      },
      maxWidth: {
        MaxChar: "50ch",
        "80ch": "80ch",
        "60rem": "60rem"
      },
      padding: {
        PointOne: ".1rem"
      },
      boxShadow: {
        TopShadow: "0 -.05px 3px",
        Float: "0px 0px 30px rgba(0, 0, 0, 0.04)"
      }
    },
  },
  plugins: [],
}