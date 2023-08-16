import withTranslations from '../../../utils/HighOrderComponent';
import CustomModal from '../../reusable/modals/CustomModal';

const TrainerChooserModal = (props) => {
	const { open, setOpen, t } = props || {};

	return (
		<CustomModal open={open} setOpen={setOpen}>
			Change Trainer
		</CustomModal>
	);
};

export default withTranslations(TrainerChooserModal);
