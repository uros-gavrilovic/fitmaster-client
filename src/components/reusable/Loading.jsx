import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
