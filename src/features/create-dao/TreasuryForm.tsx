//- React Imports
import { FC } from 'react';
import { Form, Formik } from 'formik';

//- Style Imports
import styles from './TreasuryForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Type Imports
import { TreasuryFormSubmit } from './CreateDAO.types';

interface TreasuryFormProps {
	values: TreasuryFormSubmit;
	onSubmit: (values: TreasuryFormSubmit) => void;
	onClose: () => void;
}

export const TreasuryForm: FC<TreasuryFormProps> = ({
	values,
	onSubmit,
	onClose,
}) => {
	return (
		<Formik initialValues={values} onSubmit={onSubmit}>
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
