import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import { formatDate } from "../../../utils/utilFunctions";

export default function MembershipRow(props) {
  const { membership } = props || {};
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleDelete = () => {
    setConfirmModalVisible(true);
  };
  const deleteRow = () => {
    // dispatch(memberActions.deleteMember(state.id, t.Delete));
  };

  return (
    <Fragment>
      <ConfirmModal
        title="Delete Membership"
        text="Are you sure you want to invalidate this membership?"
        yes_action={deleteRow}
        no_action={() => {
          setConfirmModalVisible(false);
        }}
        open={confirmModalVisible}
        setOpen={setConfirmModalVisible}
      />

      <TableRow key={membership.id}>
        <TableCell>{membership?.id}</TableCell>
        <TableCell>{membership?.package?.name}</TableCell>
        <TableCell>{formatDate(membership?.startDate)}</TableCell>
        <TableCell>{formatDate(membership?.endDate)}</TableCell>
        <TableCell>{membership?.active ? "Active" : ""}</TableCell>
        <TableCell align="center">
          <DeleteForeverIcon onClick={handleDelete} />
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
