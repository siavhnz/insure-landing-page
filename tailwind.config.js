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
        "light-gray": "rgb(249, 249, 249)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "mobile-nav": "url('/images/bg-pattern-mobile-nav.svg')",
        "mobile-intor-left": "url('/images/bg-pattern-intro-left-mobile.svg')",
        "mobile-intor-right":
          "url('/images/bg-pattern-intro-right-mobile.svg')",
        "desktop-intor-right":
          "url('/images/bg-pattern-intro-right-desktop.svg')",
        "desktop-intor-left":
          "url('/images/bg-pattern-intro-left-desktop.svg')",
        "mobile-how-we-work":
          "url('/images/bg-pattern-how-we-work-mobile.svg')",
        "desktop-how-we-work":
          "url('/images/bg-pattern-how-we-work-desktop.svg')",
        "mobile-footer": "url('/images/bg-pattern-footer-mobile.svg')",
        "desktop-footer": "url('/images/bg-pattern-footer-desktop.svg')",
      },
      backgroundPosition: {
        "left-top-57": "left top 57%",
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
