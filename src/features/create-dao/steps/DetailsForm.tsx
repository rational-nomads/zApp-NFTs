//- React Imports
import { FC, useContext } from 'react';
import { Form, Formik } from 'formik';

//- Style Imports
import styles from './DetailsForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Context Imports
import { CreateDAOFormContext } from '../CreateDAOFormContext';

interface DetailsFormProps {
	onClose: () => void;
}

export const DetailsForm: FC<DetailsFormProps> = ({ onClose }) => {
	const { details, onDetailsSubmit } = useContext(CreateDAOFormContext);

	return (
		<Formik initialValues={details} onSubmit={onDetailsSubmit}>
			{({ submitForm }) => (
				<Form>
					<p>Enter details content here...</p>
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
