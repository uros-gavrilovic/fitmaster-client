import { Fragment } from "react";
import BorderedSection from "../../reusable/containers/BorderedSection";
import InfoIcon from "@mui/icons-material/Info";
import TotalMembersCard from "./cards/TotalMembersCard";
import { Box } from "@mui/material";

export default function Dashboard(props) {
  return (
    <Box>
      <h1>This is Dashboard.</h1>

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

        <BorderedSection icon={InfoIcon} title="Icon and title">
          <div>a first child with quite a long text</div>
          <div>a second child</div>
        </BorderedSection>

        <BorderedSection icon={InfoIcon}>
          <div>Icon only</div>
          <div>a second child with quite a long text</div>
        </BorderedSection>
      </div>
    </Box>
  );
}
