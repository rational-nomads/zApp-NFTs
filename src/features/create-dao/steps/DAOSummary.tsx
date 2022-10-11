import { FC, useContext, useState } from 'react';

import { Wizard } from '@zero-tech/zui/components';
import { MediaInput, MediaType } from '@zero-tech/zui/components/MediaInput';
import { CreateDAOFormContext } from '../';
import { DAOSummaryField } from './';

import styles from './DAOSummary.module.scss';
import { truncateAddress } from 'lib/util/domains/domains';

export interface DAOSummaryProps {
	onClose: () => void;
}

export const DAOSummary: FC<DAOSummaryProps> = ({ onClose }) => {
	const { details, governance, treasury, onLaunchSubmit, onDetailsChange } = useContext(CreateDAOFormContext);

	const [avatarHasError, setAvatarHasError] = useState(false);

	const onSubmit = async (): Promise<void> => {
		await onLaunchSubmit();
		onClose();
	};

	const onAvatarChange = (
		mediaType: MediaType,
		previewUrl: string,
		image: Buffer,
	): void => {
		setAvatarHasError(false);
		try {
			onDetailsChange({
				...details,
				mediaType: mediaType,
				previewUrl: previewUrl,
				avatar: image,
			});
		} catch (_) {
			setAvatarHasError(true);
		}
	};

	return (
		<div>
			<div className={styles.Row}>
				<div className={styles.Column}>
					<MediaInput
						className={styles.MediaInput}
						title="Upload token avatar..."
						subtitle="(Optional)"
						mediaType={details.mediaType}
						previewUrl={details.previewUrl}
						hasError={avatarHasError}
						onChange={onAvatarChange}
					/>
				</div>
				<div className={styles.Column}>
					<h2 className={styles.Heading}>Summary</h2>
					<div className={styles.Row}>
						<DAOSummaryField
							className={styles.Name}
							label="DAO Name"
							value={details.name}
						/>
						<DAOSummaryField label="zNA Address" value={details.znaAddress} />
					</div>
					<div className={styles.Row}>
						<DAOSummaryField
							label="Voting Process"
							value={governance.votingProcess}
						/>
						<DAOSummaryField
							label="Gnosis Safe"
							value={truncateAddress(treasury.gnosisSafe)}
						/>
					</div>
					<div className={styles.Row}>
						<DAOSummaryField
							className={styles.InitialTokenSupplyWalletAddress}
							label="VotingThreshold"
							value={governance.votingThreshold}
						/>
						<DAOSummaryField
							label="Voting Period"
							value={governance.votingPeriod}
						/>
					</div>
				</div>
			</div>
			<DAOSummaryField
				label="Description"
				value={details.description}
			/>
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
