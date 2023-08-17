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
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '../../reusable/buttons/IconButton';
import * as plansActions from '../../../actions/plans';
import { validatePlan } from '../../../utils/utilFunctions';

const WorkoutPlans = (props) => {
	const { t } = props || {};

	const { user } = useSelector((state) => state.userReducer);
	const initialEventDetails = {
		member: null,
		trainer: user,
		dateTime: null,
		exercises: null,
	};

	const { exercisesDTO } = useSelector((state) => state.exercisesReducer);
	const [availableExercises, setAvailableExercises] = useState([]);
	const [chosenExercises, setChosenExercises] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [eventDetails, setEventDetails] = useState(initialEventDetails);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(exercisesActions.fetchExercisesDTO());
	}, [dispatch]);
	useEffect(() => {
		setAvailableExercises(exercisesDTO);
	}, [exercisesDTO]);

	const handleAddEvent = async (event, action) => {
		/**
		 * Make sure to return 4 mandatory fields:
		 * event_id: string|number
		 * title: string
		 * start: Date|string
		 * end: Date|string
		 * ....extra other fields depend on your custom fields/editor properties
		 */

		return new Promise((res, rej) => {
			if (action === 'edit') {
				/** PUT event to remote DB */
			} else if (action === 'create') {
				/** POST event to remote DB */
				setEventDetails((prevDetails) => ({
					...prevDetails,
					dateTime: event.start.toISOString(),
				}));
			}

			res({
				...event,
				event_id: event.event_id || Math.random(),
			});
		});
	};
	const handleDeleteEvent = async (deletedId) => {
		// // Simulate http request: return the deleted id
		// return new Promise((res, rej) => {
		// 	setTimeout(() => {
		// 		res(deletedId);
		// 	}, 3000);
		// });
	};
	const handleSavePlan = () => {
		if (!validatePlan(eventDetails, t?.messages)) return;

		dispatch(plansActions.addPlan(eventDetails, t?.messages));
		handleClear();
	};
	const handleClear = () => {
		setActiveIndex(0);
		setEventDetails(initialEventDetails);
	};

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
								member={eventDetails.member}
								setMember={(newMember) => {
									setEventDetails((prevParticipants) => ({
										...prevParticipants,
										member: newMember,
									}));
								}}
								t={t}
							/>
							<TrainerDetails trainer={eventDetails.trainer} t={t} />
						</Box>
						<Scheduler
							month={monthConfig}
							week={weekConfig}
							view='month'
							height='400' // TODO: Change to dynamic sizing
							locale={
								sessionStorage.getItem('appLocale') === 'sr' ? srLatn : enUS // TODO: Needs to be optimized.
							}
							onConfirm={handleAddEvent}
							onDelete={handleDeleteEvent}
							translations={t?.scheduler}
						/>
					</Box>,
					<ExerciseTransferList
						availableExercises={availableExercises}
						setAvailableExercises={setAvailableExercises}
						chosenExercises={chosenExercises}
						setChosenExercises={setChosenExercises}
						plan={eventDetails.exercises}
						setPlan={(newPlan) => {
							setEventDetails((previousDetails) => ({
								...previousDetails,
								exercises: newPlan,
							}));
						}}
						t={t?.plan}
					/>,
				]}
				steps={[t?.steps?.participantsInfo, t?.steps?.workoutPlan]}
				isOptional={[false, false]}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				finishStep={
					<IconButton
						title={t?.buttons?.btnSavePlan}
						leftIcon={<SaveIcon style={{ color: 'white' }} />}
						variant='contained'
						width='100%'
						onClick={handleSavePlan}
					/>
				}
				stepsFinishedMessage={'Svaka cast'}
			/>
		</Fragment>
	);
};

export default withTranslations(WorkoutPlans, 'WorkoutPlans');
