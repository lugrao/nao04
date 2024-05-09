/*eslint-env node*/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      screens: {
        "xs-max": { raw: "(max-width: 410px)" },
      },
    },
  },
};
