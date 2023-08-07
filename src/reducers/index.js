import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import userReducer from "./user";
import trainersReducer from "./trainers";

const store = configureStore({
  reducer: {
    userReducer,
    membersReducer,
    trainersReducer,
  },
});

export default store;
