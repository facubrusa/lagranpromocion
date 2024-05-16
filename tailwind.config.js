/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'text-shadow': '2px 2px 3px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'banner': "url('./assets/banner4.jpg')",
        'banner2': "url('./assets/banner1.jpg')",
      },
    },
  },
  plugins: [],
}