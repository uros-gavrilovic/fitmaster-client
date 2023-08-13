import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import translationsReducer from "./translations";
import membersReducer from "./members";
import trainersReducer from "./trainers";
import exercisesReducer from "./exercises";
import statisticsReducer from "./statistics";
import packagesReducer from "./package";

const store = configureStore({
  reducer: {
    userReducer,
    translationsReducer,
    membersReducer,
    trainersReducer,
    exercisesReducer,
    statisticsReducer,
    packagesReducer,
  },
});

export default store;
