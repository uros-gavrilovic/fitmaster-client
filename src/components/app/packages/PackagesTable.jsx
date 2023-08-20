import withTranslations from "../../../utils/HighOrderComponent";
import PaginationTable from "../../reusable/tables/PaginationTable";

const PackagesTable = (props) => {
  const { t, ...otherProps } = props || {};

  return <PaginationTable t={t} {...otherProps} />;
};

export default withTranslations(PackagesTable);
