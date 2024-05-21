/*eslint-env node*/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      screens: {
        "xs-max": { raw: "(max-width: 410px)" },
        "lg-max": { raw: "(max-width: 1023px)" },
      },
    },
  },
};
