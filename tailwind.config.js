/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#4EFDF3",
        theme: "#222222",
        white: "#FFFFFF",
        grey: "#5D5D5D",
      },
    },
  },
  plugins: [require("daisyui")],
};
