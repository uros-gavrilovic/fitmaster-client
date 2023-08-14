import { Fragment } from 'react';
import ExerciseTransferList from './ExerciseTransferList';
import { useDispatch, useSelector } from 'react-redux';
import * as exercisesActions from '../../../actions/exercises';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomStepper from '../../reusable/containers/CustomStepper';
import { Box } from '@mui/material';
import withTranslations from '../../../utils/HighOrderComponent';

const WorkoutPlans = (props) => {
	const { t } = props || {};

	const { exercisesDTO } = useSelector((state) => state.exercisesReducer);
	const [availableExercises, setAvailableExercises] = useState([]);
	const [chosenExercises, setChosenExercises] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(exercisesActions.fetchExercisesDTO());
	}, [dispatch]);
	useEffect(() => {
		setAvailableExercises(exercisesDTO);
	}, [exercisesDTO]);

	return (
		<Fragment>
			<CustomStepper
				components={[
					<Box>
						<h2>TODO Member and Trainer info</h2>
					</Box>,
					<ExerciseTransferList
						availableExercises={availableExercises}
						setAvailableExercises={setAvailableExercises}
						chosenExercises={chosenExercises}
						setChosenExercises={setChosenExercises}
						t={t?.plan}
					/>,
				]}
				steps={[t?.steps?.participantsInfo, t?.steps?.workoutPlan]}
				isOptional={[false, false]}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				stepsFinishedMessage={'Svaka cast'}
			/>
		</Fragment>
	);
};

export default withTranslations(WorkoutPlans, 'WorkoutPlans');
