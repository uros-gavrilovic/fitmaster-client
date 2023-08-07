import * as React from "react";
import Slide from "@mui/material/Slide";
import { Fragment } from "react";
import { Button } from "@mui/material";

export default function CustomSlide(props) {
  const { active, setActive, container, direction, ...otherProps } =
    props || {};

  return (
    <Fragment>
      <Slide direction={direction} in={active} mountOnEnter unmountOnExit>
        {container}
      </Slide>
    </Fragment>
  );
}
