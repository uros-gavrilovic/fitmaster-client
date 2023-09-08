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
    secondary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
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
      default: "#2E2E2E",
    },
  },
});

export default lightTheme;
