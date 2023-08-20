import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as trainersActions from "../../../actions/trainers";
import withTranslations from "../../../utils/HighOrderComponent";
import TrainerRow from "./TrainerRow";
import TrainersTable from "./TrainersTable";
import trainersConfig from "./trainersConfig";

const Trainers = (props) => {
  const { t } = props || {};

  const dispatch = useDispatch();
  const { trainersDTO } = useSelector((state) => state.trainersReducer);
  const [trainersDTOState, setTrainersDTOState] = useState([]);

  useEffect(() => {
    dispatch(trainersActions.getTrainersDTO());
  }, [dispatch]);
  useEffect(() => {
    setTrainersDTOState(trainersDTO);
  }, [trainersDTO]);

  useEffect(() => {
    console.log(trainersDTOState);
  }, [trainersDTOState]);

  return (
    <Fragment>
      <TrainersTable
        style={{ width: "100%", height: "100%" }}
        config={trainersConfig}
        rows={trainersDTO}
        rowComponent={rowComponentFunction}
      />
    </Fragment>
  );
};

export default withTranslations(Trainers);

const rowComponentFunction = (row) => {
  return <TrainerRow trainer={row} key={row.trainerID} />;
};
