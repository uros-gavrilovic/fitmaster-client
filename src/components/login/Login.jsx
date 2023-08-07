import ParticleBackground from "../backgrounds/ParticleBackground";
import IconTextField from "../reusable/inputFields/IconTextField";
import IconButton from "../reusable/buttons/IconButton";
import CustomContainer from "../reusable/containers/CustomContainer";
import { ThemeProvider, color, createTheme } from "@mui/system";
import theme from "../../utils/ThemeMUI";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../actions/user";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { validateField } from "../../utils/utilFunctions";
import { Box, FormControlLabel, Slide, TextField } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openLoginContainer, setOpenLoginContainer] = useState(true);
  const { token } = useSelector((state) => state.userReducer);
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const [errorState, setErrorState] = useState({
    username: false,
    password: false,
  });

  const handleTabChange = () => {
    setOpenLoginContainer((prev) => !prev);
  };
  const handleLogIn = () => {
    const hasUsernameError = validateField(
      loginState.username,
      "username",
      setErrorState
    );
    const hasPasswordError = validateField(
      loginState.password,
      "password",
      setErrorState
    );

    if (hasUsernameError || hasPasswordError) return;
    dispatch(
      userActions.login({
        username: loginState.username,
        password: loginState.password,
      })
    );
  };
  const handleRegister = () => {
    console.log("Register");
  };

  useEffect(() => {
    if (token !== undefined) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <ParticleBackground />

      <Slide
        direction="left"
        in={!openLoginContainer}
        mountOnEnter
        unmountOnExit
      >
        <Fragment id="login-container" className="vertical-center container">
          This is register
          <IconButton
            title="Register new account"
            leftIcon={<HowToRegIcon style={{ color: "white" }} />}
            variant="contained"
            width="100%"
            onClick={handleRegister}
          />
          <IconButton
            title="Login"
            rightIcon={<LoginIcon style={{ color: "white" }} />}
            variant="outlined"
            width="100%"
            onClick={handleTabChange}
          />
        </Fragment>
      </Slide>

      {/* ---------------------------------------------------------------------------------------- */}

      <Slide
        direction="left"
        in={openLoginContainer}
        mountOnEnter
        unmountOnExit
      >
        <Fragment id="login-container" className="vertical-center container">
          <div style={{ color: "white", display: "inline" }}>
            <center>
              <h1>
                Fit<i>Master</i>
                <sub className="subscript">v0.1</sub>
              </h1>
              <FitnessCenterIcon sx={{ fontSize: "10vh" }} />
            </center>
          </div>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle
              style={{ color: "white" }}
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              variant="standard"
              margin="dense"
              error={errorState.username}
              onChange={(e) =>
                setLoginState({ ...loginState, [e.target.id]: e.target.value })
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <HttpsRoundedIcon
              style={{ color: "white" }}
              sx={{ mr: 1, my: 0.5 }}
            />
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              margin="dense"
              variant="standard"
              error={errorState.password}
              onChange={(e) =>
                setLoginState({ ...loginState, [e.target.id]: e.target.value })
              }
            />
          </Box>

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
              onClick={handleTabChange}
            />
            <IconButton
              title="Login"
              rightIcon={<LoginIcon style={{ color: "white" }} />}
              variant="contained"
              width="100%"
              onClick={handleLogIn}
            />
          </div>
        </Fragment>
      </Slide>
    </ThemeProvider>
  );
};

export default Login;
