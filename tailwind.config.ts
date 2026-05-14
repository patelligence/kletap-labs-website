import type { Config } from "tailwindcss";

// Patelligence AI shares the Kletap design language, with a slightly more
// violet-leaning accent to give the sub-brand its own identity.
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#050B18",
        "background-2": "#08111F",
        surface: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.10)",
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#F8FAFC",
        },
        electric: "#22D3EE",
        violet: "#8B5CF6",
        foreground: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "blue-glow":
          "radial-gradient(circle at center, rgba(59,130,246,0.35), transparent 60%)",
        "electric-glow":
          "radial-gradient(circle at center, rgba(34,211,238,0.25), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
