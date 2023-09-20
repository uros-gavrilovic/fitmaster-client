import { Fragment, useEffect, useState } from "react";
import withTranslations from "../../../utils/HighOrderComponent";
import { Scheduler } from "@aldabil/react-scheduler";
import { monthConfig, weekConfig } from "../workout-plans/schedulerConfig";
import { enUS, srLatn } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import * as plansActions from "../../../actions/plans";
import { useIsMount } from "../../../utils/customHooks/useIsMount";
import {
  formatDate,
  formatDateForScheduler,
} from "../../../utils/utilFunctions";
import Loading from "../../reusable/Loading";
import { Button, DialogActions, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PersonIcon from "@mui/icons-material/Person";
import IconTextField from "../../reusable/inputFields/IconTextField";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MemberChooserModal from "../workout-plans/MemberChooserModal";
import CustomViewer from "./CustomViewer";
import CustomEditor from "./CustomEditor";

const Planner = (props) => {
  const { t } = props || {};

  const dispatch = useDispatch();
  const isMount = useIsMount();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((eventState) => eventState.userReducer);
  const { plans, plan } = useSelector((eventState) => eventState.plansReducer);

  useEffect(() => {
    dispatch(plansActions.fetchPlansByTrainerID(user.trainerID));
  }, [dispatch]);
  useEffect(() => {
    if (isMount) return;

    setEvents(
      plans.map((plan) => ({
        event_id: plan.planID,
        title: `${plan.member.firstName} ${plan.member.lastName}`,
        start: formatDateForScheduler(plan.startsAt),
        end: formatDateForScheduler(plan.endsAt),
        // exercises: plan?.activities,
      }))
    );

    setIsLoading(false);
  }, [plans]);

  const handleDeleteEvent = async (deletedId) => {
    await dispatch(plansActions.deletePlan(deletedId));

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 500);
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Fragment>
      <Scheduler
        month={monthConfig}
        week={weekConfig}
        view="week"
        locale={
          sessionStorage.getItem("appLocale") === "sr" ? srLatn : enUS // TODO: Needs to be optimized.
        }
        events={events}
        customEditor={(scheduler) => {
          if (scheduler.edited) {
            return <CustomEditor scheduler={scheduler} t={t} />;
          } else {
            // TODO: To be implemented. Now it just doesn't open the editor in case event is not clicked on.
            scheduler.close();
            return null;
          }
        }}
        viewerExtraComponent={(fields, event) => {
          return <CustomViewer fields={fields} event={event} t={t} />;
        }}
        onEventClick={async (event) =>
          await dispatch(plansActions.fetchPlan(event.event_id))
        }
        deleteable={true}
        editable={true}
        onDelete={handleDeleteEvent}
        translations={t?.planner}
      />
    </Fragment>
  );
};

export default withTranslations(Planner);
