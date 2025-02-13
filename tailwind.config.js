/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1170px",
        },
      },
      animation: {
        "spin-slow": "spin 2.5s linear infinite",
        "dot-flash": "dotFlash 1.5s infinite steps(1)",
      },
      keyframes: {
        dotFlash: {
          "0%": { opacity: 1 },
          "33%": { opacity: 0.6 },
          "66%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
