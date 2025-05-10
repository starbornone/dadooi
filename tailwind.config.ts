import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: "#83bec5",
        lavender: "#ad6dbc",
        midnight: "#131734",
        teal: "#4fa296",
      },
      fontFamily: {
        sans: [
          "Rubik",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        neon: ["Neon", "sans-serif"],
        "neon-lines": ["Neon Lines", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
