import apiService from "../utils/apiService";
import { createNotification } from "../utils/notificationService";
import {
  appInfoPath,
  loginPath,
  registerPath,
  trainersChangePasswordPath,
} from "../constants/apiEndpoints";
import { userActions } from "../reducers/user";
import {
  notificationType,
  sessionStorageConstants,
  userRoles,
} from "../constants/globals";
import { handleError } from "../utils/utilFunctions";
import { trainersActions } from "../reducers/trainers";

export const login = (data, msg) => {
  return (dispatch) => {
    dispatch(userActions.actionStart());
    return apiService
      .post(loginPath(), { ...data, role: userRoles.TRAINER })
      .then((response) => {
        dispatch(userActions.login(response.data));
        createNotification(
          notificationType.success,
          msg?.loginTitle,
          msg?.loginSuccessMessage
        );
      })
      .catch((err) => {
        if (err.response.status === 403) {
          const messages = err.response.data;

          createNotification(
            notificationType.warning,
            messages.title,
            messages?.message
          );
        } else {
          handleError(err, userActions, dispatch);
        }
      });
  };
};

export const logout = (data, msg) => {
  return (dispatch) => {
    dispatch(userActions.actionStart());
    // return apiService
    //   .post(logoutTrainerPath(), data) // TODO: Implement log-out method on back-end.
    //   .then(() => {
    dispatch(userActions.logout());
    // })
    // .then(() => {
    createNotification(
      notificationType.success,
      msg?.logoutTitle,
      msg?.logoutSuccessMessage
    );
    // })
    // .catch((err) => {
    //   handleError(err, userActions, dispatch, undefined);
    // });
  };
};

export const register = (data, msg) => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .post(registerPath(), { ...data, role: userRoles.TRAINER })
      .then((response) => {
        dispatch(trainersActions.addTrainer(response.data));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          msg?.registerTitle,
          msg?.registerSuccessMessage
        );
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};

export const changePassword = (data, messages) => {
  return (dispatch) => {
    dispatch(userActions.actionStart());
    return apiService
      .post(trainersChangePasswordPath(), data)
      .then((response) => {
        dispatch(userActions.updateUser(response.data));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.titleChangePassword,
          messages?.textPasswordChanged
        );
      })
      .catch((err) => {
        handleError(err, userActions, dispatch);
      });
  };
};
