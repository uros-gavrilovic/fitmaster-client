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
import { formatDate } from "../../../utils/utilFunctions";

export default function MemberRow(props) {
  const { t, member } = props || {}; // memberDTO from fetchMembersDTO list
  const dispatch = useDispatch();

  const [memberState, setMemberState] = useState(member);

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
    // dispatch(memberActions.deleteMember(state.id, t.Delete));
  };
  const editRow = () => {
    // dispatch(memberActions.updateMember(state, t.Edit));
  };

  return (
    <Fragment>
      <MemberModal
        memberState={memberState}
        setMemberState={setMemberState}
        open={infoModalVisible}
        setOpen={setInfoModalVisible}
      />
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
        <TableCell>{memberState?.firstName}</TableCell>
        <TableCell>{memberState?.lastName}</TableCell>
        <TableCell>{memberState?.gender}</TableCell>
        <TableCell>{memberState?.address}</TableCell>
        <TableCell>{memberState?.phoneNumber}</TableCell>
        <TableCell>{formatDate(memberState?.birthDate)}</TableCell>
        <TableCell align="center">
          {memberState?.active ? <CheckCircleIcon /> : null}
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
