/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "-sm": { max: "639px" },
        "-md": { max: "867px" },
        "-lg": { max: "1023px" },
      }
    },
  },
  plugins: [],
}
