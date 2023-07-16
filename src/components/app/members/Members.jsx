import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { membersActions } from "../../../reducers/members";
import apiService from "../../../utils/apiService";
import { membersDTOPath } from "../../../constants/apiEndpoints";

export default function Members(props) {
  const { members } = useSelector((state) => state.membersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(membersActions.fetchDTOMembers());
  }, [dispatch]);
  apiService.get(membersDTOPath()).then((response) => {
    console.log(response);
  });

  return (
    <Fragment>
      <h1>This is Members.</h1>
    </Fragment>
  );
}
