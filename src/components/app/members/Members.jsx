import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import PaginationTable from "../../reusable/tables/PaginationTable";
import config from "./membersConfig";
import MemberRow from "./MemberRow";
import { generateIDField } from "../../../utils/utilFunctions";
import IconTextField from "../../reusable/inputFields/IconTextField";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const rowComponentFunction = (t, row) => {
  return <MemberRow member={row} key={row.id} />;
};

export default function Members(props) {
  const { membersDTO } = useSelector((state) => state.membersReducer);
  const [members, setMembers] = useState(membersDTO);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(membersActions.fetchMembersDTO());
  }, [dispatch]);
  useEffect(() => {
    setMembers(membersDTO);
  }, [membersDTO]);

  const handleSearch = (e) => {
    dispatch(membersActions.searchMembersDTO(e.target.value));
  };

  return (
    <Fragment>
      {membersDTO === undefined ? (
        <h1>There are no available members.</h1>
      ) : (
        <Fragment>
          <IconTextField
            id="search"
            title="Search"
            icon={<SearchIcon />}
            onChange={handleSearch}
            style={{ float: "right" }}
          />
          <PaginationTable
            style={{ width: "100%", height: "100%" }}
            config={config}
            rows={generateIDField(members)}
            rowComponent={rowComponentFunction}
          />
        </Fragment>
      )}
    </Fragment>
  );
}
