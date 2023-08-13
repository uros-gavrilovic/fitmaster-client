import { registerTrainerPath } from "../constants/apiEndpoints";
import { notificationType } from "../constants/globals";
import { trainersActions } from "../reducers/trainers";
import { createNotification } from "../utils/notificationService";
import { handleError } from "../utils/utilFunctions";
import apiService from "../utils/apiService";

export const addTrainer = (data, msg) => {
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
          msg?.registerTitle,
          msg?.registerSuccessMessage
        );
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};
