import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import userReducer from "./user";
import trainersReducer from "./trainers";
import exercisesReducer from "./exercises";
import statisticsReducer from "./statistics";
import packagesReducer from "./package";

const store = configureStore({
  reducer: {
    userReducer,
    membersReducer,
    trainersReducer,
    exercisesReducer,
    statisticsReducer,
    packagesReducer,
  },
});

export default store;
