import withTranslations from "../../../utils/HighOrderComponent";
import CustomModal from "../../reusable/modals/CustomModal";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomChipSelect from "../../reusable/inputFields/ChipSelect";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SaveIcon from "@mui/icons-material/Save";
import * as exercisesActions from "../../../actions/exercises";
import { validateField } from "../../../utils/utilFunctions";

const EditExerciseModal = (props) => {
  const { exercise, setExercise, open, setOpen, t } = props || {};

  const { bodyParts, categories } = useSelector(
    (state) => state.exercisesReducer
  );

  const dispatch = useDispatch();

  const [newExerciseState, setNewExerciseState] = useState(exercise);
  const [errorState, setErrorState] = useState(initialErrorState);
  const [clearDisabled, setClearDisabled] = useState(true);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setNewExerciseState({ ...newExerciseState, [id]: value });
  };
  const handleSave = () => {
    const hasNameError = validateField(
      newExerciseState.name,
      "name",
      setErrorState
    );
    const hasCategoryError = validateField(
      newExerciseState.category,
      "category",
      setErrorState
    );
    const hasBodyPartError = validateField(
      newExerciseState.bodyPart,
      "bodyPart",
      setErrorState
    );

    if (hasNameError || hasCategoryError || hasBodyPartError) return;

    dispatch(exercisesActions.editExercise(newExerciseState, t?.messages));
    setExercise(newExerciseState); // Update state outside of modal.
    setOpen(false);
  };
  const handleClear = () => {
    setNewExerciseState(exercise);
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
        <TextField
          id="name"
          required
          label={t?.fields?.name}
          error={errorState.name}
          value={newExerciseState.name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="instructions"
          multiline
          rows={5}
          label={t?.fields?.instructions}
          error={errorState.instructions}
          value={newExerciseState.instructions}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <CustomChipSelect
          multiple={false}
          title={t?.fields?.category}
          items={categories}
          error={errorState.category}
          selectedItems={[newExerciseState.category]}
          setSelectedItems={(selectedCategory) => {
            setNewExerciseState({
              ...newExerciseState,
              category: selectedCategory,
            });
          }}
        />
        <CustomChipSelect
          multiple={false}
          title={t?.fields?.body_part}
          error={errorState.bodyPart}
          items={bodyParts}
          selectedItems={[newExerciseState.bodyPart]}
          setSelectedItems={(selectedBodyPart) => {
            setNewExerciseState({
              ...newExerciseState,
              bodyPart: selectedBodyPart,
            });
          }}
        />
      </Box>
      <Button
        variant="outlined"
        disabled={clearDisabled}
        onClick={handleClear}
        startIcon={<BackspaceIcon />}
      >
        {t?.buttons?.clear}
      </Button>
      <Button variant="contained" onClick={handleSave} endIcon={<SaveIcon />}>
        {t?.buttons?.save}
      </Button>
    </CustomModal>
  );
};

export default EditExerciseModal;

const initialErrorState = {
  name: false,
  category: false,
  bodyPart: false,
};
