/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      sx: { max: "767px" },
      mx: { max: "868px" },
      lx: { max: "1023px" },
      gx: { max: "1535px" },
      "2xl": { max: "1535px" },
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
