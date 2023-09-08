import { Fragment, useState } from "react";
import withTranslations from "../../../utils/HighOrderComponent";
import { Avatar, Box, TextField } from "@mui/material";
import IconLabelButtons from "../../reusable/buttons/IconButton";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MemberChooserModal from "./MemberChooserModal";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useTheme } from "@mui/material";

const MemberDetails = (props) => {
  const { member, setMember, t } = props;

  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <MemberChooserModal
        open={modalOpen}
        setOpen={setModalOpen}
        setMember={setMember}
      />
      {member === null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px dashed #000",
            borderRadius: "1rem",
            padding: "1rem",
            height: "100%",
            bgcolor: theme.palette.background.default,
          }}
        >
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <QuestionMarkIcon />
          </Avatar>
          <center>
            <p>{t?.participants?.noMemberSelected}</p>
          </center>
          <IconLabelButtons
            title={t?.buttons?.btnChooseMember}
            rightIcon={<PersonSearchIcon style={{ color: "white" }} />}
            variant="contained"
            style={{ width: "100%" }}
            onClick={handleOpenModal}
          />
        </Box>
      ) : (
        <Box
          sx={{
            height: "100%",
            border: "2px solid #000",
            borderRadius: "1rem",
            padding: "0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Avatar src={member?.image} sx={{ width: "5rem", height: "5rem" }}>
              {member?.firstName[0] + member?.lastName[0]}
            </Avatar>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              id="firstName"
              label={t?.fields?.firstName}
              variant="outlined"
              value={member?.firstName}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="lastName"
              label={t?.fields?.lastName}
              variant="outlined"
              value={member?.lastName}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="memberID"
              label={t?.fields?.memberID}
              variant="outlined"
              value={member?.memberID}
              InputProps={{
                readOnly: true,
              }}
            />
            <IconLabelButtons
              title={t?.buttons?.btnChangeMember}
              rightIcon={<SwitchAccountIcon style={{ color: "white" }} />}
              variant="contained"
              style={{ width: "100%" }}
              onClick={handleOpenModal}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default withTranslations(MemberDetails);
