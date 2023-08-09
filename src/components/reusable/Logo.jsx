import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import app from "../../constants/appData";

export default function Logo(props) {
  const { variant } = props || {};

  return (
    <div style={{ color: "white", display: "inline" }}>
      <center>
        <h1>
          {app.name[0]}
          <i>{app.name[1]}</i>
          <sub className="subscript">v{app.version}</sub>
        </h1>
        <FitnessCenterIcon sx={{ fontSize: "10vh" }} />
      </center>
    </div>
  );
}
