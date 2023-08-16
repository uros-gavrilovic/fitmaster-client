import { Fragment } from 'react';
import ExerciseTransferList from './ExerciseTransferList';
import { useDispatch, useSelector } from 'react-redux';
import * as exercisesActions from '../../../actions/exercises';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomStepper from '../../reusable/containers/CustomStepper';
import { Box, Divider } from '@mui/material';
import withTranslations from '../../../utils/HighOrderComponent';
import { Scheduler } from '@aldabil/react-scheduler';
import { monthConfig, weekConfig } from './schedulerConfig';
import { srLatn, enUS } from 'date-fns/locale';
import TrainerDetails from './TrainerDetails';
import MemberDetails from './MemberDetails';

const WorkoutPlans = (props) => {
	const { t } = props || {};

	const { user } = useSelector((state) => state.userReducer);
	const { membersDTO } = useSelector((state) => state.membersReducer); // TESTING
	const { exercisesDTO } = useSelector((state) => state.exercisesReducer);
	const [availableExercises, setAvailableExercises] = useState([]);
	const [chosenExercises, setChosenExercises] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [participants, setParticipants] = useState({
		member: membersDTO[0], // TESTING
		// member: null,
		trainer: user,
	});
	useEffect(() => {
		console.log(participants);
	}, [participants]);

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
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gridTemplateRows: '1fr',
							gap: '1rem',
						}}
					>
						<Box
							sx={{
								bgcolor: '#e0e0e0',
								borderRadius: '1rem',
								padding: '1rem',
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gridTemplateRows: '1fr',
								gap: '1rem',
							}}
						>
							<MemberDetails
								member={participants.member}
								setMember={(newMember) => {
									setParticipants((prevParticipants) => ({
										...prevParticipants,
										member: newMember,
									}));
								}}
							/>
							<TrainerDetails
								trainer={participants.trainer}
								setTrainer={(newTrainer) => {
									setParticipants((prevParticipants) => ({
										...prevParticipants,
										trainer: newTrainer,
									}));
								}}
							/>
						</Box>
						<Scheduler
							month={monthConfig}
							week={weekConfig}
							view='month'
							height='400' // TODO: Change to dynamic sizing
							events={[
								{
									event_id: 1,
									title: 'Event TEST',
									start: new Date('2023/4/8 10:00'),
									end: new Date('2023/4/8 11:00'),
								},
							]}
							locale={
								sessionStorage.getItem('appLocale') === 'sr' ? srLatn : enUS // TODO: Needs to be optimized.
							}
							translations={t?.scheduler}
						/>
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
