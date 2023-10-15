import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as membersActions from "../../../actions/members";
import membersConfig from "./membersConfig";
import MemberRow from "./MemberRow";
import IconTextField from "../../reusable/inputFields/IconTextField";
import SearchIcon from "@mui/icons-material/Search";
import withTranslations from "../../../utils/HighOrderComponent";
import MembersTable from "./MembersTable";
import Loading from "../../reusable/Loading";

const Members = (props) => {
  const { t } = props || {};

  const { membersDTO, loading } = useSelector((state) => state.membersReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(membersActions.fetchMembersDTO());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(membersActions.searchMembersDTO(e.target.value));
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
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
            rows={membersDTO}
            rowComponent={rowComponentFunction}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default withTranslations(Members);

const rowComponentFunction = (row) => {
  return <MemberRow member={row} key={row.memberID} />;
};
