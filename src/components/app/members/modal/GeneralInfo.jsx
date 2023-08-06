import { useState, useEffect, Fragment } from "react";
import { Button, TextField } from "@mui/material";
import CustomSelect from "../../../reusable/inputFields/CustomSelect";
import BorderedSection from "../../../reusable/containers/BorderedSection";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ConfirmModal from "../../../reusable/modals/ConfirmModal";
import { validateField } from "../../../../utils/utilFunctions";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import * as membersActions from "../../../../actions/members";
import { useSelector } from "react-redux";

export default function GeneralInfo(props) {
  const {
    memberState, // memberDTO passed as props from MemberModal
    setMemberState,
    dispatch,
    open,
    setOpen,
  } = props || {};

  const { member } = useSelector((state) => state.membersReducer);
  const [newMemberState, setNewMemberState] = useState({});
  useEffect(() => {
    setNewMemberState(member);
  }, [member]);

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [editEnabled, setEditEnabled] = useState(false);
  const [errorState, setErrorState] = useState({
    firstName: false,
    lastName: false,
  });

  const handleToggleEdit = (e, param) => {
    setEditEnabled((prevEditEnabled) =>
      param !== undefined ? param : !prevEditEnabled
    );
    setNewMemberState(memberState); // if edit is disabled, revert changes
  };
  const handleChange = (e) => {
    if (!editEnabled) return;

    setNewMemberState({
      ...newMemberState,
      [e.target.id]: e.target.value !== "" ? e.target.value : null,
    });
  };
  const handleSave = () => {
    const hasFirstNameError = validateField(
      newMemberState.firstName,
      "firstName",
      setErrorState
    );
    const hasLastNameError = validateField(
      newMemberState.lastName,
      "lastName",
      setErrorState
    );

    if (hasFirstNameError || hasLastNameError) return;
    dispatch(membersActions.updateMember(newMemberState));
  };
  const handleDelete = () => {
    dispatch(membersActions.deleteMember(memberState.memberID));
    setOpen(false);
  };

  return (
    <BorderedSection
      icon={InfoIcon}
      title="General Information"
      style={{ display: "grid", gridTemplateColumns: "1fr" }}
    >
      <TextField
        id="id"
        label="Member ID"
        readOnly
        variant="filled"
        sx={{ width: "25ch" }}
        value={newMemberState?.memberID}
        onChange={handleChange}
      />
      <TextField
        required
        id="firstName"
        label="First name"
        variant="filled"
        sx={{ width: "25ch" }}
        value={newMemberState?.firstName}
        onChange={handleChange}
      />
      <TextField
        required
        id="lastName"
        label="Last name"
        variant="filled"
        sx={{ width: "25ch" }}
        value={newMemberState?.lastName}
        onChange={handleChange}
      />
      <CustomSelect
        id="gender"
        label="Gender"
        variant="filled"
        value={newMemberState?.gender}
        hasBlank={true}
        setValue={setNewMemberState}
        sx={{ width: "25ch" }}
        options={["MALE", "FEMALE"]}
        onChange={handleChange}
      />
      <TextField
        id="address"
        label="Address"
        variant="filled"
        sx={{ width: "25ch" }}
        value={newMemberState?.address}
        onChange={handleChange}
      />
      <TextField
        id="phoneNumber"
        label="Phone number"
        variant="filled"
        sx={{ width: "25ch" }}
        value={newMemberState?.phoneNumber}
        onChange={handleChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          label="Birth date"
          variant="filled"
          value={new Date(newMemberState?.birthDate)}
          onAccept={(e) => {
            setNewMemberState({
              ...newMemberState,
              birthDate: e,
            });
          }}
        />
      </LocalizationProvider>

      <div style={{ float: "right" }}>
        {editEnabled ? (
          <Fragment>
            <Button
              variant="outlined"
              endIcon={<CancelIcon />}
              onClick={handleToggleEdit}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              endIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save
            </Button>
          </Fragment>
        ) : (
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            onClick={handleToggleEdit}
          >
            Edit
          </Button>
        )}
        <Button
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={() => {
            setConfirmModalVisible(true);
          }}
        >
          Delete
        </Button>
      </div>
      <ConfirmModal
        title="Delete Member"
        text="Are you sure you want to delete this member?"
        yes_action={handleDelete}
        no_action={() => {
          setConfirmModalVisible(false);
        }}
        open={confirmModalVisible}
        setOpen={setConfirmModalVisible}
      />
    </BorderedSection>
  );
}
