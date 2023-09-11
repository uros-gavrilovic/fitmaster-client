import apiService from "../utils/apiService";
import { exercisesActions } from "../reducers/exercises";
import {
  convertEmptyFieldsToNull,
  handleError,
  removeArray,
} from "../utils/utilFunctions";
import {
  exercisesDTOPath,
  exercisesIDPath,
  exercisesPath,
  filtersPath,
} from "../constants/apiEndpoints";
import { notificationType } from "../constants/globals";
import { createNotification } from "../utils/notificationService";

export const fetchExercisesDTO = () => {
  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    return apiService
      .get(exercisesDTOPath())
      .then((response) => {
        dispatch(exercisesActions.fetchExercisesDTO(response.data));
      })
      .catch((err) => {
        handleError(err, exercisesActions, dispatch);
      });
  };
};

export const searchExercisesDTO = (string) => {
  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    dispatch(exercisesActions.searchExercisesDTO(string));
  };
};

export const fetchCategoriesAndBodyParts = () => {
  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    return apiService
      .get(filtersPath())
      .then((response) => {
        const bodyParts = response.data.bodyParts;
        const categories = response.data.categories;

        dispatch(exercisesActions.fetchBodyParts(bodyParts));
        dispatch(exercisesActions.fetchCategories(categories));
      })
      .catch((err) => {
        handleError(err, exercisesActions, dispatch);
      });
  };
};

export const createExercise = (exercise, msg) => {
  exercise = removeArray(exercise, "category");
  exercise = removeArray(exercise, "bodyPart");

  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    return apiService
      .post(exercisesPath(), exercise)
      .then((response) => {
        dispatch(exercisesActions.addExercise(response.data));
        createNotification(
          notificationType.success,
          msg?.create_exercise_title,
          msg?.create_exercise_success
        );
      })
      .catch((err) => {
        handleError(err, exercisesActions, dispatch);
      });
  };
};

export const deleteExercise = (exerciseID, msg) => {
  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    return apiService
      .delete(exercisesIDPath(exerciseID))
      .then(() => {
        dispatch(exercisesActions.removeExercise(exerciseID));
        createNotification(
          notificationType.success,
          msg?.delete_exercise_title,
          msg?.delete_exercise_success
        );
      })
      .catch((err) => {
        console.log(err);
        handleError(err, exercisesActions, dispatch);
      });
  };
};

export const editExercise = (exercise, msg) => {
  exercise = removeArray(exercise, "category");
  exercise = removeArray(exercise, "bodyPart");
  exercise = convertEmptyFieldsToNull(exercise);

  return (dispatch) => {
    dispatch(exercisesActions.actionStart());
    return apiService
      .put(exercisesPath(), exercise)
      .then((response) => {
        dispatch(exercisesActions.editExercise(response.data));
        createNotification(
          notificationType.success,
          msg?.edit_exercise_title,
          msg?.edit_exercise_success
        );
      })
      .catch((err) => {
        console.log(err);
        handleError(err, exercisesActions, dispatch);
      });
  };
};
