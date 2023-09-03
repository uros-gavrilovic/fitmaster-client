import React from "react";
import { Box } from "@mui/material";

const StatusBox = ({ color, backgroundColor, ...props }) => {
  const boxStyles = {
    height: "auto",
    width: "auto",
    color,
    backgroundColor,
    borderRadius: "5px",
    padding: "0.7ch",
    fontWeight: "bold",
  };

  return <Box sx={boxStyles} {...props}></Box>;
};

export const GoodStatus = (props) => (
  <StatusBox
    color="rgb(17, 141, 87)"
    backgroundColor="rgb(219, 246, 229)"
    {...props}
  />
);

export const OkayStatus = (props) => (
  <StatusBox
    color="rgb(183, 110, 0)"
    backgroundColor="rgb(255, 241, 214)"
    {...props}
  />
);

export const NeutralStatus = (props) => (
  <StatusBox
    color="rgb(85, 85, 85)"
    backgroundColor="rgb(211, 211, 211)"
    {...props}
  />
);

export const BadStatus = (props) => (
  <StatusBox
    color="rgb(183, 29, 24)"
    backgroundColor="rgb(255, 228, 222)"
    {...props}
  />
);
