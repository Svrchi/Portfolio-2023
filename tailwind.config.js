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
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0) 50%, hsla(0, 0%, 0%, 0.3) 50%, hsla(0, 0%, 100%, 0.2))',
        'checker': "url('https://thumbs.dreamstime.com/b/checkerboard-chess-background-509139.jpg')",
      },
      colors: {
        'myspace-blue': '#6699cc',
        'myspace-blue-two': '#b1d0f0',
        'myspace-general-blue': '#4171a2',
        'myspace-header-blue': '#003399',
        'myspace-orange': '#ffcc99',
        'myspace-font-orange': '#ff6705',
        'error-overlay': 'rgba(189, 189, 189, 0.46)',
        'windows98-gray': '#bdc0bf',
        'windows98-border-gray': '#d6dadd',
        'windows98-blue': '#010186',
      },
      borderWidth: {
        inset: '10px 5px 10px 1px',
      },
      borderColor: {
        inset: 'rgba(0, 0, 0, 0.5)',
      },
      borderStyle: {
        inset: 'inset',
      },
    },
  },
  plugins: [],
};
