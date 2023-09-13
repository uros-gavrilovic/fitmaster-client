import { Fragment } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../../reusable/Loading";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BadStatus, GoodStatus } from "../members/StatusBars";
import withTranslations from "../../../utils/HighOrderComponent";
import Chip from "@mui/material/Chip";

const CustomViewer = (props) => {
  const { fields, event, t } = props || {};
  console.log(event);

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
        <AssignmentIcon />
        {t?.fields?.status}
        <GoodStatus>{plan.status}</GoodStatus>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <CheckCircleIcon />
        {t?.fields?.completed}
      </Box>
    </Fragment>
  );
};

export default withTranslations(CustomViewer);
