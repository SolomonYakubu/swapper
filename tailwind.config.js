/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   hero: "url('../public/images/background.png)",
      // },
      keyframes: {
        bouncer: {
          "0%": { transform: "scale(1,1)      translateY(0)" },
          "0%": { transform: "translateY(0px)" },
          "30%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        bouncing: "bouncer 2s cubic-bezier(0.580, 0.840, 0.620, 1) infinite",
      },
      colors: {
        primary: "#F2D6B3",
        secondary: "#D9B589",
        grad: "#F2D6B3",
        bg1: "#262626",
        bg2: "#262520",
      },
    },
    // colors: {
    //   // 'blue': '#1fb6ff',
    //   // 'pink': '#ff49db',
    //   // 'orange': '#ff7849',
    //   // 'green': '#13ce66',
    //   // 'gray-dark': '#273444',
    //   // 'gray': '#8492a6',
    //   // 'gray-light': '#d3dce6'
    //   // 'primary':'#008bff'

    // },
  },
  plugins: [],
};
