/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#03131a',
        primary: '#d4ff9d',
      },
    },
  },
  plugins: [],
};
