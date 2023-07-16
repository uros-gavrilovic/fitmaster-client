import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";

const store = configureStore({
  reducer: {
    membersReducer,
  },
});

export default store;
