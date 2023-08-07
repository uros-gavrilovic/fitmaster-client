import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export default function Logo(props) {
  const { variant } = props || {};

  return (
    <div style={{ color: "white", display: "inline" }}>
      <center>
        <h1>
          Fit<i>Master</i>
          <sub className="subscript">v0.1</sub>
        </h1>
        <FitnessCenterIcon sx={{ fontSize: "10vh" }} />
      </center>
    </div>
  );
}
