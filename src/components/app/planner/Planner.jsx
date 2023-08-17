import { Fragment, useEffect, useState } from 'react';
import withTranslations from '../../../utils/HighOrderComponent';
import { Scheduler } from '@aldabil/react-scheduler';
import { monthConfig, weekConfig } from '../workout-plans/schedulerConfig';
import { enUS, srLatn } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux';
import * as plansActions from '../../../actions/plans';

const Planner = (props) => {
	const { t } = props || {};

	const { user } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(plansActions.fetchPlansByTrainerID(user.trainerID));
	}, [dispatch]);

	const events = [
		{
			event_id: 1,
			title: 'Event 1',
			start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
			end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
			disabled: true,
			admin_id: [1, 2, 3, 4],
		},
		{
			event_id: 2,
			title: 'Event 2',
			start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
			end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
			admin_id: 2,
			color: '#50b500',
		},
		{
			event_id: 3,
			title: 'Event 3',
			start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
			end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
			admin_id: 1,
			editable: false,
			deletable: false,
		},
		{
			event_id: 4,
			title: 'Event 4',
			start: new Date(
				new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
					new Date().getDate() - 2
				)
			),
			end: new Date(
				new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
					new Date().getDate() - 2
				)
			),
			admin_id: 2,
			color: '#900000',
		},
		{
			event_id: 5,
			title: 'Event 5',
			start: new Date(
				new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
					new Date().getDate() - 2
				)
			),
			end: new Date(
				new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
					new Date().getDate() - 2
				)
			),
			admin_id: 2,
			editable: true,
		},
		{
			event_id: 6,
			title: 'Event 6',
			start: new Date(
				new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
					new Date().getDate() - 4
				)
			),
			end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
			admin_id: 2,
		},
	];

	const handleDeleteEvent = async (deletedId) => {
		// Simulate http request: return the deleted id
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(deletedId);
			}, 3000);
		});
	};

	return (
		<Fragment>
			<Scheduler
				month={monthConfig}
				week={weekConfig}
				view='week'
				locale={
					sessionStorage.getItem('appLocale') === 'sr' ? srLatn : enUS // TODO: Needs to be optimized.
				}
				events={events}
				customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
				deleteable={true}
				editable={false}
				onDelete={handleDeleteEvent}
				translations={t?.planner}
			/>
		</Fragment>
	);
};

const CustomEditor = function ({ scheduler }) {
	scheduler.close();
};

export default withTranslations(Planner);
