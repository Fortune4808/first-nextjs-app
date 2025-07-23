import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      fontFamily: {
        title: ['var(--font-title)'],
      },
    },
  },
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
};

export default config;
