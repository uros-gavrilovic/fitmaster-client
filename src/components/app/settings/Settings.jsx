import withTranslations from "../../../utils/HighOrderComponent";
import VerticalTabs from "./VerticalTabs";

const Settings = (props) => {
  const { t } = props || {};

  return <VerticalTabs t={t} />;
};

export default withTranslations(Settings);
