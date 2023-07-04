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
      backgroundImage: {
        'gradient-radal': "radial-gradient(circle, rgba(254,244,192,1) 0%, rgba(254,240,200,1) 26%, rgba(254,232,200,1) 100%)"
      }
    },
  },
  plugins: [],
}
