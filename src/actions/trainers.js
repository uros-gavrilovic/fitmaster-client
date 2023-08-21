import {
  registerTrainerPath,
  trainersDTOPath,
  trainersIDPath,
  trainersPath,
} from "../constants/apiEndpoints";
import { notificationType } from "../constants/globals";
import { trainersActions } from "../reducers/trainers";
import { createNotification } from "../utils/notificationService";
import { handleError } from "../utils/utilFunctions";
import apiService from "../utils/apiService";
import { userActions } from "../reducers/user";

export const getTrainers = () => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .get(trainersPath())
      .then((response) => {
        dispatch(trainersActions.fetchTrainers(response.data));
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};

export const getTrainersDTO = () => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .get(trainersDTOPath())
      .then((response) => {
        dispatch(trainersActions.fetchTrainersDTO(response.data));
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};

export const getTrainer = (id) => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .get(trainersIDPath(id))
      .then((response) => {
        dispatch(trainersActions.fetchTrainer(response.data));
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};

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

export const updateTrainer = (data, messages) => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .put(trainersPath(), data)
      .then((response) => {
        dispatch(trainersActions.updateTrainer(response.data));
        dispatch(userActions.updateUser(response.data)); // User can only update it's own trainer profile, so new data is also updated on the user reducer.
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.updateTitle,
          messages?.updateSuccessMessage
        );
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};
