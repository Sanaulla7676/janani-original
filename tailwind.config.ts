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
        teal: {
          50:  "#E8F4F4",
          100: "#C5E4E4",
          200: "#9ACFCF",
          300: "#60B5B5",
          400: "#2A9A9A",
          500: "#1A8080",
          600: "#167878",
          700: "#106060",
          800: "#0D5252",
          900: "#083C3C",
        },
        navy: {
          900: "#0D1B2A",
          800: "#152438",
          700: "#1E3451",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 30px rgba(26,120,120,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
