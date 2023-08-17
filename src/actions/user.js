import apiService from '../utils/apiService';
import { createNotification } from '../utils/notificationService';
import {
	appInfoPath,
	loginTrainerPath,
	logoutTrainerPath,
} from '../constants/apiEndpoints';
import { userActions } from '../reducers/user';
import {
	notificationType,
	sessionStorageConstants,
} from '../constants/globals';
import { handleError } from '../utils/utilFunctions';

export const fetchAppInfo = () => {
	return (dispatch) => {
		dispatch(userActions.actionStart());
		return apiService
			.get(appInfoPath())
			.then((response) => {
				setAppInfo(response.data, dispatch);
			})
			.catch((err) => {
				dispatch(userActions.actionError(err?.response?.data));
			});
	};
};

export const login = (data, msg) => {
	return (dispatch) => {
		dispatch(userActions.actionStart());
		return apiService
			.post(loginTrainerPath(), data)
			.then((response) => {
				dispatch(userActions.login(response.data));
				createNotification(
					notificationType.success,
					msg?.loginTitle,
					msg?.loginSuccessMessage
				);
			})
			.catch((err) => {
				handleError(err, userActions, dispatch);
			});
	};
};

export const logout = (data, msg) => {
	return (dispatch) => {
		dispatch(userActions.actionStart());
		// return apiService
		//   .post(logoutTrainerPath(), data) // TODO: Implement log-out method on back-end.
		//   .then(() => {
		dispatch(userActions.logout());
		// })
		// .then(() => {
		createNotification(
			notificationType.success,
			msg?.logoutTitle,
			msg?.logoutSuccessMessage
		);
		// })
		// .catch((err) => {
		//   handleError(err, userActions, dispatch, undefined);
		// });
	};
};

function setAppInfo(data, dispatch) {
	sessionStorage.setItem(sessionStorageConstants.APP_NAME, data?.appName);
	sessionStorage.setItem(sessionStorageConstants.APP_VERSION, data?.appVersion);
	sessionStorage.setItem(sessionStorageConstants.LOCALE, data?.appLocale);
}
