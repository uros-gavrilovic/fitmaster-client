import { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import CustomSelect from "../../reusable/inputFields/CustomSelect";
import { formatDate } from "../../../utils/utilFunctions";
import BorderedSection from "../../reusable/containers/BorderedSection";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const handleEdit = () => {};
const handleDelete = () => {};

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
  gridTemplateColumns: "1fr 3fr",
};

export default function MemberModal(props) {
  const { memberState, setMemberState, open, setOpen } = props || {};

  const dispatch = useDispatch();
  const { member } = useSelector((state) => state.membersReducer);

  useEffect(() => {
    if (open) {
      dispatch(membersActions.fetchMember(memberState.memberID));
    }
  }, [open]);
  useEffect(() => {
    if (open) {
      setMemberState(member);
    }
  }, [member]);

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={() => setOpen(false)}
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
            <div className="leftDiv">
              <Avatar
                sx={{ width: "8vw", height: "10vh", margin: "0.5vw" }}
                src={memberState?.image}
              />
            </div>
            <div>
              <BorderedSection icon={InfoIcon} title="General Information">
                <div className="rightDiv-id">
                  <TextField
                    id="id"
                    label="ID"
                    readOnly
                    variant="filled"
                    sx={{ width: "25ch" }}
                    value={memberState?.memberID}
                  />
                </div>
                <div className="rightDiv-input">
                  <TextField
                    id="firstName"
                    label="First name"
                    variant="filled"
                    sx={{ width: "25ch" }}
                    value={memberState?.firstName}
                  />
                  <TextField
                    id="lastName"
                    label="Last name"
                    variant="filled"
                    sx={{ width: "25ch" }}
                    value={memberState?.lastName}
                  />
                  <CustomSelect
                    id="gender"
                    label="Gender"
                    variant="filled"
                    value={memberState.gender}
                    setValue={setMemberState}
                    sx={{ width: "25ch" }}
                    options={["MALE", "FEMALE", "OTHER"]}
                  />
                  <TextField
                    id="address"
                    label="Address"
                    variant="filled"
                    sx={{ width: "25ch" }}
                    value={memberState?.address}
                  />
                  <TextField
                    id="phoneNumber"
                    label="Phone number"
                    variant="filled"
                    sx={{ width: "25ch" }}
                    value={memberState?.phoneNumber}
                  />
                  <TextField
                    id="birthDate"
                    label="Birth date"
                    variant="filled"
                    sx={{ width: "25ch" }}
                    value={formatDate(memberState?.birthDate)}
                  />
                </div>
                <div className="rightDiv-buttons">
                  <Button variant="contained" endIcon={<EditIcon />}>
                    Edit
                  </Button>
                  <Button variant="contained" endIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </div>
              </BorderedSection>
              <BorderedSection
                icon={ManageSearchIcon}
                title="Membership History"
              >
                {JSON.stringify(memberState?.memberships)}
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
