/** @type {import('tailwindcss').Config} */
import { values } from "./tailwind.rewrite";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "1.5lg": "1112px",
      },
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "mobile-nav": "url('/images/bg-pattern-mobile-nav.svg')",
      },
      fontFamily: {
        "dm-serif-display": ["'DM Serif Display'", "serif"],
        Karla: ["Karla", "sans-serif"],
      },
      ...values,
    },
  },
  plugins: [],
};
