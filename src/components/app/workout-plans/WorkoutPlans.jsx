import { Fragment } from "react";
import ExerciseTransferList from "./ExerciseTransferList";
import { useDispatch, useSelector } from "react-redux";
import * as exercisesActions from "../../../actions/exercises";
import { useEffect } from "react";
import { useState } from "react";

export default function WorkoutPlans(props) {
  const { exercisesDTO } = useSelector((state) => state.exercisesReducer);
  const [availableExercises, setAvailableExercises] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exercisesActions.fetchExercisesDTO());
  }, [dispatch]);
  useEffect(() => {
    setAvailableExercises(exercisesDTO);
  }, [exercisesDTO]);

  return (
    <Fragment>
      <h1>This is WorkoutPlans.</h1>
      <ExerciseTransferList
        availableExercises={availableExercises}
        setAvailableExercises={setAvailableExercises}
      />
    </Fragment>
  );
}
