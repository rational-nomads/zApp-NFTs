//- React Imports
import { FC, useContext } from 'react';

//- Style Imports
import styles from './DAOSummary.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Context Imports
import { CreateDAOFormContext } from '../CreateDAOFormContext';

interface DAOSummaryProps {
	onClose: () => void;
}

export const DAOSummary: FC<DAOSummaryProps> = ({ onClose }) => {
	const { onLaunchSubmit } = useContext(CreateDAOFormContext);

	return (
		<div>
			<p>Enter summary content here...</p>
			<Wizard.Buttons
				className={styles.Footer}
				isPrimaryButtonActive
				isSecondaryButtonActive
				primaryButtonText="Confirm"
				onClickPrimaryButton={onLaunchSubmit}
				onClickSecondaryButton={onClose}
			/>
		</div>
	);
};
