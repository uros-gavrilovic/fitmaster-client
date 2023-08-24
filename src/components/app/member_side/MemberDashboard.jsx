import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import * as userActions from "../../../actions/user";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
  Table,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TableBody,
} from "@mui/material";

const MemberDashboard = () => {
  const { member } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logoutMember("Successfully logged out"));
    navigate("/");
  };

  return (
    <Fragment>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h2>Welcome {member?.firstName}</h2>
        <TableContainer component={Paper}>
          <Table aria-label="Member Information">
            <TableBody>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>{member?.firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>{member?.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell>{member?.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell>{member?.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone Number</TableCell>
                <TableCell>{member?.phoneNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Birthdate</TableCell>
                <TableCell>{member?.birthDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Membership status</TableCell>
                <TableCell>
                  {member?.active ? <DoneIcon /> : <CloseIcon />}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: "10px" }}>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default MemberDashboard;
