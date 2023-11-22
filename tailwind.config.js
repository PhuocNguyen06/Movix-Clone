/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#173d77',
      },
      opacity: {
        '67px' : '.67px'
      }
    },
  },
  plugins: [
  ],
}
