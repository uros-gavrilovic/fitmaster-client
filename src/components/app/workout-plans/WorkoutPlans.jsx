import { Fragment } from "react";
import CustomAccordion from "../../reusable/containers/CustomAccordion";
import CustomTransferList from "../../reusable/containers/CustomTransferList";

export default function WorkoutPlans(props) {
  return (
    <Fragment>
      <h1>This is WorkoutPlans.</h1>
      <CustomAccordion />
      <CustomTransferList />
    </Fragment>
  );
}
