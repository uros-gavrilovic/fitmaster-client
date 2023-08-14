import apiService from '../utils/apiService';
import { exercisesActions } from '../reducers/exercises';
import { handleError } from '../utils/utilFunctions';
import { exercisesDTOPath, filtersPath } from '../constants/apiEndpoints';

export const fetchExercisesDTO = () => {
	return (dispatch) => {
		dispatch(exercisesActions.actionStart());
		return apiService
			.get(exercisesDTOPath())
			.then((response) => {
				dispatch(exercisesActions.fetchExercisesDTO(response.data));
			})
			.catch((err) => {
				handleError(err, exercisesActions, dispatch, {
					title: 'Error',
					message: 'Error fetching exercises',
				});
			});
	};
};

export const searchExercisesDTO = (string) => {
	return (dispatch) => {
		dispatch(exercisesActions.actionStart());
		dispatch(exercisesActions.searchExercisesDTO(string));
	};
};

export const fetchCategoriesAndBodyParts = () => {
	console.log(filtersPath());
	return (dispatch) => {
		dispatch(exercisesActions.actionStart());
		return apiService
			.get(filtersPath())
			.then((response) => {
				const bodyParts = response.data.bodyParts;
				const categories = response.data.categories;

				dispatch(exercisesActions.fetchBodyParts(bodyParts));
				dispatch(exercisesActions.fetchCategories(categories));
			})
			.catch((err) => {
				handleError(err, exercisesActions, dispatch, {
					title: 'Error',
					message: 'Error fetching body parts',
				});
			});
	};
};
