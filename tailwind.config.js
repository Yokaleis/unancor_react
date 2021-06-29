module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        unancor: {
          blue: "#2D72C9",
          orange: "#FF6139",
          bgglobal: "#F4F4F4",
          bginput: "#FAFAFA",
        },
      },
      height: {
        unancor: {
          boxd: "563px",
        },
      },
      fontFamily: {
        unancor: "Poppins, sans-serif",
      },
      fontSize: {
        xxs: "10px",
        ss: "9px",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, auto))",
      },
    },
  },
  variants: {
    fill: ["group-hover", "hover"],
    stroke: ["group-hover"],
  },
  plugins: [],
};
