module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#db2777",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
