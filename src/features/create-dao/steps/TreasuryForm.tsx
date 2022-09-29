//- React Imports
import { FC, useContext } from 'react';
import { Form, Formik } from 'formik';

//- Style Imports
import styles from './TreasuryForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Context Imports
import { CreateDAOFormContext } from '../CreateDAOFormContext';

interface TreasuryFormProps {
	onClose: () => void;
}

export const TreasuryForm: FC<TreasuryFormProps> = ({ onClose }) => {
	const { treasury, onTreasurySubmit } = useContext(CreateDAOFormContext);

	return (
		<Formik initialValues={treasury} onSubmit={onTreasurySubmit}>
			{({ submitForm }) => (
				<Form>
					<p>Enter treasury content here...</p>
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
