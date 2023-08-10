import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import userReducer from "./user";
import trainersReducer from "./trainers";
import statisticsReducer from "./statistics";

const store = configureStore({
  reducer: {
    userReducer,
    membersReducer,
    trainersReducer,
    statisticsReducer,
  },
});

export default store;
