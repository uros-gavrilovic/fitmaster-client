import apiService from "../utils/apiService";
import { handleError } from "../utils/utilFunctions";
import { membersActivityPath } from "../constants/apiEndpoints";
import { statisticsActions } from "../reducers/statistics";

export const fetchMembersActivity = () => {
  return (dispatch) => {
    dispatch(statisticsActions.actionStart());
    return apiService
      .get(membersActivityPath())
      .then((response) => {
        dispatch(statisticsActions.fetchStatistics(response.data));
      })
      .catch((err) => {
        handleError(err, statisticsActions, dispatch, {
          title: "ERROR FETCHING STATISTICS",
          description: "An error has occured while fetching statistics.",
        });
        dispatch(statisticsActions.actionError(err?.response?.data));
      });
  };
};
