const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#8bc5ff",
        "dark-blue": "#390099",
        indigo: "#9e0059",
        orange: "#ff5400",
        pink: "#ff0054",
        yellow: "#ffbd00",
        black: "#121212",
        white: "#f1f1f1",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        display: ["Libre Baskerville"],
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
