import withTranslations from '../../../utils/HighOrderComponent';
import { Avatar, Box, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { StyledBadge } from '../../reusable/containers/CustomAccountMenu';
import IconButton from '../../reusable/buttons/IconButton';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { useState } from 'react';
import TrainerChooserModal from './TrainerChooserModal';

const ConditionalWrap = ({ condition, wrap, children }) =>
	condition ? wrap(children) : children;

const TrainerDetails = (props) => {
	const { trainer, t } = props || {};
	const { user } = useSelector((state) => state.userReducer);

	const [modalOpen, setModalOpen] = useState(false);

	const handleChangeTrainer = () => {
		setModalOpen(true);
	};

	return (
		<Box
			sx={{
				border: '2px solid transparent',
				borderRadius: '1rem',
				padding: '0.5rem',
			}}
		>
			<TrainerChooserModal open={modalOpen} setOpen={setModalOpen} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
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
					label={t?.fields?.firstName}
					variant='outlined'
					value={trainer.firstName}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id='lastName'
					label={t?.fields?.lastName}
					variant='outlined'
					value={trainer.lastName}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id='trainerID'
					label={t?.fields?.trainerID}
					variant='outlined'
					value={`#${trainer?.trainerID}`}
					InputProps={{
						readOnly: true,
					}}
				/>
				<IconButton
					title={t?.buttons?.btnChangeTrainer}
					rightIcon={<SwitchAccountIcon style={{ color: 'white' }} />}
					variant='contained'
					style={{ width: '100%' }}
					onClick={handleChangeTrainer}
				/>
			</Box>
		</Box>
	);
};

export default withTranslations(TrainerDetails);
