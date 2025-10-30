/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': '#b3a369',
        'bg-light': '#f0f2f5',
        'bg-dark': '#1d232c',
        'text-light': '#3b4a5e',
        'text-dark': '#e7edf3',
        'secondary-light': '#dce4ec',
        'secondary-dark': '#2a3544',
      },
      fontFamily: {
        'heading': ['"Montserrat Alternates"', 'sans-serif'],
        'body': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
