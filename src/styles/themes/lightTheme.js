import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#104022",
      light: "#1A6E32",
      dark: "#0A2E12",
      contrastText: "white",
    },
    background: {
      paper: "#F0F0F0",
    },
    secondary: {
      main: "#30556d",
      light: "#3f6884",
      dark: "#234258",
      contrastText: "white",
    },
    success: {
      main: "#4caf50",
      light: "rgba(34, 197, 94, 0.16)",
      dark: "rgb(17, 141, 87)",
    },
    error: {
      main: "#f44336",
      light: "rgba(255, 86, 48, 0.16)",
      dark: "rgb(183, 29, 24)",
    },
    warning: {
      main: "#ff9800",
      light: "rgba(255, 171, 0, 0.16)",
      dark: "rgb(183, 110, 0)",
    },
    neutral: {
      main: "#795548",
      light: "rgba(145, 158, 171, 0.16)",
      dark: "rgb(99, 115, 129)",
    },
    menu: {
      light: "#e0e0e0",
      default: "#2E2E2E",
      dark: "#e0e0e0",
    },
  },
});

export default lightTheme;
