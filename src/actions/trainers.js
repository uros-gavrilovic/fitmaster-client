import { registerTrainerPath } from "../constants/apiEndpoints";
import { notificationType } from "../constants/globals";
import { trainersActions } from "../reducers/trainers";
import { createNotification } from "../utils/notificationService";
import { handleError } from "../utils/utilFunctions";
import apiService from "../utils/apiService";

export const addTrainer = (data, messages) => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .post(registerTrainerPath(), data)
      .then((response) => {
        dispatch(trainersActions.addTrainer(response.data));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          "REGISTER-SUCCESS", //messages?.title,
          "Successfully registered a new trainer. " //messages?.success_message
        );
      })
      .catch((err) => {
        if (err.response.status === 409) {
          createNotification(
            notificationType.error,
            "REGISTRATION ERROR",
            "Username already exists."
          );
        } else {
          handleError(err, trainersActions, dispatch, {
            title: "REGISTRATION ERROR",
            description: "An error has occured while signing in.",
          });
        }
      });
  };
};
