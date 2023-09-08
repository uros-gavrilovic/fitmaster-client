import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d2d922",
    },
    secondary: {
      main: "#d2d922",
    },
    background: {
      paper: "#2E2E2E",
      default: "#2E2E2E",
    },
    success: {
      main: "#4caf50",
      light: "#77ED8B",
      dark: "#118D57",
    },
    error: {
      main: "#f44336",
      light: "#FFE4DE",
      dark: "#B71D18",
    },
    menu: {
      default: "#272727",
      dark: "#272727",
      light: "#2F2F2F",
    },
  },
});

export default darkTheme;
