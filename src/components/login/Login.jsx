import ParticleBackground from "../backgrounds/ParticleBackground";
import IconTextInput from "../reusable/inputFields/IconTextInput";
import IconButton from "../reusable/buttons/IconButton";
import CustomContainer from "../reusable/containers/CustomContainer";
import { ThemeProvider, color, createTheme } from "@mui/system";
import theme from "../../utils/ThemeMUI";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";

const Login = () => {
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
            <FitnessCenterIcon sx={{ fontSize: "10vh" }} />
          </center>
        </div>

        <IconTextInput
          id="txtUsername"
          title="Username"
          icon="username"
          fullWidth
        />
        <IconTextInput
          id="txtPassword"
          title="Password"
          type="password"
          icon="password"
          margin="dense"
          fullWidth
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
            onClick={handleRegister}
          />
          <Link to="/dashboard">
            <IconButton
              title="Login"
              rightIcon={<LoginIcon style={{ color: "white" }} />}
              variant="contained"
              width="100%"
              onClick={handleLogIn}
            />
          </Link>
        </div>
      </CustomContainer>
    </ThemeProvider>
  );
};

const handleRegister = () => {
  console.log("Register successful!");
  // NotificationManager.info("Registration successful!");
};

const handleLogIn = () => {
  console.log("Login successful!");
};

export default Login;
