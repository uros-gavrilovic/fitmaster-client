import CustomBox from "../../reusable/containers/CustomBox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Box from "@mui/material/Box";
import { Fragment, useEffect } from "react";
import * as trainersActions from "../../../actions/trainers";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import CustomSelect from "../../reusable/inputFields/CustomSelect";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Avatar from "@mui/material/Avatar";
import { isNumber, validateField } from "../../../utils/utilFunctions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
// import IconButton from "@mui/material/IconButton";
import IconButton from "../../reusable/buttons/IconButton";

const initialTrainerState = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
};
const initialErrorState = {
  firstName: false,
  lastName: false,
};

export default function AccountSettings(props) {
  const { t } = props || {};

  const [trainerState, setTrainerState] = useState(initialTrainerState);
  const [errorState, setErrorState] = useState(initialErrorState);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { trainer } = useSelector((state) => state.trainersReducer);

  useEffect(() => {
    dispatch(trainersActions.getTrainer(user.trainerID));
  }, [dispatch, user.trainerID]);

  useEffect(() => {
    setTrainerState(trainer);
  }, [trainer]);

  const handleChange = (event) => {
    setTrainerState({
      ...trainerState,
      [event.target.id]: event.target.value,
    });
  };
  const handleImageUpload = () => {};

  return (
    <CustomBox sx={{ width: "100%" }}>
      <h2>
        <ManageAccountsIcon />
        {t?.tabs?.accountSettings}
      </h2>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: "2vw",
        }}
      >
        <CustomBox
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            style={{ display: "none" }}
            accept="image/*"
            id="image-picker"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-picker">
            {trainerState?.image ? (
              <Avatar
                sx={{ width: "10vw", height: "10vw" }}
                src={trainerState?.image}
              />
            ) : (
              <IconButton sx={{ width: "10vw", height: "10vw" }}>
                <AccountCircleIcon sx={{ fontSize: "10vw" }} />
              </IconButton>
            )}
          </label>
          <Box sx={{ marginTop: "4vh" }}>
            <IconButton
              title={t?.accountSettings?.buttons?.btnChangePassword}
              leftIcon={<LockIcon />}
            />
            <IconButton
              title={t?.accountSettings?.buttons?.btnDelete}
              leftIcon={<PersonRemoveIcon />}
            />
          </Box>
        </CustomBox>
        <CustomBox
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "1vw",
          }}
        >
          <TextField
            required
            fullWidth={true}
            id="firstName"
            label={t?.accountSettings?.fields?.firstName}
            variant="outlined"
            value={trainerState?.firstName}
            onChange={handleChange}
            error={errorState.firstName}
          />
          <TextField
            required
            fullWidth={true}
            id="lastName"
            label={t?.accountSettings?.fields?.lastName}
            variant="outlined"
            value={trainerState?.lastName}
            onChange={handleChange}
            error={errorState.firstName}
          />
          <TextField
            fullWidth={true}
            id="phoneNumber"
            label={t?.accountSettings?.fields?.phoneNumber}
            variant="outlined"
            value={trainerState?.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            fullWidth={true}
            id="address"
            label={t?.accountSettings?.fields?.address}
            variant="outlined"
            value={trainerState?.address}
            onChange={handleChange}
          />
          <CustomSelect
            id="gender"
            label={t?.accountSettings?.fields?.gender}
            variant="outlined"
            value={trainerState?.gender}
            onChange={handleChange}
            options={["MALE", "FEMALE"]}
            hasBlank={true}
          />
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={localStorage.getItem("appLocale") || "en"}
          >
            <DatePicker
              label={t?.accountSettings?.fields?.hireDate}
              value={trainerState?.hireDate}
              format="dd/MM/yyyy"
              disableFuture
              slotProps={{ textField: { variant: "outlined" } }}
              onChange={(e) => {
                setTrainerState({ ...trainerState, hireDate: e });
              }}
            />
          </LocalizationProvider>
          <div style={{ gridColumn: "1 / span 2", justifySelf: "end" }}>
            <IconButton
              title={t?.accountSettings?.buttons?.btnUpdate}
              leftIcon={<AccountCircleIcon />}
            />
          </div>
        </CustomBox>
      </Box>
    </CustomBox>
  );
}
