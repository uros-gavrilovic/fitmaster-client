import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { useState } from 'react';
import IconTextField from '../reusable/inputFields/IconTextField';
import { validateField } from '../../utils/utilFunctions';
import { useDispatch } from 'react-redux';
import * as userActions from '../../actions/user';
import { Box } from '@mui/material';
import Logo from '../reusable/Logo';
import IconButton from '../reusable/buttons/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginTab(props) {
	const { t, handleTabChange } = props || {};

	const dispatch = useDispatch();
	const [loginState, setLoginState] = useState({
		username: '',
		password: '',
	});
	const [loginErrorState, setLoginErrorState] = useState({
		username: false,
		password: false,
	});

	const handleLogIn = () => {
		const hasUsernameError = validateField(
			loginState.username,
			'username',
			setLoginErrorState
		);
		const hasPasswordError = validateField(
			loginState.password,
			'password',
			setLoginErrorState
		);
		if (hasUsernameError || hasPasswordError) return;
		dispatch(
			userActions.login(
				{
					username: loginState.username,
					password: loginState.password,
				},
				t?.messages
			)
		);
	};

	return (
		<Box id='login-container' className='center container dark-container'>
			<Logo />
			<h3>{t?.titleLogIn}</h3>
			<IconTextField
				id='username'
				title={t?.input?.username}
				icon={
					<AccountCircle style={{ color: 'white' }} sx={{ mr: 1, my: 0.5 }} />
				}
				required
				error={loginErrorState.username}
				onChange={(e) =>
					setLoginState({
						...loginState,
						[e.target.id]: e.target.value,
					})
				}
			/>
			<IconTextField
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
				required
				error={loginErrorState.password}
				onChange={(e) =>
					setLoginState({
						...loginState,
						[e.target.id]: e.target.value,
					})
				}
			/>

			<div
				style={{
					marginTop: '5vh',
					display: 'grid',
					width: 'auto',
					gridTemplateColumns: '1fr 1fr',
				}}
			>
				<IconButton
					title={t?.buttons?.btnRegister}
					leftIcon={<KeyboardDoubleArrowLeftIcon style={{ color: 'white' }} />}
					variant='outlined'
					style={{ width: '100%' }}
					onClick={handleTabChange}
				/>
				<IconButton
					title={t?.buttons?.btnLogIn}
					rightIcon={<LoginIcon style={{ color: 'white' }} />}
					variant='contained'
					style={{ width: '100%' }}
					onClick={handleLogIn}
				/>
			</div>
		</Box>
	);
}
