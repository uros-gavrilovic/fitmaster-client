import apiService from "../utils/apiService";
import { createNotification } from "../utils/notificationService";
import { loginTrainerPath, logoutTrainerPath } from "../constants/apiEndpoints";
import { userActions } from "../reducers/user";
import { notificationType } from "../constants/globals";
import { useNavigate } from "react-router-dom";

export const login = (data) => {
  return (dispatch) => {
    dispatch(userActions.actionStart());
    return apiService
      .post(loginTrainerPath(), data)
      .then((response) => {
        dispatch(userActions.login(response.data));
        createNotification(
          notificationType.success,
          "LOG-IN SUCCESS",
          "Successfully logged back in."
        );
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          createNotification(
            notificationType.error,
            "LOG-IN ERROR",
            "Invalid username or password."
          );
        } else {
          handleError(err, userActions.actionError, dispatch, {
            title: "LOG-IN ERROR",
            description: "An error has occured while signing in.",
          });
        }
      });
  };
};

export const logout = (data) => {
  return (dispatch) => {
    dispatch(userActions.logout());
  };

  // TODO
  // return (dispatch) => {
  //   dispatch(userActions.actionStart());
  //   return apiService
  //     .post(logoutTrainerPath(), data)
  //     .then((response) => {
  //       if (response.status == 200) {
  //         dispatch(userActions.logout());
  //       }
  //     })
  //     .catch((err) => {
  //       handleError(err, userActions.actionError, dispatch, undefined);
  //     });
  // };
};

const handleError = (error, action, dispatch, messages) => {
  dispatch(action(error?.response?.data));
  createNotification(
    notificationType.error,
    messages.title,
    messages.description
  );
};
