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
      light: "rgb(119, 237, 139)",
      dark: "rgba(34, 197, 94, 0.16)",
    },
    error: {
      main: "#f44336",
      light: "rgb(255, 172, 130)",
      dark: "rgba(255, 86, 48, 0.16)",
    },
    warning: {
      main: "#ff9800",
      light: "rgb(255, 214, 102)",
      dark: "rgba(255, 171, 0, 0.16)",
    },
    neutral: {
      main: "#795548",
      light: "rgb(145, 158, 171)",
      dark: "rgba(145, 158, 171, 0.16)",
    },
    menu: {
      default: "#272727",
      dark: "#272727",
      light: "#2F2F2F",
    },
  },
});

export default darkTheme;
