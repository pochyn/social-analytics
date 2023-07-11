/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: false,
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        myfont: ["MyFont"],
        sans: ["MyFont", "sans-serif"],
      },
    },
    colors: {
      primary: "#441151",
      secondary: "#EE85B5",
      violet: "#883677",
      congo: "#FF958C",
      success: "#5FC790",
      warning: "#FFA600",
      danger: "#FF5630",
      dark: "#2E3A44",
      info: "#1CA7EC",
      black: "#2E3A44",
      grey1: "#A0AABF",
      grey2: "#C0C6D4",
      grey3: "#F7f7f7",
      light: "#F9FBFC",
      white: "#FFF",
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },

  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
