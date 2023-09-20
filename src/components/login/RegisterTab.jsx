import { AccountCircle } from "@mui/icons-material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import AbcIcon from "@mui/icons-material/Abc";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Button, Divider } from "@mui/material";
import Logo from "../reusable/Logo";
import IconTextField from "../reusable/inputFields/IconTextField";
import { useState } from "react";
import {
  convertEmptyFieldsToNull,
  validateField,
} from "../../utils/utilFunctions";
import { useDispatch } from "react-redux";
import * as userActions from "../../actions/user";
import CustomStepper from "../reusable/containers/CustomStepper";
import { useTheme } from "@mui/material";
import validateEmail from "../../utils/validator";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function RegisterTab(props) {
  const { t, handleTabChange } = props || {};

  const steps = [t?.subtitles?.generalInfo, t?.subtitles?.loginInfo];

  const dispatch = useDispatch();
  const theme = useTheme();
  const [registerState, setRegisterState] = useState(initialRegisterState);
  const [registerErrorState, setRegisterErrorState] =
    useState(initialErrorState);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRegister = () => {
    const hasUsernameError = validateField(
      registerState.username,
      "username",
      setRegisterErrorState
    );
    const hasPasswordError = validateField(
      registerState.password,
      "password",
      setRegisterErrorState
    );
    const hasFirstNameError = validateField(
      registerState.firstName,
      "firstName",
      setRegisterErrorState
    );
    const hasLastNameError = validateField(
      registerState.lastName,
      "lastName",
      setRegisterErrorState
    );

    const hasEmailError = validateEmail(
      registerState.email,
      "email",
      setRegisterErrorState
    );

    if (
      hasUsernameError ||
      hasPasswordError ||
      hasFirstNameError ||
      hasLastNameError ||
      hasEmailError
    )
      return;

    dispatch(
      userActions.register(convertEmptyFieldsToNull(registerState), t?.messages)
    );
    handleClear();
    setActiveIndex(steps.length); // sets active index to finish page in stepper
  };
  const handleClear = () => {
    setRegisterState(initialRegisterState);
  };

  return (
    <Box
      id="register-container"
      className="center container"
      sx={{
        background: theme.palette.menu.default,
        color: theme.palette.text.primary,
      }}
    >
      <Logo />
      <h3>{t?.titleRegister}</h3>

      <CustomStepper
        components={[
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconTextField
              required
              id="firstName"
              title={t?.input?.firstName}
              icon={<AbcIcon sx={{ mr: 1, my: 0.5 }} />}
              value={registerState?.firstName}
              error={registerErrorState.firstName}
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
              icon={<AbcIcon sx={{ mr: 1, my: 0.5 }} />}
              margin="dense"
              value={registerState?.lastName}
              error={registerErrorState.lastName}
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  [e.target.id]: e.target.value,
                })
              }
            />
          </Box>,
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconTextField
              required
              id="username"
              title={t?.input?.username}
              icon={<AccountCircle sx={{ mr: 1, my: 0.5 }} />}
              value={registerState?.username}
              error={registerErrorState.username}
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
              icon={<HttpsRoundedIcon sx={{ mr: 1, my: 0.5 }} />}
              margin="dense"
              value={registerState?.password}
              error={registerErrorState.password}
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  [e.target.id]: e.target.value,
                })
              }
            />
            <IconTextField
              required
              id="email"
              title={t?.input?.email}
              type="email"
              icon={<AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />}
              margin="dense"
              value={registerState?.email}
              error={registerErrorState.email}
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  [e.target.id]: e.target.value,
                })
              }
            />
          </Box>,
        ]}
        steps={steps}
        isOptional={[false, false, false]}
        finishStep={
          <Button
            title={t?.buttons?.btnRegister}
            endIcon={<HowToRegIcon />}
            variant="contained"
            width="100%"
            onClick={handleRegister}
          >
            {t?.buttons?.btnRegister}
          </Button>
        }
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        stepsFinishedMessage={t?.messages?.registerRequestSent}
        t={t?.buttons}
      />
      <Button
        style={{ marginTop: "1rem", width: "100%" }}
        endIcon={<KeyboardDoubleArrowRightIcon />}
        variant="outlined"
        onClick={handleTabChange}
      >
        {t?.buttons?.btnLogIn}
      </Button>
    </Box>
  );
}

const initialRegisterState = {
  firstName: "Uros",
  lastName: "Gavrilovic",
  username: "uros",
  password: "uros",
  email: "urosukigavrilovic@gmail.com",
};
const initialErrorState = {
  username: false,
  password: false,
  email: false,
  firstName: false,
  lastName: false,
};
