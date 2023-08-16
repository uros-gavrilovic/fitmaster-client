import { Box } from '@mui/material';

export const GoodStatus = (props) => {
	return (
		<Box
			sx={{
				height: 'auto',
				width: 'auto',
				color: 'rgb(17, 141, 87)',
				backgroundColor: 'rgb(219, 246, 229)',
				borderRadius: '5px',
				padding: '0.7ch',
			}}
			{...props}
		></Box>
	);
};
export const NeutralStatus = (props) => {
	return (
		<Box
			sx={{
				height: 'auto',
				width: 'auto',
				color: 'rgb(183, 110, 0)',
				backgroundColor: 'rgb(255,241,214)',
				borderRadius: '5px',
				padding: '0.7ch',
			}}
			{...props}
		></Box>
	);
};
export const BadStatus = (props) => {
	return (
		<Box
			sx={{
				height: 'auto',
				width: 'auto',
				color: 'rgb(183, 29, 24)',
				backgroundColor: 'rgb(255, 228, 222)',
				borderRadius: '5px',
				padding: '0.7ch',
			}}
			{...props}
		></Box>
	);
};
