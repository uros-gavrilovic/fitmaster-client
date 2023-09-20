import apiService from "../utils/apiService";
import { createNotification } from "../utils/notificationService";
import { notificationType, userRoles } from "../constants/globals";
import { handleError } from "../utils/utilFunctions";
import {
  plansPath,
  plansTrainerIDPath,
  plansIDPath,
} from "../constants/apiEndpoints";
import { plansActions } from "../reducers/plans";

export const fetchPlansByTrainerID = (id) => {
  return (dispatch) => {
    dispatch(plansActions.actionStart());
    return apiService
      .get(plansTrainerIDPath(id))
      .then((response) => {
        dispatch(plansActions.fetchPlans(response.data));
      })
      .catch((err) => {
        handleError(err, plansActions, dispatch);
      });
  };
};

export const fetchPlan = (id) => {
  return (dispatch) => {
    dispatch(plansActions.actionStart());
    return apiService
      .get(plansIDPath(id))
      .then((response) => {
        dispatch(plansActions.fetchPlan(response.data));
      })
      .catch((err) => {
        handleError(err, plansActions, dispatch);
      });
  };
};

export const addPlan = (data, msg) => {
  return (dispatch) => {
    dispatch(plansActions.actionStart());
    return apiService
      .post(plansPath(), {
        ...data,
        trainer: { ...data.trainer, role: userRoles.TRAINER },
        member: { ...data.member, role: userRoles.MEMBER },
      })
      .then((response) => {
        dispatch(plansActions.addPlan(response.data));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          msg?.title,
          msg?.successMessage
        );
      })
      .catch((err) => {
        handleError(err, plansActions, dispatch);
      });
  };
};

export const deletePlan = (id, msg) => {
  return (dispatch) => {
    dispatch(plansActions.actionStart());
    return apiService
      .delete(plansIDPath(id))
      .then(() => {
        dispatch(plansActions.deletePlan(id));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          msg?.title,
          msg?.successMessage
        );
      })
      .catch((err) => {
        handleError(err, plansActions, dispatch);
      });
  };
};

export const updatePlan = (event, msg) => {
  const plan = {
    ...event,
    planID: event.event_id,
    trainer: { ...event.trainer, role: userRoles.TRAINER },
    member: { ...event.member, role: userRoles.MEMBER },
    startsAt: event.start,
    endsAt: event.end,
  };

  return async (dispatch) => {
    // Dispatch an action to indicate the start of the operation
    dispatch(plansActions.actionStart());

    try {
      // Perform the asynchronous operation (e.g., API call)
      const response = await apiService.put(plansPath(), plan);

      // Dispatch a success action with the response data
      dispatch(plansActions.updatePlan(response.data));
      createNotification(
        notificationType.success,
        msg?.title,
        msg?.success_message
      );
    } catch (error) {
      // Handle errors and dispatch an error action if needed
      handleError(error, plansActions.actionError);
    }
  };
};
