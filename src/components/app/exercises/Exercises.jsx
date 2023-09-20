import { useDispatch, useSelector } from "react-redux";
import withTranslations from "../../../utils/HighOrderComponent";
import { Fragment, useEffect, useState } from "react";
import * as exercisesActions from "../../../actions/exercises";
import ExercisesTable from "./ExercisesTable";
import exercisesConfig from "./exercisesConfig";
import ExerciseRow from "./ExerciseRow";
import { Box, Button, Paper, TextField } from "@mui/material";
import CustomChipSelect from "../../reusable/inputFields/ChipSelect";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SaveIcon from "@mui/icons-material/Save";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { validateField } from "../../../utils/utilFunctions";
import Loading from "../../reusable/Loading";
import IconTextField from "../../reusable/inputFields/IconTextField";
import SearchIcon from "@mui/icons-material/Search";

const Exercises = (props) => {
  const { t } = props || {};

  const dispatch = useDispatch();
  const { exercisesDTO, loading } = useSelector(
    (state) => state.exercisesReducer
  );
  const { categories, bodyParts } = useSelector(
    (state) => state.exercisesReducer
  );
  const [newExerciseState, setNewExerciseState] = useState(
    initialNewExerciseState
  );
  const [errorState, setErrorState] = useState(initialErrorState);
  const [clearDisabled, setClearDisabled] = useState(true);

  useEffect(() => {
    dispatch(exercisesActions.fetchExercisesDTO());

    if (categories.length === 0 || bodyParts.length === 0) {
      dispatch(exercisesActions.fetchCategoriesAndBodyParts());
    }
  }, [dispatch]);
  useEffect(() => {
    if (newExerciseState !== initialNewExerciseState) {
      setClearDisabled(false);
    } else {
      setClearDisabled(true);
    }
  }, [newExerciseState]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setNewExerciseState({ ...newExerciseState, [id]: value });
  };
  const handleClear = () => {
    setNewExerciseState(initialNewExerciseState);
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

    dispatch(exercisesActions.createExercise(newExerciseState, t?.messages));
    handleClear();
  };
  const handleSearch = (event) => {
    dispatch(exercisesActions.searchExercisesDTO(event.target.value));
  };

  return (
    <Fragment>
      <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
        {loading && exercisesDTO.length === 0 ? (
          <Loading />
        ) : (
          <Box>
            <IconTextField
              id="search"
              title={t?.fields?.search}
              icon={<SearchIcon />}
              onChange={handleSearch}
              style={{ float: "right" }}
            />
            <ExercisesTable
              style={{ width: "100%", height: "100%" }}
              config={exercisesConfig}
              rows={exercisesDTO}
              rowComponent={rowComponentFunction}
            />
          </Box>
        )}

        <Paper sx={{ marginLeft: "1vw", padding: "1vw" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <h2>{t?.titles?.add_exercise}</h2>
            <FontAwesomeIcon
              icon={faBasketball}
              size="2xl"
              bounce
              style={{ padding: "1vw" }}
            />
          </Box>

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
              title={t?.fields?.category}
              items={categories}
              error={errorState.category}
              selectedItems={newExerciseState.category}
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
              selectedItems={newExerciseState.bodyPart}
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
          <Button
            variant="contained"
            onClick={handleSave}
            endIcon={<SaveIcon />}
          >
            {t?.buttons?.save}
          </Button>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default withTranslations(Exercises);

const rowComponentFunction = (row) => {
  return <ExerciseRow exercise={row} key={row.exerciseID} />;
};

const initialNewExerciseState = {
  name: "",
  instructions: "",
  category: [],
  bodyPart: [],
};
const initialErrorState = {
  name: false,
  instructions: false,
  category: false,
  bodyPart: false,
};
