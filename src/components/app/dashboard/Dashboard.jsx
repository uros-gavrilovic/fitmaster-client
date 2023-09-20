import TotalMembersCard from "./cards/TotalMembersCard";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import withTranslations from "../../../utils/HighOrderComponent";

export const Dashboard = (props) => {
  const { t } = props || {};

  const { user } = useSelector((state) => state.userReducer);

  return (
    <Box>
      <h1>{`${t?.messages?.welcome_back}, ${user.firstName}!`} </h1>

      <div
        style={{
          display: "grid",
          padding: "2em",
          gap: "1em",
          gridTemplateColumns: "repeat(auto-fit, minmax(20vw, 1fr))",
          maxWidth: "70vw",
        }}
      >
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
      </div>
    </Box>
  );
};

export default withTranslations(Dashboard);
