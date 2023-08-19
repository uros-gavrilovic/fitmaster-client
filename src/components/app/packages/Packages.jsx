import { Fragment, useState } from "react";
import PackageRow from "./PackageRow";
import * as packagesActions from "../../../actions/package";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PaginationTable from "../../reusable/tables/PaginationTable";
import packageConfig from "./PackageConfig";
import AddPackage from "./AddPackage";
import withTranslations from "../../../utils/HighOrderComponent";

const rowComponentFunction = (t, row) => {
  return (
    <EnhancedPackageRow
      packageItem={row}
      key={Math.random()}
    ></EnhancedPackageRow>
  );
};
const EnhancedPackageRow = withTranslations(PackageRow, "PackageRow");
const EnhancedAddPackage = withTranslations(AddPackage, "AddPackage");

const Packages = (props) => {
  const { t } = props || {};
  const { packagesDTO } = useSelector((state) => state.packagesReducer);
  const [packages, setPackages] = useState(packagesDTO);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(packagesActions.fetchPackagesDTO());
  }, [dispatch]);

  useEffect(() => {
    setPackages(packagesDTO);
  }, [packagesDTO]);

  return (
    <Fragment>
      {packagesDTO === undefined ? (
        <h1>Currently, there are no packages.</h1>
      ) : (
        <Fragment>
          <PaginationTable
            style={{ width: "100%", height: "100%" }}
            config={packageConfig}
            rows={packages}
            rowComponent={rowComponentFunction}
          />
          <EnhancedAddPackage />
        </Fragment>
      )}
    </Fragment>
  );
};

export default withTranslations(Packages);
