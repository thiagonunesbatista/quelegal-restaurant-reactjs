/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roadrage: ['Road-Rage', 'sans-serif']
      },
      colors: {
        primary: '#EDD05F',
        secondary: '#292E36'
      }
    }
  },
  plugins: []
};
