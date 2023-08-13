import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CustomAccordion from "../../reusable/containers/CustomAccordion";
import { useState } from "react";
import { TextField } from "@mui/material";
import {
  boldTextParser,
  isNumber,
  validateField,
} from "../../../utils/utilFunctions";
import { useEffect } from "react";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function ExerciseTransferList(props) {
  const { availableExercises, setAvailableExercises } = props || {};
  const [choosenExercises, setChoosenExercises] = useState([]);
  const [volume, setVolume] = useState({ reps: "", sets: "" });
  const [error, setError] = useState({ reps: false, sets: false });

  const left = availableExercises;
  const right = choosenExercises;

  const [checked, setChecked] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const numberOfChecked = (items) => intersection(checked, items).length;
  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };
  const handleCheckedRight = () => {
    const hasRepsError = validateField(volume.reps, "reps", setError);
    const hasSetsError = validateField(volume.sets, "sets", setError);

    if (hasRepsError || hasSetsError) return;

    if (!volume.reps) {
      setError((prevError) => ({ ...prevError, reps: true }));
      return;
    }
    if (!volume.sets) {
      setError((prevError) => ({ ...prevError, sets: true }));
      return;
    }

    const newExercises = leftChecked.map((exercise) => {
      return {
        ...exercise,
        reps: volume.reps,
        sets: volume.sets,
      };
    });

    setChoosenExercises(right.concat(newExercises));
    setAvailableExercises(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    setVolume({ reps: "", sets: "" });
  };
  const handleCheckedLeft = () => {
    setAvailableExercises(left.concat(rightChecked));
    setChoosenExercises(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleVolumeChange = (e) => {
    if (!isNumber(e.target.value, true) || e.target.value.length > 3) return;
    setVolume((prevVolume) => ({
      ...prevVolume,
      [e.target.id]: e.target.value,
    }));
  };

  const customList = (title, items, side) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: "30vw",
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items?.map((value) => {
          const labelId = `transfer-list-all-item-${value.id}-label`;

          return (
            <ListItem
              key={value.id}
              role="listitem"
              button
              onClick={handleToggle(value)}
              sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
            >
              <ListItemIcon sx={{ width: "100%" }}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
                <CustomAccordion
                  title={boldTextParser(
                    `${value.name}  (${value.category})${
                      side === "RIGHT-SIDE"
                        ? ` <<${volume.reps}>> reps x <<${volume.sets}>> sets`
                        : ""
                    }`
                  )}
                  description={value.instructions}
                />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={{ flexGrow: 1 }}>
          {customList("Available Exercises", left, "LEFT-SIDE")}
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid container direction="row" alignItems="center">
              <TextField
                id="reps"
                label="reps"
                error={error.reps}
                sx={{ m: 1, width: "7ch" }}
                disabled={leftChecked.length === 0}
                value={volume.reps}
                onChange={handleVolumeChange}
              />
              x
              <TextField
                id="sets"
                label="sets"
                error={error.sets}
                sx={{ m: 1, width: "7ch" }}
                disabled={leftChecked.length === 0}
                value={volume.sets}
                onChange={handleVolumeChange}
              />
            </Grid>

            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          {customList("Workout Plan", right, "RIGHT-SIDE")}
        </Grid>
      </Grid>
    </div>
  );
}
