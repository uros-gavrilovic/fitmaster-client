import { TableCell, TableRow } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

export default function PackageRow(props) {
  const { packageItem } = props;

  const [packageState, setPackageState] = useState(props.package);

  useEffect(() => {
    setPackageState(packageItem);
  }, [packageItem]);

  return (
    <TableRow key={packageState?.packageID}>
      <TableCell>{packageState?.name}</TableCell>
      <TableCell>{packageState?.price}</TableCell>
    </TableRow>
  );
}
