import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: undefined,
    password: undefined,
    id: undefined,
  },
  token: undefined,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    login(state, action) {
      state.user = {
        username: action.payload.username,
        password: action.payload.password,
        id: action.payload.id,
        // firstName: action.payload.firstName,
        // lastName: action.payload.lastName,
        // gender: action.payload.gender,
        // phoneNumber: action.payload.phoneNumber,
        // address: action.payload.address,
        // hireDate: action.payload.hireDate,
      };

      state.token = action.payload.token;
      state.error = undefined;
    },
    logout(state) {
      // TODO: Refactor to use initialState
      state.username = undefined;
      state.password = undefined;
      state.token = undefined;
      state.error = undefined;
    },

    actionError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
