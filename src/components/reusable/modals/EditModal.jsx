import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PublishIcon from "@mui/icons-material/Publish";
import { useState, Fragment } from "react";
import { TextField } from "@mui/material";

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

export default function EditModal(props) {
  let { t, state, setState, config, submitAction, open, setOpen } = props || {};
  let columnHeaders = t.columns;
  t = t.Edit;

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleClose = () => setOpen(false);
  const onChangeHandler = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    setState((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    setSubmitDisabled(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    submitAction();
    handleClose();
  };

  const renderColumn = (column) => {
    const readOnly = column.id === "id" ? true : false;
    const required = true;

    switch (column.input) {
      case "text":
      case "number":
        return (
          <TextField
            disabled={readOnly}
            required={required}
            id={column.id}
            label={columnHeaders[column.id]}
            variant="outlined"
            type={column.input}
            value={state[column.id]}
            onChange={onChangeHandler}
          />
        );
      case "date":
        return (
          <input
            required={required}
            id={column.id}
            type="date"
            value={state.date}
            className="date-picker"
            onChange={onChangeHandler}
          />
        );
      default:
      // do nothing
    }
  };

  return (
    <Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>{t.title}</h3>
          <form id="form" className="form" onSubmit={submitHandler}>
            {config.map((column) => {
              if (column.type !== `data`) return null;

              return (
                <Fragment key={column.id}>
                  <label htmlFor={column.id}>{columnHeaders[column.id]}</label>
                  {renderColumn(column)}
                </Fragment>
              );
            })}
          </form>

          <div className="actions">
            <center>
              <button type="submit" form="form" disabled={submitDisabled}>
                <PublishIcon /> {t.submit}
              </button>
            </center>
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
}
