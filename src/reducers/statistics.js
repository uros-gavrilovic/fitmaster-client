import { createSlice } from "@reduxjs/toolkit";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    stats: {},
    error: undefined,
  },

  reducers: {
    fetchStatistics(state, action) {
      state.stats = { ...state.stats, ...action.payload };
      state.error = undefined;
    },
    clearStatistics(state) {
      state.stats = {};
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

export const statisticsActions = statisticsSlice.actions;
export default statisticsSlice.reducer;
