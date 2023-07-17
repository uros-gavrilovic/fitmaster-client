import apiService from "../utils/apiService";
// import { createNotification } from "../utils/notificationService";
// import { notificationType } from "../constants/globals";
import { loginPath, registerPath } from "../constants/apiEndpoints";
import { userActions } from "../reducers/user";

export const login = (data) => {
  return (dispatch) => {
    // dispatch(userActions.actionStart());
    return apiService
      .post(loginPath(), data)
      .then((response) => {
        if (response.status == 200) {
          dispatch(userActions.login(response.data));
        } else {
          console.log("response status nije 200");
          // errorAction(response, userActions.actionError, dispatch, messages);
        }
      })
      .catch((err) => {
        // errorAction(err, userActions.actionError, dispatch, messages);
      });
  };
};

// export const logout = () => {
//   return (dispatch) => {
//     dispatch(membersActions.actionStart());
//     return apiService
//       .get(membersDTOPath())
//       .then((response) => {
//         dispatch(membersActions.fetchDTOMembers(response.data));
//       })
//       .catch((err) => {
//         dispatch(membersActions.actionError(err?.response?.data));
//       });
//   };
// };

// const errorAction = (error, action, dispatch, messages) => {
//   dispatch(action(error?.response?.data));
//   createNotification(
//     notificationType.error,
//     messages?.title,
//     error?.response?.data?.error_message
//   );
// };
