import { createSlice } from '@reduxjs/toolkit';
import { contains } from '../utils/utilFunctions';

const exercisesSlice = createSlice({
	name: 'exercises',
	initialState: {
		exercisesDTO: [],
		allExercisesDTO: [],
		bodyParts: [],
		categories: [],
		error: undefined,
	},

	reducers: {
		fetchExercisesDTO(state, action) {
			state.exercisesDTO = action.payload;
			state.allExercisesDTO = state.exercisesDTO;
			state.error = undefined;
		},
		searchExercisesDTO(state, action) {
			const searchTerm = action.payload.toLowerCase();
			state.exercisesDTO = state.allExercisesDTO.filter((exercise) =>
				(exercise.name + exercise.description)
					.toLowerCase()
					.includes(searchTerm)
			);
		},
		fetchBodyParts(state, action) {
			state.bodyParts = action.payload;
			state.error = undefined;
		},
		fetchCategories(state, action) {
			state.categories = action.payload;
			state.error = undefined;
		},

		actionStart(state) {
			state.error = undefined;
		},
		actionError(state, action) {
			state.error = action.payload;
		},
		clearError(state) {
			state.error = undefined;
		},
	},
});

export const exercisesActions = exercisesSlice.actions;
export default exercisesSlice.reducer;
