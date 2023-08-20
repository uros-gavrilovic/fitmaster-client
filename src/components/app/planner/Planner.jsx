import { Fragment, useEffect, useState } from "react";
import withTranslations from "../../../utils/HighOrderComponent";
import { Scheduler } from "@aldabil/react-scheduler";
import { monthConfig, weekConfig } from "../workout-plans/schedulerConfig";
import { enUS, srLatn } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import * as plansActions from "../../../actions/plans";
import { useIsMount } from "../../../utils/customHooks/useIsMount";
import { formatDateForScheduler } from "../../../utils/utilFunctions";
import Loading from "../../reusable/Loading";

const Planner = (props) => {
  const { t } = props || {};

  const dispatch = useDispatch();
  const isMount = useIsMount();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.userReducer);
  const { plans } = useSelector((state) => state.plansReducer);
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
      }))
    );

    setIsLoading(false);
  }, [plans]);

  const handleDeleteEvent = async (deletedId) => {
    await dispatch(plansActions.deletePlan(deletedId));

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
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
        customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
        deleteable={true}
        editable={false}
        onDelete={handleDeleteEvent}
        translations={t?.planner}
      />
    </Fragment>
  );
};

const CustomEditor = function ({ scheduler }) {
  scheduler.close();
};

export default withTranslations(Planner);
