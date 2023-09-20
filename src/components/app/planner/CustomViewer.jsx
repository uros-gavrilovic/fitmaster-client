import { Fragment } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  GoodStatus,
  OkayStatus,
  NeutralStatus,
  BadStatus,
} from "../members/StatusBars";
import withTranslations from "../../../utils/HighOrderComponent";
import { planStatus } from "../../../constants/globals";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const CustomViewer = (props) => {
  const { fields, event, t } = props || {};

  const { plan, loading } = useSelector((state) => state.plansReducer);
  return loading ? (
    // <Loading />
    <Typography>{t?.fields?.loading}</Typography>
  ) : (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {statusComponentMap(t?.status)[plan.status]}
      </Box>
    </Fragment>
  );
};

export default withTranslations(CustomViewer);

const getStatusComponent = (icon, statusText) => (
  <Fragment>
    {icon}
    {statusText}
  </Fragment>
);
const statusComponentMap = (t) => ({
  [planStatus.COMPLETED]: getStatusComponent(
    <EventAvailableIcon />,
    <GoodStatus>{t?.completed?.toUpperCase()}</GoodStatus>
  ),
  [planStatus.CANCELLED]: getStatusComponent(
    <EventBusyIcon />,
    <BadStatus>{t?.cancelled?.toUpperCase()}</BadStatus>
  ),
  [planStatus.AWAITING]: getStatusComponent(
    <CalendarTodayIcon />,
    <NeutralStatus>{t?.awaiting?.toUpperCase()}</NeutralStatus>
  ),
  [planStatus.EXPIRED]: getStatusComponent(
    <EventBusyIcon />,
    <OkayStatus>{t?.expired?.toUpperCase()}</OkayStatus>
  ),
});
