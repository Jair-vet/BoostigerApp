/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: '#3195ff',
      secondaryColor:' #333',
      darkColor: '#000',
      lightColor: '#f4f4f4',
      greenBorder: '#1CB698',
      veryDarkBlue: 'hsl(229, 31%, 21%)',
    },
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
      mono: ['Righteous'],
    },
    opacity: {
      '8': '.8',
    }
  },
  plugins: [],
}
