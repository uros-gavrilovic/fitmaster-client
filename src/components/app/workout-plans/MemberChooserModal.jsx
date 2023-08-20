import { useEffect } from "react";
import withTranslations from "../../../utils/HighOrderComponent";
import CustomModal from "../../reusable/modals/CustomModal";
import MemberRow from "../members/MemberRow";
import * as membersActions from "../../../actions/members";
import { useDispatch, useSelector } from "react-redux";
import membersConfig from "../members/membersConfig";
import PaginationTable from "../../reusable/tables/PaginationTable";
import MembersTable from "../members/MembersTable";

const MemberChooserModal = (props) => {
  const { open, setOpen, t, setMember } = props || {};

  const dispatch = useDispatch();
  const { membersDTO } = useSelector((state) => state.membersReducer);
  useEffect(() => {
    if (open) dispatch(membersActions.fetchMembersDTO());
  }, [open]);

  const rowComponentFunction = (row) => {
    return (
      <MemberRow
        member={row}
        key={row.memberID}
        selectVersion={true}
        selectMember={setMember}
        setSelectModalOpen={setOpen}
      />
    );
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <MembersTable
        style={{ width: "100%", height: "100%" }}
        config={membersConfig(true)}
        rows={membersDTO}
        rowComponent={rowComponentFunction}
      />
    </CustomModal>
  );
};

export default withTranslations(MemberChooserModal);
