import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

export default function IconTextInput(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        {renderIcon(props.icon)}
        <TextField
          fullWidth
          id="input-with-sx"
          label={props.title}
          variant="standard"
          color="white"
          inputProps={{ style: { color: "white" } }}
        />
      </Box>
    </Box>
  );
}

const renderIcon = (iconType) => {
  switch (iconType) {
    case "username":
      return (
        <AccountCircle style={{ color: "white" }} sx={{ mr: 1, my: 0.5 }} />
      );

    case "password":
      return (
        <HttpsRoundedIcon style={{ color: "white" }} sx={{ mr: 1, my: 0.5 }} />
      );
  }
};
