/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  backgroundImage: {
    "bg-image":
      "url('./public/gradient-islamic-pattern-background-vector.jpg')",
  },
  plugins: [],
};
