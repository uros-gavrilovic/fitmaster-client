import { Fragment } from 'react';
import ExerciseTransferList from './ExerciseTransferList';
import { useDispatch, useSelector } from 'react-redux';
import * as exercisesActions from '../../../actions/exercises';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomStepper from '../../reusable/containers/CustomStepper';
import { Box } from '@mui/material';
import withTranslations from '../../../utils/HighOrderComponent';

// import {
// 	Appointments,
// 	DayView,
// 	Scheduler,
// 	ViewState,
// } from '@devexpress/dx-react-scheduler';
// const currentDate = '2018-11-01';
// const schedulerData = [
// 	{
// 		startDate: '2018-11-01T09:45',
// 		endDate: '2018-11-01T11:00',
// 		title: 'Meeting',
// 	},
// 	{
// 		startDate: '2018-11-01T12:00',
// 		endDate: '2018-11-01T13:30',
// 		title: 'Go to a gym',
// 	},
// ];

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
						<h1>TODO: Implement member and scheduler</h1>
						{/* <Scheduler data={schedulerData}>
							<ViewState currentDate={currentDate} />
							<DayView startDayHour={9} endDayHour={14} />
							<Appointments />
						</Scheduler> */}
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
