import { Fragment, useEffect, useState } from "react";
import * as memberActions from "../../../actions/members";
import { useDispatch } from "react-redux";
import {
  Avatar,
  IconButton,
  TableCell,
  TableRow,
  ToggleButton,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import MemberModal from "./MemberModal";
import { formatDate } from "../../../utils/utilFunctions";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { BadStatus, GoodStatus, NeutralStatus, OkayStatus } from "./StatusBars";
import withTranslations from "../../../utils/HighOrderComponent";
import { memberStatus } from "../../../constants/globals";

const MemberRow = (props) => {
  const { t, member, selectVersion, selectMember, setSelectModalOpen } =
    props || {}; // memberDTO from fetchMembersDTO list

  const dispatch = useDispatch();
  const [memberState, setMemberState] = useState(member);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  useEffect(() => {
    setMemberState(member);
  }, [member]);

  const handlePlan = () => {};
  const handleDelete = () => {
    dispatch(memberActions.deleteMember(memberState.memberID, t?.messages));
  };
  const handleSelectMember = () => {
    selectMember(member);
    setSelectModalOpen(false);
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
        title={t?.messages.title}
        text={t?.messages.text}
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
          {memberState?.status === memberStatus.ACTIVE ? (
            <GoodStatus>{t?.fields?.active?.toUpperCase()}</GoodStatus>
          ) : memberState?.status === memberStatus.INACTIVE ? (
            <OkayStatus>{t?.fields?.inactive?.toUpperCase()}</OkayStatus>
          ) : memberState?.status === memberStatus.BANNED ? (
            <BadStatus>{t?.fields?.bad?.toUpperCase()}</BadStatus>
          ) : (
            <NeutralStatus>{t?.fields?.pending?.toUpperCase()}</NeutralStatus>
          )}
        </TableCell>
        {!selectVersion ? (
          <>
            <TableCell align="center">
              <IconButton onClick={handlePlan}>
                <AssignmentIcon />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <IconButton
                onClick={() => {
                  setInfoModalVisible(true);
                }}
              >
                <InfoIcon />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <IconButton
                onClick={() => {
                  setConfirmModalVisible(true);
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </TableCell>
          </>
        ) : (
          <TableCell align="center">
            <IconButton onClick={handleSelectMember}>
              <CheckBoxIcon />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
    </Fragment>
  );
};

export default withTranslations(MemberRow);
