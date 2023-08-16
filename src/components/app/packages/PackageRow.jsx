import { TableCell, TableRow } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import * as packagesActions from "../../../actions/package";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmModal from "../../reusable/modals/ConfirmModal";
import { useDispatch } from "react-redux";

export default function PackageRow(props) {
  const { packageItem } = props;

  const [packageState, setPackageState] = useState(props.package);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setPackageState(packageItem);
  }, [packageItem]);

  const handleDelete = () => {
    dispatch(packagesActions.deletePackage(packageState.packageID, undefined));
  };

  return (
    <Fragment>
      <ConfirmModal
        title="Delete Package"
        text="Are you sure you want to delete this package?"
        yes_action={handleDelete}
        no_action={() => {
          setConfirmModalVisible(false);
        }}
        open={confirmModalVisible}
        setOpen={setConfirmModalVisible}
      />
      <TableRow key={packageState?.packageID}>
        <TableCell>{packageState?.name}</TableCell>
        <TableCell>{packageState?.price}</TableCell>
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
