import apiService from "../utils/apiService";
import { exercisesActions } from "../reducers/exercises";
import { handleError } from "../utils/utilFunctions";
import { exercisesDTOPath } from "../constants/apiEndpoints";

export const fetchExercisesDTO = () => {
  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    return apiService
      .get(exercisesDTOPath())
      .then((response) => {
        dispatch(exercisesActions.fetchExercisesDTO(response.data));
      })
      .catch((err) => {
        handleError(err, exercisesActions, dispatch, {
          title: "Error",
          message: "Error fetching exercises",
        });
      });
  };
};

export const searchExercisesDTO = (string) => {
  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    dispatch(exercisesActions.searchExercisesDTO(string));
  };
};
