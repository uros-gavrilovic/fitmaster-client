import { createNotification } from "../utils/notificationService";
import { notificationType } from "../constants/globals";
import { packagesActions } from "../reducers/package";
import apiService from "../utils/apiService";
import {
  packagesPath,
  packagesDTOPath,
  packagesIDPath,
} from "../constants/apiEndpoints";

export const fetchPackages = () => {
  return (dispatch) => {
    dispatch(packagesActions.actionStart());
    return apiService
      .get(packagesPath)
      .then((response) => {
        dispatch(packagesActions.fetchPackages(response.data));
      })
      .catch((error) => {
        dispatch(packagesActions.actionError(error?.response?.data));
      });
  };
};

export const fetchPackagesDTO = () => {
  return (dispatch) => {
    dispatch(packagesActions.actionStart());
    return apiService
      .get(packagesDTOPath())
      .then((response) => {
        console.log(response);
        dispatch(packagesActions.fetchPackagesDTO(response.data));
      })
      .catch((error) => {
        dispatch(packagesActions.actionError(error?.response?.data));
      });
  };
};

export const fetchPackage = (id) => {
  return (dispatch) => {
    dispatch(packagesActions.actionStart());
    return apiService
      .get(packagesIDPath(id))
      .then((response) => {
        dispatch(packagesActions.fetchPackage(response.data));
      })
      .catch((error) => {
        dispatch(packagesActions.actionError(error?.response?.data));
      });
  };
};

export const addPackage = (data, messages) => {
  return (dispatch) => {
    dispatch(packagesActions.actionStart());
    return apiService
      .post(packagesPath(), data)
      .then((response) => {
        dispatch(packagesActions.addPackage(response.data));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.title,
          messages?.success_message
        );
      })
      .catch((err) => {
        errorAction(err, packagesActions.actionError, dispatch, messages);
      });
  };
};

export const deletePackage = (id, messages) => {
  return (dispatch) => {
    dispatch(packagesActions.actionStart());
    return apiService
      .delete(packagesIDPath(id))
      .then(() => {
        dispatch(packagesActions.deletePackage(id));
      })
      .then(() => {
        createNotification(
          notificationType.success,
          messages?.title,
          messages?.success_message
        );
      })
      .catch((err) => {
        errorAction(err, packagesActions.actionError, dispatch, messages);
      });
  };
};

export const updatePackage = (data, messages) => {
  return (dispatch) => {
    dispatch(packagesActions.actionStart());
    return apiService
      .put(packagesPath(), data)
      .then((response) => {
        dispatch(packagesActions.updatePackage(response.data));
        createNotification(
          notificationType.success,
          messages?.title,
          messages?.success_message
        );
      })
      .catch((err) => {
        errorAction(err, packagesActions.actionError, dispatch, messages);
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
