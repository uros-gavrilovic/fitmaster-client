import React from "react";
import { useTheme } from "@mui/material";
import Chip from "@mui/material/Chip";

const StatusBox = ({ color, backgroundColor, children, ...props }) => {
  const boxStyles = {
    height: "auto",
    width: "auto",
    color,
    backgroundColor,
    padding: "0.7ch",
    fontWeight: "bold",
  };

  return <Chip label={children} sx={boxStyles} {...props} />;
};

export const GoodStatus = (props) => {
  const theme = useTheme();

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
          ? theme.palette.neutral.dark
          : theme.palette.neutral.light
      }
      backgroundColor={
        theme.palette.mode === "light"
          ? theme.palette.neutral.light
          : theme.palette.neutral.dark
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
