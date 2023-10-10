/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        4000: "4000ms",
      },
      backgroundImage: {
        ttuPattern: "url('../src/assets/images/bg1top.jpg')",
      },
      colors: {
        cuWhiteSmoke: "#f5f5f5",
        cuBgWhite: "#f3f3f1",
        cuBgLightBrown: "#efeaad",
        cuYello: "#F8FFE5",
        cuGreen: "#06D6A0",
        cuTeal: "#1B9AAA",
        cuRedish: "#EF476F",
        cuYellow: "#FFC43D",
        cuVoilet: "#340068",
        cuRed: "#D64045",
        cuIndigo: "#1C448E",
      },
    },
  },
  plugins: [],
};
