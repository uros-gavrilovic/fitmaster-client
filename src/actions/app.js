import apiService from "../utils/apiService";
import { handleError } from "../utils/utilFunctions";
import { appInfoPath } from "../constants/apiEndpoints";
import { appActions } from "../reducers/app";

export const fetchAppInfo = () => {
  return (dispatch) => {
    dispatch(appActions.actionStart());
    return apiService
      .get(appInfoPath())
      .then((response) => {
        dispatch(appActions.fetchAppInfo(response.data));
        document.title = response.data.appName;
      })
      .catch((err) => {
        handleError(err, appActions, dispatch);
      });
  };
};
