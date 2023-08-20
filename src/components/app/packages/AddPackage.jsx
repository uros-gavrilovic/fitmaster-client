import React, { useState } from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { TextField } from "@mui/material";
import { validateField } from "../../../utils/utilFunctions";
import { useDispatch } from "react-redux";
import * as packagesActions from "../../../actions/package";
import withTranslations from "../../../utils/HighOrderComponent";

const AddPackage = (props) => {
  const { t } = props || {};
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
    if (e.target.id === "price") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
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

    if (name || price) {
      return;
    }
    dispatch(packagesActions.addPackage(packageState, t?.messages));
    clear();
  }
  return (
    <div>
      <h2>{t?.components.h1Component}</h2>
      <TextField
        required
        id="name"
        label={t?.fields.name}
        onChange={handleChange}
        variant="filled"
        value={packageState?.name}
        error={errorState.name}
      />{" "}
      <br></br>
      <TextField
        id="price"
        label={t?.fields.price}
        onChange={handleChange}
        variant="filled"
        style={{ marginTop: "10px" }}
        value={packageState?.price}
        InputProps={{
          inputProps: {
            pattern: "[0-9]*",
          },
        }}
        error={errorState.price}
      />
      <br></br>
      <Button
        style={{ marginTop: "10px", marginLeft: "40px" }}
        variant="contained"
        endIcon={<SaveIcon />}
        onClick={handleSave}
      >
        {t?.buttons.btnSave}
      </Button>
    </div>
  );
};

export default withTranslations(AddPackage);
