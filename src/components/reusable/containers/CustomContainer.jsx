import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CustomContainer(props) {
  let bgcolor = props.color ? props.color : "RGB(28,29,29)";
  let height = props.height ? props.height : "auto";
  let maxWidth = props.maxWidth ? props.maxWidth : "sm";

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={maxWidth}>
        <Box
          className={props.className}
          sx={{ bgcolor, height, padding: "3vh" }}
        >
          {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
