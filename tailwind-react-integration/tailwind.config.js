/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // CRITICAL: Scans all .jsx and .tsx files in the src directory
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}