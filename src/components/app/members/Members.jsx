import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import PaginationTable from "../../reusable/tables/PaginationTable";
import config from "./membersConfig";
import MembersRow from "./MembersRow";

const rowComponentFunction = (t, row) => {
  return <MembersRow member={row} id={row.id} />;
};

export default function Members(props) {
  const { members } = useSelector((state) => state.membersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(membersActions.fetchDTOMembers());
    console.log(members);
  }, [dispatch]);
  useEffect(() => {
    console.log(members);
  }, [members]);

  return (
    <Fragment>
      <h1>This is Members.</h1>
      <PaginationTable
        config={config}
        rows={members}
        rowComponent={rowComponentFunction}
      />
    </Fragment>
  );
}
