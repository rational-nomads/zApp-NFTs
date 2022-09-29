//- React Imports
import { FC, useContext } from 'react';
import { Form, Formik } from 'formik';

//- Style Imports
import styles from './GovernanceForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Context Imports
import { CreateDAOFormContext } from '../CreateDAOFormContext';

interface GovernanceFormProps {
	onClose: () => void;
}

export const GovernanceForm: FC<GovernanceFormProps> = ({ onClose }) => {
	const { governance, onGovernanceSubmit } = useContext(CreateDAOFormContext);

	return (
		<Formik initialValues={governance} onSubmit={onGovernanceSubmit}>
			{({ submitForm }) => (
				<Form>
					<p>Enter governance content here...</p>
					<Wizard.Buttons
						className={styles.Footer}
						isPrimaryButtonActive
						isSecondaryButtonActive
						primaryButtonText="Next"
						onClickPrimaryButton={submitForm}
						onClickSecondaryButton={onClose}
					/>
				</Form>
			)}
		</Formik>
	);
};
