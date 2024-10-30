import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // next ui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '999': '999',
      },
      colors: {
        "primary-color": "#1d252d",
        "secondary-color": "#2a343d",
        "tertiary-color": "#15b095",
        "backgroundContainer-color": "#edeff4",
        "backgroundPrimary-color": "#ffffff"
      },
      spacing: {
        "default-layout-w": "1170px",
        "default-layout-header-h": "230px",
        "default-content-w": "770px",
        // 30px
        "default-catefory-w": "400px",
      },
      keyframes: {
        fadeInLeftSmall: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInLeftSmall: "fadeInLeftSmall 1s ease-in-out forwards",
        fadeInUp: "fadeInUp 1s ease-in-out forwards",
      },
      
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
  variants: {
    extend: {
      // Mở rộng các lớp before và after
      before: ['hover', 'focus'],
      after: ['hover', 'focus'],
    },
  },
};
export default config;
