import apiService from "../utils/apiService";
import { handleError } from "../utils/utilFunctions";
import { appInfoPath } from "../constants/apiEndpoints";
import { appActions } from "../reducers/app";
import {
  appInfo,
  sessionStorageConstants,
  themeConstants,
} from "../constants/globals";

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

export const changeTheme = (appTheme) => {
  return (dispatch) => {
    dispatch(
      appActions.changeTheme(
        appTheme === themeConstants.LIGHT
          ? themeConstants.DARK
          : themeConstants.LIGHT
      )
    );
  };
};
