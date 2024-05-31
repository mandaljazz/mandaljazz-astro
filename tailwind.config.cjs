const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(139, 197, 255)",
        "dark-blue": "rgb(1, 90, 143)",
        indigo: "rgb(158, 0, 89)",
        orange: "rgb(255, 84, 0)",
        pink: "rgb(255, 0, 84)",
        yellow: "rgb(247, 205, 107)",
        black: "rgb(18, 18, 18)",
        white: "rgb(241, 241, 241)",
        "chalk-white": "rgb(255, 255, 255)",
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
        solid: "-6px 6px 0px 0px rgb(139, 197, 255)",
        "solid-hover": "-10px 10px 0px 0px rgb(139, 197, 255)",
      },
      animation: {
        orbit: "orbit-right 10s linear infinite",
        "sideways-right-fast": "sideways-right 10s ease-in-out infinite",
        "sideways-right-medium": "sideways-right 30s ease-in-out infinite",
        "sideways-right-slow": "sideways-right 53s ease-in-out infinite",
        "sideways-left-fast": "sideways-left 10s ease-in-out infinite",
        "sideways-left-medium": "sideways-left 30s ease-in-out infinite",
        "sideways-left-slow": "sideways-left 53s ease-in-out infinite",
        "up-down-fast": "up-down 8s ease-in-out infinite",
        "up-down-medium": "up-down 20s ease-in-out infinite",
        "up-down-slow": "up-down 33s ease-in-out infinite",
        "down-up-fast": "down-up 8s ease-in-out infinite",
        "down-up-medium": "down-up 20s ease-in-out infinite",
        "down-up-slow": "down-up 33s ease-in-out infinite",
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
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(30%)" },
          "100%": { transform: "translateY(0)" },
        },
        "down-up": {
          "0%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-30%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
