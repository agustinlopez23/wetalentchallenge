/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        secondary: '#fe8833d9',
        secondaryHover: '#fe8833',
        accent: '#6B7280',
        background: '#F9FAFB',
        text: '#4B5563',
        link: '#3B82F6',
        hover: '#C7D2FE'
      }
    }
  },
  plugins: []
}
