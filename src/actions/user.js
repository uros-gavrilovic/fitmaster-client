import apiService from "../utils/apiService";
import { createNotification } from "../utils/notificationService";
import { loginTrainerPath, logoutTrainerPath } from "../constants/apiEndpoints";
import { userActions } from "../reducers/user";
import { notificationType } from "../constants/globals";

export const login = (data) => {
  return (dispatch) => {
    dispatch(userActions.actionStart());
    return apiService
      .post(loginTrainerPath(), data)
      .then((response) => {
        if (response === undefined) return; // TODO refactor
        if (response.status == 200) {
          dispatch(userActions.login(response.data));
          sessionStorage.setItem("token", response.data.token);
          createNotification(
            notificationType.success,
            "Success",
            "Successfully logged back in."
          );
        }
      })
      .catch((err) => {
        handleError(err, userActions.actionError, dispatch, undefined);
      });
  };
};

// export const logout = (data) => {
//   return (dispatch) => {
//     dispatch(userActions.actionStart());
//     return apiService
//       .post(logoutTrainerPath(), data)
//       .then((response) => {
//         if (response.status == 200) {
//           dispatch(userActions.logout());
//           sessionStorage.removeItem("token");
//         }
//       })
//       .catch((err) => {
//         handleError(err, userActions.actionError, dispatch, undefined);
//       });
//   };
// };

const handleError = (error, action, dispatch, messages) => {
  dispatch(action(error?.response?.data));
  createNotification(notificationType.error, "Error", "An error has occured.");
};
