import { AccountCircle } from '@mui/icons-material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import AbcIcon from '@mui/icons-material/Abc';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Divider } from '@mui/material';
import Logo from '../reusable/Logo';
import IconTextField from '../reusable/inputFields/IconTextField';
import { useState } from 'react';
import {
	convertEmptyFieldsToNull,
	validateField,
} from '../../utils/utilFunctions';
import { useDispatch } from 'react-redux';
import IconButton from '../reusable/buttons/IconButton';
import * as trainerActions from '../../actions/trainers';
import CustomStepper from '../reusable/containers/CustomStepper';

const initialRegisterState = {
	username: '',
	password: '',
	firstName: '',
	lastName: '',
};

export default function RegisterTab(props) {
	const { t, handleTabChange } = props || {};

	const steps = [t?.subtitles?.generalInfo, t?.subtitles?.loginInfo];

	const dispatch = useDispatch();
	const [registerState, setRegisterState] = useState(initialRegisterState);
	const [registerErrorState, setRegisterErrorState] = useState({
		username: false,
		password: false,
		firstName: false,
		lastName: false,
	});
	const [activeIndex, setActiveIndex] = useState(0);

	const handleRegister = () => {
		const hasUsernameError = validateField(
			registerState.username,
			'username',
			setRegisterErrorState
		);
		const hasPasswordError = validateField(
			registerState.password,
			'password',
			setRegisterErrorState
		);
		const hasFirstNameError = validateField(
			registerState.firstName,
			'firstName',
			setRegisterErrorState
		);
		const hasLastNameError = validateField(
			registerState.lastName,
			'lastName',
			setRegisterErrorState
		);

		if (
			hasUsernameError ||
			hasPasswordError ||
			hasFirstNameError ||
			hasLastNameError
		)
			return;

		dispatch(
			trainerActions.addTrainer(
				convertEmptyFieldsToNull(registerState),
				t?.messages
			)
		);
		handleClear();
		setActiveIndex(steps.length); // sets active index to finish page in stepper
	};
	const handleClear = () => {
		setRegisterState(initialRegisterState);
	};

	return (
		<Box id='register-container' className='center container dark-container'>
			<Logo />
			<h3>{t?.titleRegister}</h3>

			<CustomStepper
				components={[
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<IconTextField
							required
							id='firstName'
							title={t?.input?.firstName}
							icon={
								<AbcIcon style={{ color: 'white' }} sx={{ mr: 1, my: 0.5 }} />
							}
							value={registerState?.firstName}
							error={registerErrorState.firstName}
							onChange={(e) =>
								setRegisterState({
									...registerState,
									[e.target.id]: e.target.value,
								})
							}
						/>
						<IconTextField
							required
							id='lastName'
							title={t?.input?.lastName}
							icon={
								<AbcIcon style={{ color: 'white' }} sx={{ mr: 1, my: 0.5 }} />
							}
							margin='dense'
							value={registerState?.lastName}
							error={registerErrorState.lastName}
							onChange={(e) =>
								setRegisterState({
									...registerState,
									[e.target.id]: e.target.value,
								})
							}
						/>
					</Box>,
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<IconTextField
							required
							id='username'
							title={t?.input?.username}
							icon={
								<AccountCircle
									style={{ color: 'white' }}
									sx={{ mr: 1, my: 0.5 }}
								/>
							}
							value={registerState?.username}
							error={registerErrorState.username}
							onChange={(e) =>
								setRegisterState({
									...registerState,
									[e.target.id]: e.target.value,
								})
							}
						/>
						<IconTextField
							required
							id='password'
							title={t?.input?.password}
							type='password'
							icon={
								<HttpsRoundedIcon
									style={{ color: 'white' }}
									sx={{ mr: 1, my: 0.5 }}
								/>
							}
							margin='dense'
							value={registerState?.password}
							error={registerErrorState.password}
							onChange={(e) =>
								setRegisterState({
									...registerState,
									[e.target.id]: e.target.value,
								})
							}
						/>
					</Box>,
				]}
				steps={steps}
				isOptional={[false, false]}
				finishStep={
					<IconButton
						title={t?.buttons?.btnRegister}
						leftIcon={<HowToRegIcon style={{ color: 'white' }} />}
						variant='contained'
						width='100%'
						onClick={handleRegister}
					/>
				}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				stepsFinishedMessage={t?.messages?.registerRequestSent}
				t={t?.buttons}
			/>
			<IconButton
				style={{ marginTop: '1rem', width: '100%' }}
				title={t?.buttons?.btnLogIn}
				rightIcon={<KeyboardDoubleArrowRightIcon style={{ color: 'white' }} />}
				variant='outlined'
				onClick={handleTabChange}
			/>
		</Box>
	);
}
