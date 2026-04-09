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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-dark": "#0A0A0A",
        "bg-light": "#F5F0EB",
        accent: "#E8593C",
        "accent-hover": "#D04A2E",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A3A3A3",
        "text-dark": "#1A1A1A",
        "card-dark": "#1A1A1A",
        "border-subtle": "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
