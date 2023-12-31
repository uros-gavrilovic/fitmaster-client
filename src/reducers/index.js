import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import appReducer from "./app";
import translationsReducer from "./translations";
import membersReducer from "./members";
import trainersReducer from "./trainers";
import exercisesReducer from "./exercises";
import packagesReducer from "./package";
import plansReducer from "./plans";
import statisticsReducer from "./statistics";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    userReducer,
    appReducer: appReducer,
    translationsReducer,
    membersReducer,
    trainersReducer,
    exercisesReducer,
    packagesReducer,
    plansReducer,
    statisticsReducer,
  },
  middleware: [thunk],
});

export default store;
