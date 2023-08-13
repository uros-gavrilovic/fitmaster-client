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
import withTranslations from "../../utils/HighOrderComponent"
 
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

const Login = (props) => {
  const {t} = props || {};

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
      }, t?.messages)
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
      trainerActions.addTrainer(convertEmptyFieldsToNull(registerState), t?.messages)
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
              <h3>{t?.titleRegister}</h3>

              <Divider>{t?.subtitles?.LoginInfo}</Divider>
              <IconTextField
                required
                id="username"
                title={t?.input?.username}
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
                title={t?.input?.password}
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

              <Divider>{t?.subtitles?.generalInfo}</Divider>
              <IconTextField
                required
                id="firstName"
                title={t?.input?.firstName}
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
                title={t?.input?.lastName}
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

              <div
                style={{
                  marginTop: "5vh",
                  display: "grid",
                  width: "auto",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <IconButton
                  title={t?.buttons?.btnRegister}
                  leftIcon={<HowToRegIcon style={{ color: "white" }} />}
                  variant="contained"
                  width="100%"
                  onClick={handleRegister}
                />
                <IconButton
                  title={t?.buttons?.btnLogIn}
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
              <h3>{t?.titleLogIn}</h3>
              <IconTextField
                id="username"
                title={t?.input?.username}
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
                title={t?.input?.password}
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
                  title={t?.buttons?.btnRegister}
                  leftIcon={
                    <KeyboardDoubleArrowLeftIcon style={{ color: "white" }} />
                  }
                  variant="outlined"
                  width="100%"
                  onClick={handleTabChange}
                />
                <IconButton
                  title={t?.buttons?.btnLogIn}
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

export default withTranslations(Login, 'Login');
