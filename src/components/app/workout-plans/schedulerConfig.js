import { srLatn, enUS } from 'date-fns/locale';

const generalConfig = {
	weekDays: [0, 1, 2, 3, 4, 5],
	weekStartOn: 1,
	startHour: 9,
	endHour: 17,
	navigation: true,
	disableGoToDay: false,
};
export const monthConfig = generalConfig;
export const weekConfig = generalConfig;

export const localeConfig = async () => {
	// TODO: Find out why locale={localeConfig} doesn't work for a WorkoutPlan component Scheduler.
	const activeLocale = sessionStorage.getItem('appLocale');

	let locale;
	if (activeLocale === 'sr') {
		// By default, 'sr' Cyrillic, so we need to set it to Latin.
		locale = srLatn;
	} else {
		try {
			locale = await import(`date-fns/locale/${activeLocale}`);
		} catch (error) {
			// Fallback to a default locale if loading the specified locale fails.
			locale = enUS;
		}
	}

	return locale;
};
