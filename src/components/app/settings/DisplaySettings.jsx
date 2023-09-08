import CustomBox from "../../reusable/containers/CustomBox";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Fragment } from "react";
import { useTheme } from "@mui/material";

export default function DisplaySettings(props) {
  const { t } = props || {};

  const theme = useTheme();

  const languagePacks = [
    {
      value: "sr",
      label: "Srpski",
    },
    {
      value: "en",
      label: "English",
    },
  ];

  return (
    <CustomBox sx={{ width: "100%", bgcolor: theme.palette.background.paper }}>
      <h2>
        <DisplaySettingsIcon />
        {t?.tabs?.displaySettings}
      </h2>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "1vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5vw",
          }}
        >
          <p style={{ marginRight: "1vw" }}>
            {`${t?.displaySettings.language}:`}
          </p>
          <TextField
            id="outlined-select-language"
            select
            defaultValue="sr"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {languagePacks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5vw",
          }}
        >
          <p style={{ marginRight: "1vw" }}>
            {`${t?.displaySettings.language}:`}
          </p>
          <TextField
            id="outlined-select-language"
            select
            defaultValue="sr"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {languagePacks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5vw",
          }}
        >
          <p style={{ marginRight: "1vw" }}>
            {`${t?.displaySettings.language}:`}
          </p>
          <TextField
            id="outlined-select-language"
            select
            defaultValue="sr"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {languagePacks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5vw",
          }}
        >
          <p style={{ marginRight: "1vw" }}>
            {`${t?.displaySettings.language}:`}
          </p>
          <TextField
            id="outlined-select-language"
            select
            defaultValue="sr"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {languagePacks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </CustomBox>
  );
}
