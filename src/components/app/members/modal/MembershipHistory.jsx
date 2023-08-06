import { Fragment } from "react";
import BorderedSection from "../../../reusable/containers/BorderedSection";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PaginationTable from "../../../reusable/tables/PaginationTable";
import membershipConfig from "../membershipConfig";
import MembershipRow from "../MembershipRow";

export default function MembershipHistory(props) {
  const { newMemberState, setNewMemberState } = props || {};

  const rowComponentFunction = (t, row) => {
    return <MembershipRow membership={row} />;
  };

  return (
    <BorderedSection icon={ManageSearchIcon} title="Membership History">
      {newMemberState?.memberships?.length ? (
        <PaginationTable
          // t={t}
          config={membershipConfig}
          rows={newMemberState?.memberships}
          rowComponent={rowComponentFunction}
        />
      ) : (
        <Fragment>No memberships available</Fragment>
      )}
    </BorderedSection>
  );
}
