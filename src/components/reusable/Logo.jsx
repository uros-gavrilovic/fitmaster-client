import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useSelector } from "react-redux";
import { Fragment } from "react";

export default function Logo() {
  const { appVersion } = useSelector((state) => state.appReducer);

  return (
    <Fragment>
      <center>
        <h1>
          Fit<i>Master</i>
          <sub className="subscript">v{appVersion}</sub>
        </h1>
        <FitnessCenterIcon sx={{ fontSize: "10vh" }} />
      </center>
    </Fragment>
  );
}
