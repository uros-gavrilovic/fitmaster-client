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
  const { membersDTO } = useSelector((state) => state.membersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(membersActions.fetchMembersDTO());
  }, [dispatch]);

  return (
    <Fragment>
      {membersDTO === undefined ? (
        <h1>There are no available members.</h1>
      ) : (
        <PaginationTable
          config={config}
          rows={membersDTO}
          rowComponent={rowComponentFunction}
        />
      )}
    </Fragment>
  );
}
