import { createSlice } from "@reduxjs/toolkit";
import { contains } from "../utils/utilFunctions";

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercisesDTO: [],
    allExercisesDTO: [],
    bodyParts: [],
    categories: [],

    error: undefined,
    loading: false,
  },

  reducers: {
    addExercise(state, action) {
      state.exercisesDTO.push(action.payload);
      state.allExercisesDTO.push(action.payload);

      state.error = undefined;
      state.loading = false;
    },
    removeExercise(state, action) {
      state.exercisesDTO = state.exercisesDTO.filter(
        (exercise) => exercise.exerciseID !== action.payload
      );
      state.allExercisesDTO = state.allExercisesDTO.filter(
        (exercise) => exercise.exerciseID !== action.payload
      );

      state.error = undefined;
      state.loading = false;
    },
    editExercise(state, action) {
      const exercise = action.payload;
      const exerciseID = exercise.exerciseID;

      state.exercisesDTO = state.exercisesDTO.map((ex) =>
        ex.exerciseID === exerciseID ? exercise : ex
      );
      state.allExercisesDTO = state.allExercisesDTO.map((ex) =>
        ex.exerciseID === exerciseID ? exercise : ex
      );

      state.error = undefined;
      state.loading = false;
    },
    fetchExercisesDTO(state, action) {
      state.exercisesDTO = action.payload;
      state.allExercisesDTO = state.exercisesDTO;

      state.error = undefined;
      state.loading = false;
    },
    searchExercisesDTO(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.exercisesDTO = state.allExercisesDTO.filter((exercise) =>
        (exercise.name + exercise.description)
          .toLowerCase()
          .includes(searchTerm)
      );

      state.error = undefined;
      state.loading = false;
    },
    fetchBodyParts(state, action) {
      state.bodyParts = action.payload;
      state.error = undefined;

      state.error = undefined;
      state.loading = false;
    },
    fetchCategories(state, action) {
      state.categories = action.payload;

      state.error = undefined;
      state.loading = false;
    },

    actionStart(state) {
      state.error = undefined;
      state.loading = true;
    },
    actionError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const exercisesActions = exercisesSlice.actions;
export default exercisesSlice.reducer;
