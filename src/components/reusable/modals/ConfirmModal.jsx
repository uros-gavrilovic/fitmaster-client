import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef, useState } from "react";
import IconButton from "../buttons/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

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
      {React.cloneElement(children, { onClick })}
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
  p: 4,
};

export default function ConfirmModal(props) {
  const { title, text, yes_action, no_action, open, setOpen } = props || {};

  const handlePositive = () => {
    yes_action();
    setOpen(false);
  };
  const handleNegative = () => {
    no_action();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        onBackdropClick={handleNegative}
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
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              {text}
            </Typography>
            <div
              style={{
                marginTop: "5vh",
                display: "grid",
                width: "auto",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <IconButton
                title="No"
                leftIcon={<ThumbDownIcon />}
                variant="outlined"
                width="100%"
                onClick={handleNegative}
              />
              <IconButton
                title="Yes"
                rightIcon={<ThumbUpIcon />}
                variant="contained"
                width="100%"
                onClick={handlePositive}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
