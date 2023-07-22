import apiService from "../utils/apiService";
import { membersActions } from "../reducers/members";
import { createNotification } from "../utils/notificationService";
import { notificationType } from "../constants/globals";
import {
  membersPath,
  membersDTOPath,
  membersIDPath,
} from "../constants/apiEndpoints";

export const fetchMembers = () => {
  return (dispatch) => {
    dispatch(membersActions.actionStart());
    return apiService
      .get(membersPath())
      .then((response) => {
        dispatch(membersActions.fetchMembers(response.data));
      })
      .catch((err) => {
        dispatch(membersActions.actionError(err?.response?.data));
      });
  };
};

export const fetchMembersDTO = () => {
  return (dispatch) => {
    dispatch(membersActions.actionStart());
    return apiService
      .get(membersDTOPath())
      .then((response) => {
        dispatch(membersActions.fetchMembersDTO(response.data));
      })
      .catch((err) => {
        dispatch(membersActions.actionError(err?.response?.data));
      });
  };
};
export const fetchMember = (id) => {
  return (dispatch) => {
    dispatch(membersActions.actionStart());
    return apiService
      .get(membersIDPath(id))
      .then((response) => {
        console.log("Fetched: " + JSON.stringify(response.data));
        dispatch(membersActions.fetchMember(response.data));
      })
      .catch((err) => {
        dispatch(membersActions.actionError(err?.response?.data));
      });
  };
};

export const addMember = (data, messages) => {
  return (dispatch) => {
    dispatch(membersActions.actionStart());
    return apiService
      .post(membersPath(), data)
      .then((response) => {
        dispatch(membersActions.addMember(response.data));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.title,
          messages?.success_message
        );
      })
      .catch((err) => {
        console.log("Error: " + JSON.stringify(err));
        errorAction(err, membersActions.actionError, dispatch, messages);
      });
  };
};

export const deleteMember = (id, messages) => {
  return (dispatch) => {
    dispatch(membersActions.actionStart());
    return apiService
      .delete(membersIDPath(id))
      .then(() => {
        dispatch(membersActions.deleteMember(id));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.title,
          messages?.success_message
        );
      })
      .catch((err) => {
        errorAction(err, membersActions.actionError, dispatch, messages);
      });
  };
};

export const updateMember = (data, messages) => {
  return (dispatch) => {
    dispatch(membersActions.actionStart());
    return apiService
      .put(membersPath(), data)
      .then((response) => {
        dispatch(membersActions.updateMember(response.data));
        createNotification(
          notificationType.success,
          messages?.title,
          messages?.success_message
        );
      })
      .catch((err) => {
        errorAction(err, membersActions.actionError, dispatch, messages);
      });
  };
};

const errorAction = (error, action, dispatch, messages) => {
  dispatch(action(error?.response?.data));
  createNotification(
    notificationType.error,
    messages?.title,
    error?.response?.data?.error_message
  );
};
