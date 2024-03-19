/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#9BC385",
        blue: "#1E1E2F",
        sky: "#969BB9",
        orange: "#FEBA88",
        pink: "#F1E4D5",
      },
    },
  },
  plugins: [],
};
