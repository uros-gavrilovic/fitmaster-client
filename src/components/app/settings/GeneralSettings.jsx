import CustomBox from "../../reusable/containers/CustomBox";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

export default function GeneralSettings(props) {
  const { t } = props || {};

  const theme = useTheme();

  return (
    <CustomBox sx={{ width: "100%", bgcolor: theme.palette.background.paper }}>
      <h2>
        <SettingsIcon />
        {t?.tabs?.generalSettings}
      </h2>
      <Box></Box>
    </CustomBox>
  );
}
