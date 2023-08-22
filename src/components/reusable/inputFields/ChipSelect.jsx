import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState, Fragment } from 'react';
import {
	capitalizeFirstLetter,
	removeUnderscores,
} from '../../../utils/utilFunctions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(item, selectedItems, theme) {
	return {
		fontWeight:
			selectedItems.indexOf(item) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function CustomChipSelect(props) {
	let { title, items, selectedItems, setSelectedItems, ...otherProps } =
		props || {};

	const theme = useTheme();

	const handleChange = (event) => {
		const item = event.target.value;
		setSelectedItems(typeof item === 'string' ? item.split(',') : item);
	};

	return (
		<Fragment>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id='demo-multiple-chip-label'>{title}</InputLabel>
				<Select
					labelId='demo-multiple-chip-label'
					id='demo-multiple-chip'
					multiple
					value={selectedItems}
					onChange={handleChange}
					input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
					renderValue={(selected) => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{items?.map((item) => (
						<MenuItem
							key={item}
							value={item}
							style={getStyles(item, selectedItems, theme)}
						>
							{capitalizeFirstLetter(removeUnderscores(item), true)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Fragment>
	);
}
