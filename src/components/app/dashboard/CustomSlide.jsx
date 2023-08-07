import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Fragment } from "react";
import { Button } from "@mui/material";

const icon = <h1>Hello World!</h1>;

export default function CustomSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Fragment>
      <Button onClick={handleChange}>BUTTON</Button>
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Fragment>
  );
}
