import ParticleBackground from "../backgrounds/ParticleBackground";
import IconTextInput from "../reusable/inputFields/IconTextInput";
import IconButton from "../reusable/buttons/IconButton";
import CustomContainer from "../reusable/containers/CustomContainer";
import { ThemeProvider, color, createTheme } from "@mui/system";
import theme from "../../utils/ThemeMUI";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../actions/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.userReducer);

  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = () => {
    console.log("Register successful!");
  };
  const handleLogIn = () => {
    if (usernameState === "") {
      setUsernameError(true);
      return;
    } else {
      setUsernameError(false);
    }
    if (passwordState === "") {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    dispatch(
      userActions.login({ username: usernameState, password: passwordState })
    );
  };

  useEffect(() => {
    if (token !== undefined) {
      navigate("/dashboard");
    }
  }, [token]);

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
          required
          error={usernameError}
          onChange={(e) => setUsernameState(e.target.value)}
        />
        <IconTextInput
          id="txtPassword"
          title="Password"
          type="password"
          icon="password"
          margin="dense"
          fullWidth
          required
          error={passwordError}
          onChange={(e) => setPasswordState(e.target.value)}
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
          <IconButton
            title="Login"
            rightIcon={<LoginIcon style={{ color: "white" }} />}
            variant="contained"
            width="100%"
            onClick={handleLogIn}
          />
        </div>
      </CustomContainer>
    </ThemeProvider>
  );
};

export default Login;
