import withTranslations from "../../../utils/HighOrderComponent";
import PaginationTable from "../../reusable/tables/PaginationTable";

const MembersTable = (props) => {
  const { t, ...otherProps } = props || {};

  return <PaginationTable t={t} {...otherProps} />;
};

export default withTranslations(MembersTable);
