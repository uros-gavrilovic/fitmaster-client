import { useState, cloneElement, Fragment } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import { Avatar, Button, TextField } from "@mui/material";
import CustomSelect from "../../reusable/inputFields/CustomSelect";
import BorderedSection from "../../reusable/containers/BorderedSection";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import { DayPicker } from "react-day-picker";
import PaginationTable from "../../reusable/tables/PaginationTable";
import membershipConfig from "../members/membershipConfig";
import MembershipRow from "./MembershipRow";
import { validateField } from "../../../utils/utilFunctions";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Fade = forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});
Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};
const style = {
  width: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "grid",
  gridTemplateColumns: "1fr 3fr 3fr",
};

const rowComponentFunction = (t, row) => {
  return <MembershipRow membership={row} />;
};

export default function MemberModal(props) {
  const { memberState, setMemberState, open, setOpen } = props || {};

  const dispatch = useDispatch();
  const { member } = useSelector((state) => state.membersReducer);
  const [newMemberState, setNewMemberState] = useState("");
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [editEnabled, setEditEnabled] = useState(false);
  const [errorState, setErrorState] = useState({
    firstName: false,
    lastName: false,
  });

  useEffect(() => {
    if (open) {
      dispatch(membersActions.fetchMember(memberState.memberID));
    }
  }, [open]);
  useEffect(() => {
    if (open) {
      setMemberState(member);
      setNewMemberState(member);
    }
  }, [member]);

  const handleBackgroundClick = () => {
    setOpen(false);
    handleToggleEdit(undefined, false);
  };
  const handleToggleEdit = (e, param) => {
    setEditEnabled((prevEditEnabled) =>
      param !== undefined ? param : !prevEditEnabled
    );
    setNewMemberState(memberState);
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
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleBackgroundClick}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={open}>
        {memberState !== "" ? (
          <Box style={{ width: "auto" }} sx={style}>
            <div className="left-div">
              <Avatar
                sx={{ width: "8vw", height: "10vh", margin: "0.5vw" }}
                src={newMemberState?.image}
              />
            </div>
            <div className="middle-div">
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
            </div>
            <div className="right-div">
              <BorderedSection
                icon={ManageSearchIcon}
                title="Membership History"
              >
                {newMemberState?.memberships?.length ? (
                  <PaginationTable
                    // t={t}
                    config={membershipConfig}
                    rows={newMemberState?.memberships}
                    rowComponent={rowComponentFunction}
                  />
                ) : (
                  <Fragment>No memberships available</Fragment>
                )}
              </BorderedSection>
            </div>
          </Box>
        ) : (
          <Box>Unable to retreive this member.</Box>
        )}
      </Fade>
    </Modal>
  );
}
