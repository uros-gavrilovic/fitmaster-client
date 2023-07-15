import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons(props) {
  const { leftIcon, rightIcon, variant, width, height, title, ...otherProps } =
    props || {};

  return (
    <Stack direction="row" spacing={2}>
      <Button
        {...otherProps}
        variant={variant}
        color="secondary"
        startIcon={leftIcon}
        endIcon={rightIcon}
        style={{ width, height }}
      >
        {props.title}
      </Button>
    </Stack>
  );
}
