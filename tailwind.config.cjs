const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#8bc5ff",
        "dark-blue": "#015a8f",
        indigo: "#9e0059",
        orange: "#ff5400",
        pink: "#ff0054",
        yellow: "#f7cd6b",
        black: "#121212",
        white: "#f1f1f1",
        "chalk-white": "#ffffff",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        display: ["Libre Baskerville"],
      },
      typography: {
        "quoteless-blockquotes": {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      scale: {
        "-100": "-1",
      },
      boxShadow: {
        solid: "-6px 6px 0px 0px #8bc5ff",
        "solid-hover": "-10px 10px 0px 0px #8bc5ff",
      },
      animation: {
        orbit: "orbit-right 10s linear infinite",
        "sideways-right-fast": "sideways-right 10s ease-in-out infinite",
        "sideways-right-medium": "sideways-right 30s ease-in-out infinite",
        "sideways-right-slow": "sideways-right 53s ease-in-out infinite",
        "sideways-left-fast": "sideways-left 10s ease-in-out infinite",
        "sideways-left-medium": "sideways-left 30s ease-in-out infinite",
        "sideways-left-slow": "sideways-left 53s ease-in-out infinite",
      },
      keyframes: {
        "orbit-right": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "20%": { transform: "translate3d(10px, -10px, 0)" },
          "40%": { transform: "translate3d(20px, 0, 0)" },
          "60%": { transform: "translate3d(20px, 20px, 0)" },
          "80%": { transform: "translate3d(10px, 10px, 0)" },
          "90%": { transform: "translate3d(0, 20px, 0)" },
        },
        "sideways-right": {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "sideways-left": {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
