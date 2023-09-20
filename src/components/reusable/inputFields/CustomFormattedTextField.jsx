import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, label, ...other } = props || {};

  return (
    <IMaskInput
      {...other}
      mask="+(###) ##-###-####"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={onChange}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function CustomFormattedTextField(props) {
  const { id, label, value, onChange } = props || {};

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        value={value}
        onChange={handleChange}
        id={id}
        name={id}
        inputComponent={TextMaskCustom}
      />
    </FormControl>
  );
}
