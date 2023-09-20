import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../reusable/modals/CustomModal";
import ExerciseTransferList from "./ExerciseTransferList";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import * as exercisesActions from "../../../actions/exercises";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SaveIcon from "@mui/icons-material/Save";

const ExerciseChooserModal = (props) => {
  const { open, setOpen, activities, setActivities, t } = props || {};
  const { exercisesDTO } = useSelector((state) => state.exercisesReducer);
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exercisesActions.fetchExercisesDTO());
  }, [dispatch]);

  const [availableExercises, setAvailableExercises] = useState(exercisesDTO);
  useEffect(() => {
    setAvailableExercises(exercisesDTO);
  }, [exercisesDTO]);

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <ExerciseTransferList
        availableExercises={availableExercises}
        setAvailableExercises={setAvailableExercises}
        chosenActivities={activities}
        setChosenActivities={setActivities}
        t={t}
      />
    </CustomModal>
  );
};

export default ExerciseChooserModal;
