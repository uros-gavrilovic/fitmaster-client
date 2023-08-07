import { createSlice } from "@reduxjs/toolkit";
import { contains } from "../utils/utilFunctions";

const trainersSlice = createSlice({
  name: "trainers",
  initialState: {
    trainers: [],
    trainersDTO: [],
    trainer: undefined,
    error: undefined,
  },

  reducers: {
    fetchTrainers(state, action) {
      state.trainers = action.payload;
      state.error = undefined;
    },
    fetchTrainersDTO(state, action) {
      state.trainersDTO = action.payload;
      state.error = undefined;
    },
    fetchTrainer(state, action) {
      state.trainer = action.payload;
      state.error = undefined;
    },
    addTrainer(state, action) {
      state.trainersDTO = [action.payload].concat(state.trainers);
      state.error = undefined;
    },
    deleteTrainer(state, action) {
      state.trainersDTO.splice(
        state.trainersDTO.findIndex(
          (member) => member.memberID === action.payload
        )
      );
      state.error = undefined;
    },
    updateTrainer(state, action) {
      state.trainersDTO = state.trainersDTO?.map((trainer) =>
        trainer.trainerID === action.payload.trainerID
          ? action.payload
          : trainer
      );
      state.error = undefined;
    },

    actionStart(state) {
      state.error = undefined;
    },
    actionError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const trainersActions = trainersSlice.actions;
export default trainersSlice.reducer;
