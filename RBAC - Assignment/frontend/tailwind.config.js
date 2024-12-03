const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "src/components/**/*.{js,vue,ts}"),
    join(__dirname, "src/layouts/**/*.{js,vue,ts}"),
    join(__dirname, "src/pages/**/*.{js,vue,ts}"),
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}