const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindMobileConfig = require("tailwind-mobile/config");

module.exports = tailwindMobileConfig({
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
});
