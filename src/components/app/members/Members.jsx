import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import PaginationTable from "../../reusable/tables/PaginationTable";
import membersConfig from "./membersConfig";
import MemberRow from "./MemberRow";
import IconTextField from "../../reusable/inputFields/IconTextField";
import SearchIcon from "@mui/icons-material/Search";
import withTranslations from "../../../utils/HighOrderComponent";
import MembersTable from "./MembersTable";

const rowComponentFunction = (row) => {
  return <MemberRow member={row} key={row.memberID} />;
};

const Members = (props) => {
  const { t } = props || {};

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
      {membersDTO.length === undefined ? (
        <h1>{t?.messages?.noMembers}</h1>
      ) : (
        <Fragment>
          <IconTextField
            id="search"
            title={t?.search}
            icon={<SearchIcon />}
            onChange={handleSearch}
            style={{ float: "right" }}
          />
          <MembersTable
            style={{ width: "100%", height: "100%" }}
            config={membersConfig()}
            rows={members}
            rowComponent={rowComponentFunction}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default withTranslations(Members);
