import { Fragment, useState } from "react";
import * as memberActions from "../../../actions/members";
import { useDispatch } from "react-redux";
import config from "./membersConfig";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { type } from "@testing-library/user-event/dist/type";

export default function MemberRow(props) {
  const { t, member } = props || {};
  const dispatch = useDispatch();

  const initialState = {
    id: member.id,
    firstName: member.firstName,
    lastName: member.lastName,
    gender: member.gender,
    address: member.address,
    phoneNumber: member.phoneNumber,
    birthDate: member.birthDate,
  };
  const [state, setState] = useState(initialState);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleEdit = () => {
    console.log("handleEdit");
    // setEditModalVisible(true);
  };
  const handleDelete = () => {
    console.log("handleDelete");
    // setConfirmModalVisible(true);
  };

  const deleteRow = () => {
    dispatch(memberActions.deleteMember(state.id, t.Delete));
  };
  const editRow = () => {
    dispatch(memberActions.updateMember(state, t.Edit));
  };

  return (
    <Fragment>
      {/* {editModalVisible && (
        <EditModal
          t={t}
          state={state}
          setState={setState}
          config={config}
          submitAction={editRow}
          open={editModalVisible}
          setOpen={setEditModalVisible}
        />
      )}
      {confirmModalVisible && (
        <ConfirmModal
          t={t.Delete}
          yes_action={deleteRow}
          no_action={() => {
            setConfirmModalVisible(false);
          }}
          open={confirmModalVisible}
          setOpen={setConfirmModalVisible}
        />
      )} */}

      <TableRow key={member.id}>
        <TableCell>{member.firstName}</TableCell>
        <TableCell>{member.lastName}</TableCell>
        <TableCell>{member.gender}</TableCell>
        <TableCell>{member.address}</TableCell>
        <TableCell>{member.phoneNumber}</TableCell>
        <TableCell>{member.birthDate}</TableCell>
        <TableCell align="center">
          <EditIcon onClick={handleEdit} />
        </TableCell>
        <TableCell align="center">
          <DeleteForeverIcon onClick={handleDelete} />
        </TableCell>
        <TableCell align="center">
          <DeleteForeverIcon onClick={handleDelete} />
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
