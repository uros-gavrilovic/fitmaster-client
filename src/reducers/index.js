import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import translationsReducer from './translations';
import membersReducer from './members';
import trainersReducer from './trainers';
import exercisesReducer from './exercises';
import packagesReducer from './package';
import plansReducer from './plans';
import statisticsReducer from './statistics';

const store = configureStore({
	reducer: {
		userReducer,
		translationsReducer,
		membersReducer,
		trainersReducer,
		exercisesReducer,
		packagesReducer,
		plansReducer,
		statisticsReducer,
	},
});

export default store;
