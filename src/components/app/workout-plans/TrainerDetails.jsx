import withTranslations from '../../../utils/HighOrderComponent';
import { Avatar, Box, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { StyledBadge } from '../../reusable/containers/CustomAccountMenu';
import IconButton from '../../reusable/buttons/IconButton';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

const ConditionalWrap = ({ condition, wrap, children }) =>
	condition ? wrap(children) : children;

const TrainerDetails = (props) => {
	const { trainer, t } = props || {};
	const { user } = useSelector((state) => state.userReducer);

	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '1rem',
					padding: '1rem',
				}}
			>
				<ConditionalWrap
					condition={user?.trainerID === trainer?.trainerID}
					wrap={(wrappedChildren) => (
						<StyledBadge
							overlap='circular'
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							variant='dot'
						>
							{wrappedChildren}
						</StyledBadge>
					)}
				>
					<Avatar src={trainer?.image} sx={{ width: '5rem', height: '5rem' }}>
						{trainer.firstName[0] + trainer.lastName[0]}
					</Avatar>
				</ConditionalWrap>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<TextField
					id='firstName'
					label='FIRST NAME'
					variant='outlined'
					value={trainer.firstName}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id='lastName'
					label='LAST NAME'
					variant='outlined'
					value={trainer.lastName}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id='trainerID'
					label='TRAINER ID'
					variant='outlined'
					value={`#${trainer?.trainerID}`}
					InputProps={{
						readOnly: true,
					}}
				/>
				<IconButton
					title={'CHANGE TRAINER'}
					rightIcon={<SwitchAccountIcon style={{ color: 'white' }} />}
					variant='contained'
					style={{ width: '100%' }}
					// onClick={handleChangeTrainer}
				/>
			</Box>
		</div>
	);
};

export default withTranslations(TrainerDetails);
