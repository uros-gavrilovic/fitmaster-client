import { Fragment } from 'react';
import withTranslations from '../../../utils/HighOrderComponent';
import { Scheduler } from '@aldabil/react-scheduler';
import { monthConfig, weekConfig } from '../workout-plans/schedulerConfig';
import { enUS, srLatn } from 'date-fns/locale';

const Planner = (props) => {
	const { t } = props || {};

	return (
		<Fragment>
			<Scheduler
				month={monthConfig}
				week={weekConfig}
				view='week'
				locale={
					sessionStorage.getItem('appLocale') === 'sr' ? srLatn : enUS // TODO: Needs to be optimized.
				}
				// onConfirm={handleAddEvent}
				// onDelete={handleDeleteEvent}
				translations={t?.planner}
			/>
		</Fragment>
	);
};

export default withTranslations(Planner);
