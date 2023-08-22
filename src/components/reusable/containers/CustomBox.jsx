import { Box } from "@mui/material";
import "../../../styles/container.css";

export default function CustomBox(props) {
  const { children, ...otherProps } = props || {};

  return (
    <Box className="container" {...otherProps}>
      {children}
    </Box>
  );
}
