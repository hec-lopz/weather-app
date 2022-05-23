module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        white: {
          custom: "#E7E7EB",
        },
      },
      backgroundImage: {
        clouds: "url(/public/Cloud-background.png)",
      },
      backgroundColor: {
        primary: "#100E1D",
        secondary: "#1E213A",
        grayBtn: "#6E707A",
        searchBtn: "#3C47E9",
      },
      textColor: {
        primary: "#E7E7EB",
        secondary: "#A09FB1",
        terciary: "#88869D",
      },
    },
  },
  plugins: [],
};
