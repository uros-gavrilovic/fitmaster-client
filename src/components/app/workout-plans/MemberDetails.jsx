import { Fragment } from 'react';
import withTranslations from '../../../utils/HighOrderComponent';
import { Avatar, Box, TextField } from '@mui/material';
import IconLabelButtons from '../../reusable/buttons/IconButton';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const MemberDetails = (props) => {
	const { member, setMember, t } = props;

	return (
		<div>
			{member === null ? (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						border: '2px dashed #000',
						borderRadius: '1rem',
						padding: '1rem',
						height: '100%',
					}}
				>
					<Avatar sx={{ width: '5rem', height: '5rem' }}>
						<QuestionMarkIcon />
					</Avatar>
					<center>
						<p>NO MEMBER HAS BEEN SELECTED</p>
					</center>
					<IconLabelButtons
						title={'CHOOSE MEMBER'}
						rightIcon={<SwitchAccountIcon style={{ color: 'white' }} />}
						variant='contained'
						style={{ width: '100%' }}
						// onClick={handleLogIn}
					/>
				</Box>
			) : (
				<Fragment>
					<Box>
						<Avatar src={member?.image} sx={{ width: '5rem', height: '5rem' }}>
							{member?.firstName[0] + member?.lastName[0]}
						</Avatar>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<TextField
							id='firstName'
							label='FIRST NAME'
							variant='outlined'
							value={member?.firstName}
							InputProps={{
								readOnly: true,
							}}
						/>
						<TextField
							id='lastName'
							label='LAST NAME'
							variant='outlined'
							value={member?.lastName}
							InputProps={{
								readOnly: true,
							}}
						/>
						<TextField
							id='memberID'
							label='ID'
							variant='outlined'
							value={member?.memberID}
							InputProps={{
								readOnly: true,
							}}
						/>
						<IconLabelButtons
							title={'CHANGE TRAINER'}
							rightIcon={<SwitchAccountIcon style={{ color: 'white' }} />}
							variant='contained'
							style={{ width: '100%' }}
							// onClick={handleChangeMember}
						/>
					</Box>
				</Fragment>
			)}
		</div>
	);
};

export default withTranslations(MemberDetails);
