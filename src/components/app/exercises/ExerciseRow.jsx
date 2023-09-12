import { TableCell, TableRow } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import { useDispatch } from "react-redux";
import withTranslations from "../../../utils/HighOrderComponent";
import EditIcon from "@mui/icons-material/Edit";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import * as exercisesActions from "../../../actions/exercises";
import { Edit } from "@mui/icons-material";
import EditExerciseModal from "./EditExerciseModal";
import {
  capitalizeFirstLetter,
  removeUnderscores,
} from "../../../utils/utilFunctions";

const ExerciseRow = (props) => {
  const { exercise, t } = props;

  const dispatch = useDispatch();

  const [exerciseState, setExerciseState] = useState(exercise);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  useEffect(() => {
    setExerciseState(exercise);
  }, [exercise]);
  const handleDelete = () => {
    dispatch(
      exercisesActions.deleteExercise(exerciseState.exerciseID, t?.messages)
    );
  };

  return (
    <Fragment>
      <ConfirmModal
        title={t?.messages?.confirm_delete_title}
        text={t?.messages?.confirm_delete_text}
        yes_action={handleDelete}
        no_action={() => {
          setConfirmModalVisible(false);
        }}
        open={confirmModalVisible}
        setOpen={setConfirmModalVisible}
      />
      <EditExerciseModal
        exercise={exerciseState}
        setExercise={setExerciseState}
        open={editModalVisible}
        setOpen={setEditModalVisible}
        t={t}
      />
      <TableRow key={exerciseState?.exerciseID}>
        <TableCell>{exerciseState?.name}</TableCell>
        <TableCell align="center">
          <Chip
            label={capitalizeFirstLetter(
              removeUnderscores(exerciseState?.category)
            )}
          />
        </TableCell>
        <TableCell align="center">
          <Chip
            label={capitalizeFirstLetter(
              removeUnderscores(exerciseState?.bodyPart)
            )}
            variant="outlined"
          />
        </TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() => {
              setEditModalVisible(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() => {
              setConfirmModalVisible(true);
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default withTranslations(ExerciseRow);
