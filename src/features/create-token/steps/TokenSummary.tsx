import { FC, useContext } from 'react';

import { truncateAddress } from '../../../lib/util/domains/domains';

import { Wizard } from '@zero-tech/zui/components';
import { MediaInput, MediaType } from '@zero-tech/zui/components/MediaInput';
import { TokenSummaryField } from './';
import { CreateTokenFormContext } from '../';

import styles from './TokenSummary.module.scss';

export interface TokenSummaryProps {
	onClose: () => void;
}

export const TokenSummary: FC<TokenSummaryProps> = ({ onClose }) => {
	const { details, onDetailsChange, tokenomics, onLaunchSubmit } = useContext(
		CreateTokenFormContext,
	);

	const handleLaunchSubmit = () => {
		onLaunchSubmit();
		onClose();
	};

	const handleMediaInputChange = (
		mediaType: MediaType,
		previewUrl: string,
		image: Buffer,
	): void => {
		onDetailsChange({
			...details,
			mediaType: mediaType,
			previewUrl: previewUrl,
			avatar: image,
		});
	};

	return (
		<>
			<div className={styles.Row}>
				<div className={styles.Column}>
					<MediaInput
						className={styles.MediaInput}
						title="Upload token avatar..."
						subtitle="(Optional)"
						mediaType={details.mediaType}
						previewUrl={details.previewUrl}
						hasError={false}
						onChange={handleMediaInputChange}
					/>
				</div>
				<div className={styles.Column}>
					<h2 className={styles.Heading}>Summary</h2>
					<div className={styles.Row}>
						<TokenSummaryField
							className={styles.Name}
							label="Token Name"
							value={details.name}
						/>
						<TokenSummaryField label="Symbol" value={details.symbol} />
					</div>
					<TokenSummaryField
						label="Total Supply"
						value={tokenomics.tokenCount}
					/>
					<div className={styles.Row}>
						<TokenSummaryField
							className={styles.InitialTokenSupplyWalletAddress}
							label="Initial Wallet Address"
							value={truncateAddress(
								tokenomics.initialTokenSupplyWalletAddress,
							)}
						/>
						<TokenSummaryField
							label="Admin Address"
							value={truncateAddress(tokenomics.adminWalletAddress)}
						/>
					</div>
				</div>
			</div>
			<Wizard.Buttons
				className={styles.Footer}
				isPrimaryButtonActive
				isSecondaryButtonActive
				primaryButtonText="Confirm"
				onClickPrimaryButton={handleLaunchSubmit}
				onClickSecondaryButton={onClose}
			/>
		</>
	);
};
