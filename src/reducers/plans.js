import { createSlice } from "@reduxjs/toolkit";

const plansSlice = createSlice({
  name: "plans",
  initialState: {
    plan: undefined,
    plans: [],

    error: undefined,
    loading: false,
  },

  reducers: {
    fetchPlan(state, action) {
      state.plan = action.payload;

      state.error = undefined;
      state.loading = false;
    },
    fetchPlans(state, action) {
      state.plans = action.payload;
      state.error = undefined;
    },
    addPlan(state, action) {
      state.plans = [action.payload].concat(state.plans);
      state.error = undefined;
    },
    deletePlan(state, action) {
      state.plans = state.plans.filter((plan) => plan.id !== action.payload);
      state.error = undefined;
    },
    updatePlan(state, action) {
      state.plans = state.plans.map((plan) =>
        plan.planID === action.payload.planID ? action.payload : plan
      );

      state.error = undefined;
      state.loading = false;
    },

    actionStart(state) {
      state.error = undefined;
      state.loading = true;
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
