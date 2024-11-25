const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
  // Evergreen colors
  "creme-de-la-creme": "#fff6f2",
  "jazzlaugs-lille-sorte": "#171717",
  "jazz-rod": "#f26b54",
  "hubba-bubba": "#f6adc9",
  "noe-gront-no": "#02724A",
  "the-blues": "#17477e",
  // Other colors
  blue: "#0e9ead",
  "dark-blue": "#17477e", // the-blues
  beige: "#fff6f2", // creme-de-la-creme
  indigo: "#288885",
  orange: "#db7b3d",
  pink: "#f6adc9", // hubba-bubba
  green: "#02724A", // noe-gront-no
  "light-green": "#02b373",
  yellow: "#e8c973",
  red: "#f26b54", // jazz-rod
  black: "#171717", // jazzlaugs-lille-sorte
  white: "rgb(241, 241, 241)",
  "chalk-white": "rgb(255, 255, 255)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["ZillaSlab", ...defaultTheme.fontFamily.sans],
        display: ["Poppins"],
        "league-spartan": ["LeagueSpartan"],
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
        solid: `-6px 6px 0px 0px ${colors["pink"]}`,
        "solid-hover": `-10px 10px 0px 0px ${colors["pink"]}`,
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
