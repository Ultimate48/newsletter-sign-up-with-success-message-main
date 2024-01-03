/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Tomato': 'hsl(4, 100%, 67%)',
        'Dark_Slate_Grey': 'hsl(234, 29%, 20%)',
        'Charcoal_Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)',
        },
        boxShadow: {
          'hover': '0px 20px 25px -13px rgba(255, 98, 87, 1)',
        }
      },
    },
  plugins: [],
}