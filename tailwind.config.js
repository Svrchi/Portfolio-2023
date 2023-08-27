/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,js,jsx,tsx}",
    "./pages/**/*.{ts,js,jsx,tsx}",
    "./components/**/*.{ts,js,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        "myspace-blue": "#6699cc",
      },
    },
  },
  plugins: [],
};
