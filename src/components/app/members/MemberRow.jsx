import { Fragment, useEffect, useState } from "react";
import * as memberActions from "../../../actions/members";
import { useDispatch } from "react-redux";
import { Avatar, TableCell, TableRow } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import MemberModal from "./MemberModal";
import { formatDate } from "../../../utils/utilFunctions";

export default function MemberRow(props) {
  const { t, member } = props || {}; // memberDTO from fetchMembersDTO list

  useEffect(() => {
    setMemberState(member);
  }, [member]);

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
    dispatch(memberActions.deleteMember(memberState.memberID, undefined));
  };
  const editRow = () => {
    // dispatch(memberActions.editMember(memberState));
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
        yes_action={handleDelete}
        no_action={() => {
          setConfirmModalVisible(false);
        }}
        open={confirmModalVisible}
        setOpen={setConfirmModalVisible}
      />

      <TableRow key={member.id}>
        <TableCell align="center">
          <Avatar src={memberState?.image} />
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
          <DeleteForeverIcon
            onClick={() => {
              setConfirmModalVisible(true);
            }}
          />
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
