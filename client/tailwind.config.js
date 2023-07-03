/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": "#CC0202",
      },
      fontFamily: {
        netflix: ["Roboto Slab", "sans-serif"],
        signInFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("flowbite")],
};
