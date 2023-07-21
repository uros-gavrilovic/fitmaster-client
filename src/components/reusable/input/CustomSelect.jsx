import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { capitalizeFirstLetter } from "../../../utils/utilFunctions";

export default function CustomSelect(props) {
  const { label, value, setValue, options, variant } = props || {};

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log("Dobio sam: " + value);
  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={handleChange}
        >
          {options.map((availableValue) => {
            return (
              <MenuItem key={availableValue} value={availableValue}>
                {capitalizeFirstLetter(availableValue)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
