import { Button, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import CustomSelect from "../../reusable/inputFields/CustomSelect";
import SaveIcon from "@mui/icons-material/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";
import "react-day-picker/dist/style.css";
import { isNumber } from "../../../utils/utilFunctions";
import * as membersActions from "../../../actions/members";
import { useDispatch } from "react-redux";
import { useIsMount } from "../../../utils/customHooks/useIsMount";
import { convertEmptyFieldsToNull } from "../../../utils/utilFunctions";

const initialMemberState = {
  firstName: "",
  lastName: "",
  gender: "",
  address: "",
  phoneNumber: "",
  birthDate: "",
};

export default function AddMembers(props) {
  const isMount = useIsMount();
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
    if (memberState.firstName === "") {
      setErrorState((prevState) => ({ ...prevState, firstName: true }));
      return;
    } else {
      setErrorState((prevState) => ({ ...prevState, firstName: false }));
    }
    if (memberState.lastName === "") {
      setErrorState((prevState) => ({ ...prevState, lastName: true }));
      return;
    } else {
      setErrorState((prevState) => ({ ...prevState, lastName: false }));
    }

    if (errorState.firstName || errorState.lastName) return;

    dispatch(membersActions.addMember(convertEmptyFieldsToNull(memberState)));
    handleClear();
  };

  return (
    <Fragment>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
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
          setValue={(e) => {
            setMemberState({ ...memberState, gender: e });
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
        <DayPicker
          id="birthDate"
          mode="single"
          selected={memberState?.birthDate}
          onSelect={(e) => {
            setMemberState({ ...memberState, birthDate: e });
          }}
        />
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
