import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-50": "var(--orange-50)",
        "orange-100": "var(--orange-100)",
        "orange-200": "var(--orange-200)",
        "orange-300": "var(--orange-300)",
        "orange-400": "var(--orange-400)",
        "orange-500": "var(--orange-500)",
        "orange-600": "var(--orange-600)",
        "orange-700": "var(--orange-700)",
        "orange-800": "var(--orange-800)",
        "orange-900": "var(--orange-900)",
        "black-50": "var(--black-50)",
        "black-100": "var(--black-100)",
        "black-200": "var(--black-200)",
        "black-300": "var(--black-300)",
        "black-400": "var(--black-400)",
        "black-500": "var(--black-500)",
        "black-600": "var(--black-600)",
        "black-700": "var(--black-700)",
        "black-800": "var(--black-800)",
        "black-900": "var(--black-900)",
      }
    },
  },
  plugins: [],
};
export default config;
