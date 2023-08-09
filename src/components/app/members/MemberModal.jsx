import { useState, cloneElement, Fragment } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import GeneralInfo from "./modal/GeneralInfo";
import MembershipHistory from "./modal/MembershipHistory";
import * as membersActions from "../../../actions/members";
import "../../../utils/customHooks/useIsMount";
import { useIsMount } from "../../../utils/customHooks/useIsMount";

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
  const [activeTab, setActiveTab] = useState(
    <GeneralInfo
      {...{
        memberState,
        setMemberState,
        open,
        setOpen,
        dispatch,
      }}
    />
  );

  const initial = useIsMount();
  useEffect(() => {
    if (initial) return;

    if (open) {
      console.log("OPEN!");
      dispatch(membersActions.fetchMember(memberState.memberID));
    } else {
      console.log("CLOSED!");
    }
  }, [open]);
  useEffect(() => {
    setMemberState(member);
  }, [member]);

  const handleBackgroundClick = () => {
    setOpen(false);
    // handleToggleEdit(undefined, false);
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
                src={memberState?.image}
              />
              <Fragment>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setActiveTab(
                        <GeneralInfo
                          {...{
                            memberState,
                            setMemberState,
                            dispatch,
                            open,
                            setOpen,
                          }}
                        />
                      );
                    }}
                  >
                    <ListItemIcon>
                      <InfoIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>General Information</ListItemText>
                  </MenuItem>
                  <Divider />
                  {/* ------------------------------------------------- */}
                  <MenuItem
                    onClick={() => {
                      setActiveTab(
                        <MembershipHistory
                          {...{
                            memberState,
                            setMemberState,
                            open,
                            setOpen,
                            dispatch,
                          }}
                        />
                      );
                    }}
                  >
                    <ListItemIcon>
                      <ManageSearchIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Memberships</ListItemText>
                  </MenuItem>
                </MenuList>
              </Fragment>
            </div>

            <div className="middle-div">{activeTab}</div>
          </Box>
        ) : (
          <Box>Unable to retreive this member.</Box>
        )}
      </Fade>
    </Modal>
  );
}
