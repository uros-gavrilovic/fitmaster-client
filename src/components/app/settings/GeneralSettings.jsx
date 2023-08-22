import CustomBox from "../../reusable/containers/CustomBox";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";

export default function GeneralSettings(props) {
  const { t } = props || {};

  return (
    <CustomBox sx={{ width: "100%" }}>
      <h2>
        <SettingsIcon />
        {t?.tabs?.generalSettings}
      </h2>
      <Box></Box>
    </CustomBox>
  );
}
