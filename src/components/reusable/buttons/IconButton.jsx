import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons(props) {
  console.log(props.variant);
  let leftIcon = props.leftIcon ? props.leftIcon : false;
  let rightIcon = props.rightIcon ? props.rightIcon : false;

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant={props.variant}
        color="secondary"
        startIcon={leftIcon}
        endIcon={rightIcon}
        style={{ width: props.width, height: props.height }}
      >
        {props.title}
      </Button>
    </Stack>
  );
}
