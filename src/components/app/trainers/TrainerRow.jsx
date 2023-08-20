import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton, TableCell, TableRow } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import { formatDate } from "../../../utils/utilFunctions";
import withTranslations from "../../../utils/HighOrderComponent";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import * as trainersActions from "../../../actions/trainers";
import { StyledBadge } from "../../reusable/containers/CustomAccountMenu";

const TrainerRow = (props) => {
  const { t, trainer } = props || {};

  const dispatch = useDispatch();
  const [trainerState, setTrainerState] = useState(trainer);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const { user } = useSelector((state) => state.userReducer);

  const handleDelete = () => {
    dispatch();
    //   trainersActions.deleteTrainer(trainerState.trainerID, t?.messages)
  };

  return (
    <Fragment>
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

      <TableRow
        key={trainerState.trainerID}
        sx={
          trainerState?.trainerID === 0
            ? { backgroundColor: "rgb(255, 228, 222)" }
            : null
        }
      >
        <TableCell>
          {trainerState?.trainerID === user.trainerID ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={trainerState?.image}>
                {trainerState?.trainerID === 0 ? (
                  <AdminPanelSettingsIcon />
                ) : null}
              </Avatar>
            </StyledBadge>
          ) : (
            <Avatar src={trainerState?.image}>
              {trainerState?.trainerID === 0 ? (
                <AdminPanelSettingsIcon />
              ) : null}
            </Avatar>
          )}
        </TableCell>
        <TableCell>{trainerState?.firstName}</TableCell>
        <TableCell>{trainerState?.lastName}</TableCell>
        <TableCell>{trainerState?.gender}</TableCell>
        <TableCell>{trainerState?.phoneNumber}</TableCell>
        <TableCell>{trainerState?.address}</TableCell>
        <TableCell>{formatDate(trainerState?.hireDate)}</TableCell>
      </TableRow>
    </Fragment>
  );
};

export default withTranslations(TrainerRow);
