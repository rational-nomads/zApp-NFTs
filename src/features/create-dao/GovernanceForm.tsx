//- React Imports
import { FC } from 'react';
import { Form, Formik } from 'formik';

//- Style Imports
import styles from './GovernanceForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Type Imports
import { GovernanceFormSubmit } from './CreateDAO.types';

interface GovernanceFormProps {
	values: GovernanceFormSubmit;
	onSubmit: (values: GovernanceFormSubmit) => void;
	onClose: () => void;
}

export const GovernanceForm: FC<GovernanceFormProps> = ({
	values,
	onSubmit,
	onClose,
}) => {
	return (
		<Formik initialValues={values} onSubmit={onSubmit}>
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
