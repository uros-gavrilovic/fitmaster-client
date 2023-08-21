import { Fragment, useState } from "react";
import PasswordTextField from "../../reusable/inputFields/PasswordTextField";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import CustomIconButton from "../../reusable/buttons/IconButton";
import LockResetIcon from "@mui/icons-material/LockReset";
import { createNotification } from "../../../utils/notificationService";
import { notificationType } from "../../../constants/globals";
import { validateField } from "../../../utils/utilFunctions";
import * as userActions from "../../../actions/user";

export default function ChangePasswordModal(props) {
  const { t, close } = props || {};

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [inputState, setInputState] = useState(initialInputState);
  const [errorState, setErrorState] = useState(initialErrorState);

  const handleChange = (event) => {
    const fieldId = event.target.id || event.target.name;
    const newValue = event.target.value;

    setInputState({
      ...inputState,
      [fieldId]: newValue,
    });
  };
  const handleChangePassword = () => {
    if (inputState.newPassword !== inputState.confirmPassword) {
      setErrorState({
        ...errorState,
        newPassword: true,
        confirmPassword: true,
      });
      createNotification(
        notificationType.warning,
        t?.messages?.titleChangePassword,
        t?.messages?.textPasswordsMismatch
      );
      return;
    }

    const oldPasswordMissing = validateField(
      inputState.oldPassword,
      "oldPassword",
      setErrorState
    );
    const newPasswordMissing = validateField(
      inputState.newPassword,
      "newPassword",
      setErrorState
    );
    const confirmPasswordMissing = validateField(
      inputState.confirmPassword,
      "confirmPassword",
      setErrorState
    );

    if (oldPasswordMissing || newPasswordMissing || confirmPasswordMissing)
      return;

    dispatch(
      userActions.changePassword(
        {
          trainerID: user.trainerID,
          oldPassword: inputState.oldPassword,
          newPassword: inputState.newPassword,
        },
        t?.messages
      )
    );
    close();
  };
  const handleClose = () => {};

  return (
    <Fragment>
      Please enter your credentials to change your password.
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <PasswordTextField
          id="oldPassword"
          title={t?.fields?.oldPassword}
          state={inputState.oldPassword}
          error={errorState.oldPassword}
          handleChange={handleChange}
        />
        <PasswordTextField
          id="newPassword"
          title={t?.fields?.newPassword}
          state={inputState.newPassword}
          error={errorState.newPassword}
          handleChange={handleChange}
        />
        <PasswordTextField
          id="confirmPassword"
          title={t?.fields?.confirmPassword}
          state={inputState.confirmPassword}
          error={errorState.confirmPassword}
          handleChange={handleChange}
        />
        <CustomIconButton
          title={t?.buttons?.btnChangePassword}
          leftIcon={<LockResetIcon />}
          onClick={handleChangePassword}
        />
      </Box>
    </Fragment>
  );
}

const initialInputState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};
const initialErrorState = {
  oldPassword: false,
  newPassword: false,
  confirmPassword: false,
};
