/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        oxanium: ["var(--font-oxanium)", "system-ui", "sans-serif"],
      },
      colors: {
        gradientStart: "#5F2CFF",
        gradientEnd: "#7F5CFF",
        sponsorGold: "#F6C453",
      },
    },
  },
  plugins: [],
};
