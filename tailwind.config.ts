import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        secondary: {
          DEFAULT: "#666666",
          dark: "#999999",
        },
        accent: {
          DEFAULT: "#dee041",
          dark: "#dee041",
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        foreground: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      spacing: {
        "section": "8rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

