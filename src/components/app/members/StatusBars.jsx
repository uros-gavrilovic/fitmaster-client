import React from "react";
import { Box, useTheme } from "@mui/material";

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

export const GoodStatus = (props) => {
  const theme = useTheme();
  console.log();

  return (
    <StatusBox
      color={
        theme.palette.mode === "light"
          ? theme.palette.success.dark
          : theme.palette.success.light
      }
      backgroundColor={
        theme.palette.mode === "light"
          ? theme.palette.success.light
          : theme.palette.success.dark
      }
      {...props}
    />
  );
};

export const OkayStatus = (props) => {
  const theme = useTheme();

  return (
    <StatusBox
      color={
        theme.palette.mode === "light"
          ? theme.palette.warning.dark
          : theme.palette.warning.light
      }
      backgroundColor={
        theme.palette.mode === "light"
          ? theme.palette.warning.light
          : theme.palette.warning.dark
      }
      {...props}
    />
  );
};

export const NeutralStatus = (props) => {
  const theme = useTheme();

  return (
    <StatusBox
      color={
        theme.palette.mode === "light"
          ? "rgb(85, 85, 85)"
          : "rgb(211, 211, 211)"
      }
      backgroundColor={
        theme.palette.mode === "light"
          ? "rgb(211, 211, 211)"
          : "rgb(85, 85, 85)"
      }
      {...props}
    />
  );
};

export const BadStatus = (props) => {
  const theme = useTheme();

  return (
    <StatusBox
      color={
        theme.palette.mode === "light"
          ? theme.palette.error.dark
          : theme.palette.error.light
      }
      backgroundColor={
        theme.palette.mode === "light"
          ? theme.palette.error.light
          : theme.palette.error.dark
      }
      {...props}
    />
  );
};
