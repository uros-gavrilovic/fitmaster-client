import { Fragment, useState } from "react";
import * as memberActions from "../../../actions/members";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import MemberModal from "./MemberModal";

const formatDate = (arr) => {
  return `${arr[2]}/${arr[1]}/${arr[0]}`;
};

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
    active: member.active,
  };
  const [state, setState] = useState(initialState);

  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handlePlan = () => {
    console.log("handlePlan");
  };
  const handleEdit = () => {
    setInfoModalVisible(true);
  };
  const handleDelete = () => {
    setConfirmModalVisible(true);
  };

  const deleteRow = () => {
    console.log("deleting row");
    // dispatch(memberActions.deleteMember(state.id, t.Delete));
  };
  const editRow = () => {
    console.log("editing row");
    // dispatch(memberActions.updateMember(state, t.Edit));
  };

  return (
    <Fragment>
      <MemberModal open={infoModalVisible} setOpen={setInfoModalVisible} />
      <ConfirmModal
        title="Delete Member"
        text="Are you sure you want to delete this member?"
        yes_action={deleteRow}
        no_action={() => {
          setConfirmModalVisible(false);
        }}
        open={confirmModalVisible}
        setOpen={setConfirmModalVisible}
      />

      <TableRow key={member.id}>
        <TableCell align="center">
          <AccountCircleIcon />
        </TableCell>
        <TableCell>{member.firstName}</TableCell>
        <TableCell>{member.lastName}</TableCell>
        <TableCell>{member.gender}</TableCell>
        <TableCell>{member.address}</TableCell>
        <TableCell>{member.phoneNumber}</TableCell>
        <TableCell>{formatDate(member.birthDate)}</TableCell>
        <TableCell align="center">
          {member.active ? <CheckCircleIcon /> : null}
        </TableCell>
        <TableCell align="center">
          <AssignmentIcon onClick={handlePlan} />
        </TableCell>
        <TableCell align="center">
          <InfoIcon onClick={handleEdit} />
        </TableCell>
        <TableCell align="center">
          <DeleteForeverIcon onClick={handleDelete} />
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
