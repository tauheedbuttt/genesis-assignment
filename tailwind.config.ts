import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          COSMIC: "#961A88",
          CLASSIC: "#191978",
          ATOMIC: "#00AEB1",
        },
        secondary: {
          COSMIC: "#EEE1F0",
          CLASSIC: "#E9EEF6",
          ATOMIC: "#EAF9F7",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        lato: ["lato", "Rubik", "sans-serif"],
        poppins: ["Poppins", "Rubik"],
        inter: ["Inter", "Rubik"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
export default config;
