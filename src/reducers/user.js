import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
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
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        gender: action.payload.gender,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
        hireDate: action.payload.hireDate,
      };
      state.token = action.payload.token;

      state.error = undefined;
    },
    logout(state) {
      state.user = undefined;
      state.token = undefined;

      state.error = undefined;
    },

    actionStart(state) {
      state.error = undefined;
    },
    actionError(state, action) {
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
