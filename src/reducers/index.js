import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    userReducer,
    membersReducer,
  },
});

export default store;
