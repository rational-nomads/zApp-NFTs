//- React Imports
import { FC } from 'react';

//- Style Imports
import styles from './DAOSummary.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components';

//- Type Imports
import { MediaType } from '@zero-tech/zui/components/MediaInput';

interface DAOSummaryProps {
	onMediaInputChange: (
		mediaType: MediaType,
		previewUrl: string,
		image: Buffer,
	) => void;
	onSubmit: () => void;
	onClose: () => void;
}

export const DAOSummary: FC<DAOSummaryProps> = ({
	onMediaInputChange,
	onSubmit,
	onClose,
}) => {
	return (
		<div>
			<p>Enter summary content here...</p>
			<Wizard.Buttons
				className={styles.Footer}
				isPrimaryButtonActive
				isSecondaryButtonActive
				primaryButtonText="Confirm"
				onClickPrimaryButton={onSubmit}
				onClickSecondaryButton={onClose}
			/>
		</div>
	);
};
