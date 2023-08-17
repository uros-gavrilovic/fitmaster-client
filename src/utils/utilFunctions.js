import { createNotification } from '../utils/notificationService';
import { notificationType } from '../constants/globals';
import { appInfo } from '../constants/globals';

export function capitalizeFirstLetter(str, capitalizeEachWord = false) {
	if (typeof str !== 'string' || str.length === 0) {
		return str;
	}

	if (capitalizeEachWord) {
		return str
			.split(' ')
			.map((word) => capitalizeFirstLetter(word))
			.join(' ');
	} else {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
}

export function removeUnderscores(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return str;
	}

	return str.split('_').join(' ');
}

export function formatDate(arr) {
	if (!arr) return null;
	return `${arr[2]}/${arr[1]}/${arr[0]}`;
}

export function generateIDField(arr, fieldName) {
	// used to create another field called ID based on given fieldName
	// utilized in PaginationTable to keep it reusable by having every row have a same name field called ID
	// to create key attribute for each row

	return arr.map((element) => ({
		...element,
		id: element[fieldName],
	}));
}
export function isNumber(str, allowBlank = false) {
	if (allowBlank && str === '') return true;
	return /^\d+$/.test(str);
}

export function convertEmptyFieldsToNull(state) {
	return Object.fromEntries(
		Object.entries(state).map(([key, value]) => [
			key,
			typeof value === 'string' && value.trim() === '' ? null : value,
		])
	);
}

export function contains(obj, string, ignoreCase = false) {
	return obj.includes(string);
}

export function validateField(field, fieldName, setErrorState) {
	// Validates whetever field is empty or not.

	const error = !field;
	setErrorState((prevState) => ({ ...prevState, [fieldName]: error }));
	return error;
}

export function validatePlan(eventDetails, messages) {
	const requiredFields = [
		{ field: 'member', message: 'noMemberSelected' },
		{ field: 'trainer', message: 'noTrainerSelected' },
		{ field: 'dateTime', message: 'noDateTimeSelected' },
		{ field: 'exercises', message: 'noExerciseSelected' },
	];

	for (const { field, message } of requiredFields) {
		if (!eventDetails[field] || eventDetails[field].length === 0) {
			createNotification(
				notificationType.error,
				messages?.title,
				messages?.[message]
			);
			return false;
		}
	}

	return true;
}

export function handleError(error, actions, dispatch) {
	// Creates notification and dispatches error action.

	const messages = error.response.data;
	dispatch(actions.actionError(error?.response?.data));
	createNotification(
		notificationType.error,
		messages?.title,
		messages?.message
	);
}
export const boldTextParser = (text) => {
	// Used to parse text and make it bold (eg. MUI label tags)

	let i = 0;
	let renderables = [];
	let boldText = '';

	while (i < text.length) {
		if (text[i] === '<' && text[i + 1] === '<') {
			let isBoldTextFound = false;
			i += 2;
			while (!isBoldTextFound) {
				if (text[i] !== '>' || text[i + 1] !== '>') {
					boldText = boldText.concat(text[i]);
					i += 1;
				} else {
					isBoldTextFound = true;
					i += 2;
				}
			}

			renderables.push(<strong key={i}>{boldText}</strong>);
			boldText = '';
		} else {
			renderables.push(text[i]);
			i += 1;
		}
	}

	return renderables;
};

export const getTranslationFile = () => {
	// Returns translation file name

	const appName = sessionStorage.getItem('appName') || appInfo.name;
	const language =
		sessionStorage.getItem('appLocale') || appInfo.default_locale;
	return `${appName}_${language}`;
};
