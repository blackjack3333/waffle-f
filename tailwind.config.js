const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        backgroundColor: "#f8f9fa",
        N0: colors.white,
        N1: "#f5f5f5",
        N2: "#ecebf4",
        N3: "#eaeaea",
        N4: "#c4c4c4",
        N5: "#807e7e",
        N6: "#52647c",
        N7: "#212121",
        B1: "#0d6efd",
        LIGHT_TAN: "#f9ccb5",
        DUSTY_ORANGE: "#ee6a25",
        BEIGE: "#f9f2ef;",
      },
      borderRadius: {
        "r-9": "9px",
        "r-10": "10px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["active", "disabled"],
      borderColor: ["active", "disabled"],
      cursor: ["disabled"],
      textDecoration: ["active"],
    },
  },
  plugins: [],
};
