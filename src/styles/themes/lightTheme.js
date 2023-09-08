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
      light: "#DBF6E5",
      dark: "#118D57",
    },
    error: {
      main: "#f44336",
      light: "#FFE4DE",
      dark: "#B71D18",
    },
    menu: {
      light: "#e0e0e0",
      default: "#2E2E2E",
      dark: "#e0e0e0",
    },
  },
});

export default lightTheme;
