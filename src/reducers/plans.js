import { createSlice } from '@reduxjs/toolkit';

const plansSlice = createSlice({
	name: 'plans',
	initialState: {
		plans: [],
		error: undefined,
	},

	reducers: {
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
