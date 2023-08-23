import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Quote({ response }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (Object.keys(response).length !== 0) {
      setQuote(response?.[0]?.quote);
      setAuthor(response?.[0]?.author);
    }
  }, [response]);

  return (
    <Box>
      <Paper sx={{ padding: "2vh" }}>
        <Typography variant="h4">
          <i>{`"${quote}"`}</i>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="h5">{author}</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
