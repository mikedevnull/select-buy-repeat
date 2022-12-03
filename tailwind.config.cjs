/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

module.exports = {
  theme: {
    extend: {},
  },
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  plugins: [typography, daisyui],
};
