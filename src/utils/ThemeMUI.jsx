import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(41,42,43)",
    },
    secondary: {
      main: "rgb(210, 217, 34)",
      contrastText: "rgb(210, 217, 34)",
    },
    white: {
      main: "white",
    },
  },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "rgb(81,83,85)",
//       main: "rgb(41,42,43)",
//       dark: "rgb(28,29,29)",
//       contrastText: "white",
//     },
//     secondary: {
//       light: "rgb(232, 237, 137)",
//       main: "rgb(210, 217, 34)",
//       dark: "rgb(183,191,30)",
//       contrastText: "white",
//     },
//     red: {
//         light: "rgb(255, 0, 0)",
//         main: "rgb(255, 0, 0)",
//         dark: "rgb(255, 0, 0)",
//         contrastText: "white",
//     }
//   },
// });

export default theme;
