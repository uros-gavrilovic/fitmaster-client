import { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../../styles/members/memberModal.css";
import { TextField } from "@mui/material";
import CustomSelect from "../../reusable/input/CustomSelect";

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
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
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
    <div>
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
            <Box sx={style}>
              <div className="leftDiv">
                <AccountCircleIcon />
              </div>
              <div className="rightDiv">
                <TextField
                  id="id"
                  label="ID"
                  readOnly
                  variant="filled"
                  value={memberState.id}
                />
                <TextField
                  id="firstName"
                  label="First name"
                  variant="filled"
                  value={memberState.firstName}
                />
                <TextField
                  id="lastName"
                  label="Last name"
                  variant="filled"
                  value={memberState.lastName}
                />
                {/* <CustomSelect
                  id="age"
                  label="Gender"
                  variant="filled"
                  value={memberState.age}
                  setValue={setMemberState}
                  options={["MALE", "FEMALE", "OTHER"]}
                /> */}
                <TextField
                  id="filled-basic"
                  label="Address"
                  variant="filled"
                  value={memberState.address}
                />
                <TextField
                  id="filled-basic"
                  label="Phone number"
                  variant="filled"
                  value={memberState.phoneNumber}
                />
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </div>
            </Box>
          ) : (
            <Box>Unable to retreive this member.</Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
