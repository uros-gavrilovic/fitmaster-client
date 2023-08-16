import React, { useState } from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { TextField } from "@mui/material";
import { validateField } from "../../../utils/utilFunctions";
import { useDispatch } from "react-redux";
import * as packagesActions from "../../../actions/package";

export default function AddPackage() {
  const startingState = {
    name: "",
    price: "",
  };
  const dispatch = useDispatch();
  const [packageState, setPackageState] = useState(startingState);
  const [errorState, setErrorState] = useState({
    name: false,
    price: false,
  });
  const handleChange = (e) => {
    setPackageState({
      ...packageState,
      [e.target.id]: e.target.value,
    });
  };

  const clear = () => {
    setPackageState(startingState);
  };

  function handleSave() {
    const name = validateField(packageState.name, "name", setErrorState);
    const price = validateField(packageState.price, "price", setErrorState);
    if (name || price) return;
    dispatch(packagesActions.addPackage(packageState));
    clear();
  }
  return (
    <div>
      <h2>Insert new package</h2>
      <TextField
        required
        id="name"
        label="Package name"
        onChange={handleChange}
        variant="filled"
        value={packageState?.name}
      />{" "}
      <br></br>
      <TextField
        id="price"
        label="Price"
        onChange={handleChange}
        variant="filled"
        style={{ marginTop: "10px" }}
        value={packageState?.price}
      />
      <br></br>
      <Button
        style={{ marginTop: "10px", marginLeft: "40px" }}
        variant="contained"
        endIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
}
