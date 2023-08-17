import apiService from '../utils/apiService';
import { createNotification } from '../utils/notificationService';
import { notificationType } from '../constants/globals';
import { handleError } from '../utils/utilFunctions';
import { plansPath, plansTrainerIDPath } from '../constants/apiEndpoints';
import { plansActions } from '../reducers/plans';

export const addPlan = (data, msg) => {
	return (dispatch) => {
		dispatch(plansActions.actionStart());
		return apiService
			.post(plansPath(), data)
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
