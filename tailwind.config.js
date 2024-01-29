import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      maxWidth: {
        dw: "2700px"
      },
      colors: {
        g_text_color: "#222222"
      },
      fontFamily: {
        Abhaya: 'Abhaya Libre'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

