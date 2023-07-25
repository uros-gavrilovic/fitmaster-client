import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function IconTextField(props) {
  const { icon, title, ...otherProps } = props || {};

  return (
    <Box {...otherProps} sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        {props?.icon}
        <TextField
          {...otherProps}
          label={props.title}
          variant="standard"
          // color="white"
          // inputProps={{ style: { color: "white" } }}
        />
      </Box>
    </Box>
  );
}
