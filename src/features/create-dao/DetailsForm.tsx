//- React Imports
import { FC } from 'react';
import { Form, Formik } from 'formik';

//- Style Imports
import styles from './DetailsForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Type Imports
import { DetailsFormSubmit } from './CreateDAO.types';

interface DetailsFormProps {
	values: DetailsFormSubmit;
	onSubmit: (values: DetailsFormSubmit) => void;
	onClose: () => void;
}

export const DetailsForm: FC<DetailsFormProps> = ({
	values,
	onSubmit,
	onClose,
}) => {
	return (
		<Formik initialValues={values} onSubmit={onSubmit}>
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
