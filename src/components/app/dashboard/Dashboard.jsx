import { Fragment } from "react";
import ConfirmModal from "../../reusable/modals/ConfirmModal";

export default function Dashboard(props) {
  return (
    <Fragment>
      <h1>This is Dashboard.</h1>
      <ConfirmModal
        title="Lorem ipsum"
        text="Lorem ipsum dolores ipsum latino"
      />
    </Fragment>
  );
}
