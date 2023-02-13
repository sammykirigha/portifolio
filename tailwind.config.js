/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#001233",
        beige: "#efe0ca",
        "light-red": "#ff595a",
        "light-blue": "#0d1e3d",
      },
    },
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
