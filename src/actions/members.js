import apiService from '../utils/apiService';
import { membersActions } from '../reducers/members';
import { createNotification } from '../utils/notificationService';
import { notificationType } from '../constants/globals';
import { handleError } from '../utils/utilFunctions';
import {
	membersPath,
	membersDTOPath,
	membersIDPath,
} from '../constants/apiEndpoints';

export const fetchMembers = () => {
	return (dispatch) => {
		dispatch(membersActions.actionStart());
		return apiService
			.get(membersPath())
			.then((response) => {
				dispatch(membersActions.fetchMembers(response.data));
			})
			.catch((err) => {
				handleError(err, membersActions, dispatch);
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

export const searchMembersDTO = (string) => {
	return (dispatch) => {
		dispatch(membersActions.actionStart());
		dispatch(membersActions.searchMembersDTO(string));
	};
};

export const fetchMember = (id) => {
	return (dispatch) => {
		dispatch(membersActions.actionStart());
		return apiService
			.get(membersIDPath(id))
			.then((response) => {
				dispatch(membersActions.fetchMember(response.data));
			})
			.catch((err) => {
				handleError(err, membersActions, dispatch, {
					title: 'ERROR FETCHING MEMBER',
					description: 'An error has occured while fetching member.',
				});
			});
	};
};

export const addMember = (data, msg) => {
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
					msg?.title,
					msg?.successMessage
				);
			})
			.catch((err) => {
				handleError(err, membersActions, dispatch);
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
				handleError(err, membersActions, dispatch, {
					title: 'ERROR REMOVING A MEMBER',
					description: 'An error has occured while removing a member.',
				});
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
				handleError(err, membersActions, dispatch, {
					title: 'ERROR UPDATING A MEMBER',
					description: 'An error has occured while updating member.',
				});
			});
	};
};
