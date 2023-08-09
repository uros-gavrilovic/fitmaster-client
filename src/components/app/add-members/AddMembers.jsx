import { Button, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import CustomSelect from "../../reusable/inputFields/CustomSelect";
import SaveIcon from "@mui/icons-material/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";
import "react-day-picker/dist/style.css";
import {
  isNumber,
  validateField,
  convertEmptyFieldsToNull,
} from "../../../utils/utilFunctions";
import * as membersActions from "../../../actions/members";
import { useDispatch } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "../../reusable/buttons/IconButton";

const initialMemberState = {
  firstName: "",
  lastName: "",
  gender: "",
  address: "",
  phoneNumber: "",
  birthDate: null,
};

export default function AddMembers(props) {
  const dispatch = useDispatch();
  const [memberState, setMemberState] = useState(initialMemberState);
  const [errorState, setErrorState] = useState({
    firstName: false,
    lastName: false,
  });

  const handleChange = (e) => {
    setMemberState({
      ...memberState,
      [e.target.id]: e.target.value,
    });
  };
  const handleClear = () => {
    setMemberState(initialMemberState);
  };
  const handleSave = () => {
    const hasFirstNameError = validateField(
      memberState.firstName,
      "firstName",
      setErrorState
    );
    const hasLastNameError = validateField(
      memberState.lastName,
      "lastName",
      setErrorState
    );

    if (hasFirstNameError || hasLastNameError) return;
    dispatch(membersActions.addMember(memberState));
    handleClear();
  };
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    // TODO: Finish this.
  };

  return (
    <Fragment>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "min-content ",
          gap: "1rem",
        }}
      >
        <TextField
          required
          id="firstName"
          label="First name"
          variant="filled"
          sx={{ width: "25ch" }}
          value={memberState?.firstName}
          onChange={handleChange}
          error={errorState.firstName}
        />
        <TextField
          required
          id="lastName"
          label="Last name"
          variant="filled"
          sx={{ width: "25ch" }}
          value={memberState?.lastName}
          onChange={handleChange}
          error={errorState.lastName}
        />
        <CustomSelect
          id="gender"
          label="Gender"
          variant="filled"
          value={memberState?.gender}
          onChange={(e) => {
            setMemberState({ ...memberState, gender: e.target.value });
          }}
          sx={{ width: "25ch" }}
          options={["MALE", "FEMALE"]}
          hasBlank={true}
        />
        <TextField
          id="address"
          label="Address"
          variant="filled"
          sx={{ width: "25ch" }}
          value={memberState?.address}
          onChange={handleChange}
        />
        <TextField
          id="phoneNumber"
          label="Phone number"
          variant="filled"
          sx={{ width: "25ch" }}
          value={memberState?.phoneNumber}
          onChange={(e) => {
            if (isNumber(e.target?.value)) {
              handleChange(e);
            }
          }}
        />
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          locale={navigator.language || "en-US"}
        >
          <DatePicker
            label="Birth Date"
            value={memberState?.birthDate}
            format="dd/MM/yyyy"
            disableFuture
            slotProps={{ textField: { variant: "filled" } }}
            onChange={(e) => {
              setMemberState({ ...memberState, birthDate: e });
            }}
          />
        </LocalizationProvider>
        <input
          style={{ display: "none" }}
          accept="image/*"
          id="image-picker"
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="image-picker">
          <IconButton
            title="Upload Image"
            component="span"
            leftIcon={<AccountCircleIcon />}
          />
        </label>
      </div>
      <Button
        variant="outlined"
        endIcon={<BackspaceIcon />}
        onClick={handleClear}
      >
        Clear
      </Button>
      <Button variant="contained" endIcon={<SaveIcon />} onClick={handleSave}>
        Save
      </Button>
    </Fragment>
  );
}
