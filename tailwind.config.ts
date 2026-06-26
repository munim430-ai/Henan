import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1B3A6B",
          "navy-dark": "#0F2444",
          "navy-light": "#2563EB",
          green: "#16803C",
          "green-light": "#22C55E",
          "green-dark": "#14532D",
          amber: "#D97706",
        },
      },
    },
  },
  plugins: [],
};

export default config;
