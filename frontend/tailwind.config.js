//import "./app/globals.css";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "body-light": "var(--body-light-color)",
        "body-dark": "var(--body-dark-color)",
        "navbar-light": "var(--navbar-light-color)",
        "navbar-dark": "var(--navbar-dark-color)",
        "text-light": "var(--text-dark-color)",
        "text-dark": "var(--text-color)",
      },
    },
  },
  plugins: [],
};
