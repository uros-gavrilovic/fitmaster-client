import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { capitalizeFirstLetter } from "../../../utils/utilFunctions";

export default function CustomSelect(props) {
  const { label, options, variant, hasBlank, sx, ...otherProps } = props || {};

  return (
    <FormControl variant={variant} sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Select id="demo-simple-select-filled" {...otherProps}>
        {options.map((availableValue) => {
          return (
            <MenuItem key={availableValue} value={availableValue}>
              {capitalizeFirstLetter(availableValue)}
            </MenuItem>
          );
        })}
        {hasBlank && <MenuItem value={""}>‎</MenuItem>}
      </Select>
    </FormControl>
  );
}
