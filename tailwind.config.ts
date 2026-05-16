import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0B1020",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#00D4FF",
          foreground: "#0B1020",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#38BDF8",
          foreground: "#FFFFFF",
        },
        glass: "rgba(255, 255, 255, 0.08)",
        card: "rgba(11, 16, 32, 0.8)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.2)",
        "neon-cyan": "0 0 20px rgba(0, 212, 255, 0.3)",
        "neon-purple": "0 0 20px rgba(124, 58, 237, 0.3)",
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)",
        "gradient-dark": "radial-gradient(circle at top center, #111827 0%, #0B1020 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
