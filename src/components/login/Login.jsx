import ParticleBackground from "../backgrounds/ParticleBackground";
import IconButton from "../reusable/buttons/IconButton";
import { ThemeProvider, color, createTheme } from "@mui/system";
import theme from "../../utils/ThemeMUI";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../actions/user";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import {
  convertEmptyFieldsToNull,
  validateField,
} from "../../utils/utilFunctions";
import { Box, Divider, MenuItem, TextField } from "@mui/material";
import CustomSlide from "../reusable/CustomSlide";
import Logo from "../reusable/Logo";
import "../../styles/container.css";
import IconTextField from "../reusable/inputFields/IconTextField";
import AbcIcon from "@mui/icons-material/Abc";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import WcIcon from "@mui/icons-material/Wc";
import "../../styles/login/login.css";
import * as trainerActions from "../../actions/trainers";

const initialRegisterState = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  gender: "",
};
const genders = [
  {
    value: "MALE",
    label: "Male ♂",
  },
  {
    value: "FEMALE",
    label: "Female ♀",
  },
  {
    value: "",
    label: "Unknown",
  },
];

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openLoginContainer, setOpenLoginContainer] = useState(true);
  const { token } = useSelector((state) => state.userReducer);
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const [registerState, setRegisterState] = useState(initialRegisterState);
  const [errorState, setErrorState] = useState({
    username: false,
    password: false,
    firstName: false,
    lastName: false,
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
    const hasUsernameError = validateField(
      registerState.username,
      "username",
      setErrorState
    );
    const hasPasswordError = validateField(
      registerState.password,
      "password",
      setErrorState
    );
    const hasFirstNameError = validateField(
      registerState.firstName,
      "firstName",
      setErrorState
    );
    const hasLastNameError = validateField(
      registerState.lastName,
      "lastName",
      setErrorState
    );

    if (
      hasUsernameError ||
      hasPasswordError ||
      hasFirstNameError ||
      hasLastNameError
    )
      return;

    dispatch(
      trainerActions.addTrainer(convertEmptyFieldsToNull(registerState))
    );
    handleClear();
  };
  const handleClear = () => {
    setRegisterState(initialRegisterState);
  };

  useEffect(() => {
    if (token !== undefined) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <ParticleBackground />

      <CustomSlide
        active={!openLoginContainer}
        setActive={setOpenLoginContainer}
        direction="right"
        container={
          <center>
            <Box
              id="register-container"
              className="center container dark-container"
            >
              <Logo />
              <h3>Create a new account</h3>

              <Divider>Log-In Information</Divider>
              <IconTextField
                required
                id="username"
                title="Username"
                icon={
                  <AccountCircle
                    style={{ color: "white" }}
                    sx={{ mr: 1, my: 0.5 }}
                  />
                }
                value={registerState?.username}
                error={errorState.username}
                onChange={(e) =>
                  setRegisterState({
                    ...registerState,
                    [e.target.id]: e.target.value,
                  })
                }
              />
              <IconTextField
                required
                id="password"
                title="Password"
                type="password"
                icon={
                  <HttpsRoundedIcon
                    style={{ color: "white" }}
                    sx={{ mr: 1, my: 0.5 }}
                  />
                }
                margin="dense"
                value={registerState?.password}
                error={errorState.password}
                onChange={(e) =>
                  setRegisterState({
                    ...registerState,
                    [e.target.id]: e.target.value,
                  })
                }
              />

              <Divider>General Information</Divider>
              <IconTextField
                required
                id="firstName"
                title="First Name"
                icon={
                  <AbcIcon style={{ color: "white" }} sx={{ mr: 1, my: 0.5 }} />
                }
                margin="dense"
                value={registerState?.firstName}
                error={errorState.firstName}
                onChange={(e) =>
                  setRegisterState({
                    ...registerState,
                    [e.target.id]: e.target.value,
                  })
                }
              />
              <IconTextField
                required
                id="lastName"
                title="Last Name"
                icon={
                  <AbcIcon style={{ color: "white" }} sx={{ mr: 1, my: 0.5 }} />
                }
                margin="dense"
                value={registerState?.lastName}
                error={errorState.lastName}
                onChange={(e) =>
                  setRegisterState({
                    ...registerState,
                    [e.target.id]: e.target.value,
                  })
                }
              />
              <IconTextField
                select
                id="gender"
                name="gender"
                defaultValue=""
                icon={
                  <WcIcon style={{ color: "white" }} sx={{ mr: 1, my: 0.5 }} />
                }
                title="Gender"
                value={registerState?.gender}
                onChange={(e) => {
                  setRegisterState({
                    ...registerState,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </IconTextField>

              <div
                style={{
                  marginTop: "5vh",
                  display: "grid",
                  width: "auto",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <IconButton
                  title="Register new trainer"
                  leftIcon={<HowToRegIcon style={{ color: "white" }} />}
                  variant="contained"
                  width="100%"
                  onClick={handleRegister}
                />
                <IconButton
                  title="Login"
                  rightIcon={
                    <KeyboardDoubleArrowRightIcon style={{ color: "white" }} />
                  }
                  variant="outlined"
                  width="100%"
                  onClick={handleTabChange}
                />
              </div>
            </Box>
          </center>
        }
      />

      {/* -------------------------------------------------------------------------------- */}

      <CustomSlide
        active={openLoginContainer}
        setActive={setOpenLoginContainer}
        direction="left"
        container={
          <center>
            <Box
              id="login-container"
              className="center container dark-container"
            >
              <Logo />
              <h3>Sign in using an existing account</h3>
              <IconTextField
                id="username"
                title="Username"
                icon={
                  <AccountCircle
                    style={{ color: "white" }}
                    sx={{ mr: 1, my: 0.5 }}
                  />
                }
                required
                error={errorState.username}
                onChange={(e) =>
                  setLoginState({
                    ...loginState,
                    [e.target.id]: e.target.value,
                  })
                }
              />
              <IconTextField
                id="password"
                title="Password"
                type="password"
                icon={
                  <HttpsRoundedIcon
                    style={{ color: "white" }}
                    sx={{ mr: 1, my: 0.5 }}
                  />
                }
                margin="dense"
                required
                error={errorState.password}
                onChange={(e) =>
                  setLoginState({
                    ...loginState,
                    [e.target.id]: e.target.value,
                  })
                }
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
                  leftIcon={
                    <KeyboardDoubleArrowLeftIcon style={{ color: "white" }} />
                  }
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
            </Box>
          </center>
        }
      />
    </ThemeProvider>
  );
};

export default Login;
