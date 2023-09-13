import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { formatDateForScheduler } from "../../../utils/utilFunctions";
import { Button, DialogActions, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MemberChooserModal from "../workout-plans/MemberChooserModal";
import withTranslations from "../../../utils/HighOrderComponent";
import { useEffect } from "react";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { DateTimePicker } from "@mui/x-date-pickers";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import { ListSubheader } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useIsMount } from "../../../utils/customHooks/useIsMount";

const CustomEditor = (props) => {
  const { scheduler, t } = props || {};

  const isMount = useIsMount();
  const event = scheduler.edited;

  const { plan } = useSelector((eventState) => eventState.plansReducer);
  useEffect(() => {
    // After clicking on an event, fetchByID is triggered, and it's now set as eventState
    setEventState((prev) => {
      return {
        ...prev,
        member: plan.member,
        activities: plan.activities,
        comment: plan.comment,
      };
    });
  }, [plan]);

  const [eventState, setEventState] = useState({
    event_id: event ? event.event_id : "",
    title: event ? event.title : "",
    member: event ? { firstName: "", lastName: "", memberID: "" } : {},
    activities: event ? event.activities : [],
    comment: event ? event.comment : "",
    start: event ? event.start : "",
    end: event ? event.end : "",
  });
  const [selectModalVisible, setSelectModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(eventState.member); // Member selected by MemberChooserModal
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    // After selecting a member using MemberChooserModal, set the selected member to eventState
    if (!isMount) {
      setEventState((prev) => {
        return {
          ...prev,
          member: selectedMember,
        };
      });
    }
  }, [selectedMember]);

  const handleChange = (event) => {
    setEventState((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };
  const handleEditActivities = () => {};
  const handleRemoveActivity = (activityIndex) => {
    let updatedActivities = [...eventState.activities];

    if (updatedActivities.length === 1) {
      updatedActivities = [];
    } else {
      updatedActivities.splice(activityIndex, 1);
    }

    setEventState((prev) => ({
      ...prev,
      activities: updatedActivities,
    }));
  };
  const handleSubmit = async () => {
    // Your own validation
    if (eventState.title.length < 3) {
      return setErrorState("Min 3 letters");
    }

    try {
      scheduler.loading(true);

      /**Simulate remote data saving */
      const added_updated_event = await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         */
        setTimeout(() => {
          res({
            event_id: event ? event.event_id : Math.random(),
            title: eventState.title,
            start: scheduler.eventState.start.value,
            end: scheduler.eventState.end.value,
            description: eventState.description,
          });
        }, 3000);
      });

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };

  useEffect(() => {
    if (isMount) return;
    console.log(eventState);
  }, [eventState]);

  return (
    <Fragment>
      <MemberChooserModal
        open={selectModalVisible}
        setOpen={setSelectModalVisible}
        setMember={setSelectedMember}
      />

      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            required
            id="title"
            label={t?.fields?.title}
            value={eventState.title}
            onChange={handleChange}
            sx={{ width: "70%" }}
          />
          <TextField
            readOnly
            id="planID"
            label={t?.fields?.plan_ID}
            value={`# ${eventState.event_id}`}
            sx={{ width: "30%" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            required
            readOnly
            id="member"
            label={t?.fields?.member}
            value={`${eventState.member.firstName} ${eventState.member.lastName} (#${eventState.member.memberID})`}
            sx={{ width: "70%" }}
          />
          <Button
            variant="contained"
            endIcon={<PersonSearchIcon />}
            onClick={() => setSelectModalVisible(true)}
            sx={{ width: "30%" }}
          >
            {t?.buttons?.change_member}
          </Button>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              // required
              label={t?.fields?.starts_at}
              viewRenderers={noTime}
              value={eventState.start}
              onChange={(date) => {
                setEventState((prev) => ({
                  ...prev,
                  start: date,
                }));
              }}
            />
            <DateTimePicker
              // required
              label={t?.fields?.ends_at}
              viewRenderers={noTime}
              value={eventState.end}
              onChange={(date) => {
                setEventState((prev) => ({
                  ...prev,
                  end: date,
                }));
              }}
            />
          </LocalizationProvider>
        </Box>
        <TextField
          readOnly
          id="comment"
          multiline={true}
          rows={5}
          label={t?.fields?.comment}
          value={eventState.comment}
          onChange={handleChange}
        />
        <List
          subheader={
            <ListSubheader component="div">{`${t?.fields?.activities} *`}</ListSubheader>
          }
        >
          {eventState.activities?.length > 0
            ? eventState.activities?.map((activity) => (
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => handleRemoveActivity(activity.activityID)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FitnessCenterIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.exercise.name}
                    secondary={`${activity.sets} ${t?.fields?.sets} x ${activity.reps} ${t?.fields?.reps}`}
                  />
                </ListItem>
              ))
            : t?.fields?.no_activities}
        </List>
        <Button
          endIcon={
            eventState.activities?.length > 0 ? (
              <EditCalendarIcon />
            ) : (
              <PostAddIcon />
            )
          }
          onClick={handleEditActivities}
        >
          {eventState.activities?.length > 0
            ? t?.buttons?.edit_activities
            : "ADD ACTIVITIES"}
        </Button>
      </Box>
      <DialogActions>
        <Button endIcon={<ClearIcon />} onClick={scheduler.close}>
          {t?.buttons?.cancel}
        </Button>
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          onClick={handleSubmit}
        >
          {t?.buttons?.confirm}
        </Button>
      </DialogActions>
    </Fragment>
  );
};

export default withTranslations(CustomEditor);

const noTime = {
  hours: null,
  minutes: null,
  seconds: null,
};
