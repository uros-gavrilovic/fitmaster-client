import { createSlice } from '@reduxjs/toolkit';

const plansSlice = createSlice({
	name: 'plans',
	initialState: {
		plans: [],
		error: undefined,
	},

	reducers: {
		addPlan(state, action) {
			state.plans = [action.payload].concat(state.members);
			state.error = undefined;
		},
		fetchPlans(state, action) {
			state.plans = action.payload;
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

export const plansActions = plansSlice.actions;
export default plansSlice.reducer;
