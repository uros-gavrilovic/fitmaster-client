import "./App.css";
import "./styles/center.css";
import "./styles/container.css";
import "./styles/text.css";
import ParticleBackground from "./components/backgrounds/ParticleBackground";
import IconTextInput from "./components/reusable/inputFields/IconTextInput";
import IconButton from "./components/reusable/buttons/IconButton";
import CustomContainer from "./components/reusable/containers/CustomContainer";
import { ThemeProvider, color, createTheme } from "@mui/system";
import theme from "./utils/ThemeMUI";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ParticleBackground />
      <CustomContainer id="test" className="vertical-center container">
        <div style={{ color: "white", display: "inline" }}>
          <center>
            <h1>
              Fit<i>Master</i>
              <sub className="subscript">v0.1</sub>
            </h1>
          </center>
        </div>
        <FitnessCenterIcon fontSize="large" />
        <IconTextInput id="txtUsername" title="Username" icon="username" />
        <IconTextInput
          id="txtPassword"
          title="Password"
          icon="password"
          margin="dense"
        />
        <div
          style={{
            marginTop: "5vh",
            display: "grid",
            width: "auto",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <IconButton
            title="Register"
            leftIcon={<HowToRegIcon style={{ color: "white" }} />}
            variant="outlined"
            width="100%"
          />
          <IconButton
            title="Login"
            rightIcon={<LoginIcon style={{ color: "white" }} />}
            variant="contained"
            width="100%"
          />
        </div>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default App;
