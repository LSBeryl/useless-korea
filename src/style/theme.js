import colors from "./various_colors";

const randomIndex = Math.floor(Math.random() * colors.length);

const theme = {
  primary: {
    ...colors[randomIndex],
  },
};

export default theme;
