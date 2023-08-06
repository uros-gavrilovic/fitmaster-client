import { Fragment } from "react";
import BorderedSection from "../../reusable/containers/BorderedSection";
import InfoIcon from "@mui/icons-material/Info";
import CustomCard from "../../reusable/containers/CustomCard";

export default function Dashboard(props) {
  return (
    <Fragment>
      <h1>This is Dashboard.</h1>
      <div style={{ padding: "2em" }}>
        <CustomCard />
        <BorderedSection icon={InfoIcon} title="Icon and title">
          <div>a first child with quite a long text</div>
          <div>a second child</div>
        </BorderedSection>

        <BorderedSection icon={InfoIcon}>
          <div>Icon only</div>
          <div>a second child with quite a long text</div>
        </BorderedSection>
      </div>
    </Fragment>
  );
}
