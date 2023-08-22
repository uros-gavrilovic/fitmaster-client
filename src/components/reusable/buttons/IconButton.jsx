import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CustomIconButton(props) {
  const {
    leftIcon,
    rightIcon,
    variant,
    width,
    height,
    margin,
    title,
    ...otherProps
  } = props || {};

  return (
    <Stack direction="row" spacing={2}>
      <Button
        {...otherProps}
        variant={variant}
        color="secondary"
        startIcon={leftIcon}
        endIcon={rightIcon}
      >
        {props.title}
      </Button>
    </Stack>
  );
}
