import {
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
          messages?.titleUpdate,
          messages?.updateSuccessMessage
        );
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};

export const deleteTrainer = (id, messages) => {
  return (dispatch) => {
    dispatch(trainersActions.actionStart());
    return apiService
      .delete(trainersIDPath(id))
      .then(() => {
        dispatch(trainersActions.deleteTrainer(id));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.deleteTitle,
          messages?.deleteSuccessMessage
        );
      })
      .catch((err) => {
        handleError(err, trainersActions, dispatch);
      });
  };
};
