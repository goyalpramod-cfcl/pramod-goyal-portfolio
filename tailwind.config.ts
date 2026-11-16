import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#18181B",
          deep: "#111113",
          muted: "#27272A",
        },
        ivory: {
          DEFAULT: "#FAF9F6",
          warm: "#F3F1EC",
          border: "#E6E3DC",
        },
        forest: {
          DEFAULT: "#134E4A",
          dark: "#0F3F3C",
          light: "#115E59",
          subtle: "#F0FDF9",
          muted: "#CCFBF1",
        },
        bronze: {
          DEFAULT: "#8C7355",
          light: "#B59E7D",
          subtle: "#F7F4EF",
        },
        slate: {
          body: "#3F3F46",
          muted: "#71717A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        executive: "0 12px 32px -8px rgba(24, 24, 27, 0.06), 0 4px 12px -2px rgba(24, 24, 27, 0.04)",
        card: "0 4px 20px -2px rgba(24, 24, 27, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
