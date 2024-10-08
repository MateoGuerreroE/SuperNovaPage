import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
        "3xl": "2200px",
        "h-xs": { raw: "(min-height: 500px)" },
        "h-sm": { raw: "(min-height: 750px)" },
        "h-md": { raw: "(min-height: 1000px)" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mulish: "var(--font-mulish)",
        leagotic: "var(--font-leagotic)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          extend: "dark",
          colors: {
            focus: "#6A0DAD",
            primary: "#6A0DAD",
            secondary: "#FF1493",
          },
        },
      },
    }),
  ],
};
export default config;
