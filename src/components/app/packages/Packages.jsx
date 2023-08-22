import { Fragment, useState } from "react";
import PackageRow from "./PackageRow";
import * as packagesActions from "../../../actions/package";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PaginationTable from "../../reusable/tables/PaginationTable";
import packageConfig from "./PackageConfig";
import AddPackage from "./AddPackage";
import withTranslations from "../../../utils/HighOrderComponent";
import PackagesTable from "./PackagesTable";

const rowComponentFunction = (row) => {
  return <PackageRow packageItem={row} key={Math.random()} />;
};

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

  return packagesDTO === undefined ? (
    <h1>{t?.messages?.noPackages}</h1>
  ) : (
    <Fragment>
      <PackagesTable
        style={{ width: "100%", height: "100%" }}
        config={packageConfig}
        rows={packages}
        rowComponent={rowComponentFunction}
      />
      <AddPackage />
    </Fragment>
  );
};

export default withTranslations(Packages);
