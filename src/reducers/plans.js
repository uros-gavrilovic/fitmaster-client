import { createSlice } from "@reduxjs/toolkit";

const plansSlice = createSlice({
  name: "plans",
  initialState: {
    plans: [],
    error: undefined,
  },

  reducers: {
    fetchPlans(state, action) {
      state.plans = action.payload;
      state.error = undefined;
    },
    addPlan(state, action) {
      state.plans = [action.payload].concat(state.members);
      state.error = undefined;
    },
    deletePlan(state, action) {
      state.plans = state.plans.filter((plan) => plan.id !== action.payload);
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
