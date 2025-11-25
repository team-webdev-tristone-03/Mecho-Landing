/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#FFF5E6',
        'brand-orange': '#FF6A00',
        'brand-yellow': '#FFB60A',
        'brand-dark': '#111827',
        'brand-footer': '#0D0D16',
      },
    },
  },
  plugins: [],
}