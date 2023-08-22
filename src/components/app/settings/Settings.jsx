import withTranslations from "../../../utils/HighOrderComponent";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DisplaySettings from "./DisplaySettings";
import AccountSettings from "./AccountSettings";
import GeneralSettings from "./GeneralSettings";
import { a11yProps, TabPanel } from "./TabPanel";

const Settings = (props) => {
  const { t } = props || {};

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label={t?.tabs?.generalSettings}
          {...a11yProps(0)}
          icon={<SettingsIcon />}
          iconPosition="start"
        />
        <Tab
          label={t?.tabs?.displaySettings}
          {...a11yProps(1)}
          icon={<DisplaySettingsIcon />}
          iconPosition="start"
        />
        <Tab
          label={t?.tabs?.accountSettings}
          {...a11yProps(2)}
          icon={<ManageAccountsIcon />}
          iconPosition="start"
        />
      </Tabs>
      <Box sx={{ width: "100%" }}>
        <TabPanel value={value} index={0}>
          <GeneralSettings t={t} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DisplaySettings t={t} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AccountSettings t={t} />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default withTranslations(Settings);
