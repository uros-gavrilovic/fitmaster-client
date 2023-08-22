import ParticleBackground from '../backgrounds/ParticleBackground';
import { ThemeProvider, color, createTheme } from '@mui/system';
import theme from '../../utils/ThemeMUI';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomSlide from '../reusable/CustomSlide';
import '../../styles/container.css';
import '../../styles/login/login.css';
import withTranslations from '../../utils/HighOrderComponent';
import RegisterTab from './RegisterTab';
import LoginTab from './LoginTab';

const Login = (props) => {
	const { t } = props || {};

	const navigate = useNavigate();
	const [openLoginContainer, setOpenLoginContainer] = useState(true);
	const { token } = useSelector((state) => state.userReducer);

	const handleTabChange = () => {
		setOpenLoginContainer((prev) => !prev);
	};

	useEffect(() => {
		if (token !== undefined) {
			navigate('/dashboard');
		}
	}, [token]);

	return (
		<ThemeProvider theme={theme}>
			<ParticleBackground />

			<CustomSlide
				active={!openLoginContainer}
				setActive={setOpenLoginContainer}
				direction='right'
				container={
					<center>
						<RegisterTab t={t} handleTabChange={handleTabChange} />
					</center>
				}
			/>

			<CustomSlide
				active={openLoginContainer}
				setActive={setOpenLoginContainer}
				direction='left'
				container={
					<center>
						<LoginTab t={t} handleTabChange={handleTabChange} />
					</center>
				}
			/>
		</ThemeProvider>
	);
};

export default withTranslations(Login, 'Login');
