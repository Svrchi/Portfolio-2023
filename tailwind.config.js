/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,js,jsx,tsx}',
    './pages/**/*.{ts,js,jsx,tsx}',
    './components/**/*.{ts,js,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      fontFamily: {
        Syne: ['Syne'],
        DotGothic: ['DotGothic'],
        Pixel: ['VT323'],
      },
      colors: {
        'myspace-blue': '#6699cc',
        'myspace-blue-two': '#b1d0f0',
        'myspace-general-blue': '#4171a2',
        'myspace-header-blue': '#003399',
        'myspace-orange': '#ffcc99',
        'myspace-font-orange': '#ff6705',
        'error-overlay': 'rgba(189, 189, 189, 0.46)',
      },
      borderWidth: {
        'inset': '10px 5px 10px 1px'
      },
      borderColor: {
        'inset': 'rgba(0, 0, 0, 0.5)'
      },
      borderStyle: {
        'inset': 'inset'
      }
    },
  },
  plugins: [],
};
