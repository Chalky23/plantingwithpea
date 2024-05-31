/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#283618",
        lightgreen: "#6B8A58",
        cream: "#fefae0",
        beige: "#dda15e",
      },
    },
  },
};
