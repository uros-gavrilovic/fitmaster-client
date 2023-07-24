import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import PaginationTable from "../../reusable/tables/PaginationTable";
import config from "./membersConfig";
import MemberRow from "./MemberRow";
import { generateIDField } from "../../../utils/utilFunctions";

const rowComponentFunction = (t, row) => {
  return <MemberRow member={row} key={row.id} />;
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
          rows={generateIDField(membersDTO)}
          rowComponent={rowComponentFunction}
        />
      )}
    </Fragment>
  );
}
