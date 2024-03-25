/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coin: "url(./src/assets/coin.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
