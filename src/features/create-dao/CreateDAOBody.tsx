//- React Imports
import React, { FC } from 'react';

//- Component Imports
import { DetailsForm } from './DetailsForm';
import { GovernanceForm } from './GovernanceForm';
import { TreasuryForm } from './TreasuryForm';
import { DAOSummary } from './DAOSummary';

//- Type Imports
import {
	DetailsFormSubmit,
	GovernanceFormSubmit,
	TreasuryFormSubmit,
} from './CreateDAO.types';

import { MediaType } from '@zero-tech/zui/components/MediaInput';

type CreateDAOBodyProps = {
	stepId: string;
	detailsFormValues: DetailsFormSubmit;
	onDetailsSubmit: (values: DetailsFormSubmit) => void;
	governanceFormValues: GovernanceFormSubmit;
	onGovernanceSubmit: (values: GovernanceFormSubmit) => void;
	treasuryFormValues: TreasuryFormSubmit;
	onTreasurySubmit: (values: TreasuryFormSubmit) => void;
	onMediaInputChange: (
		mediaType: MediaType,
		previewUrl: string,
		image: Buffer,
	) => void;
	onLaunchSubmit: () => void;
	onClose: () => void;
};

export const CreateDAOBody: FC<CreateDAOBodyProps> = ({
	stepId,
	detailsFormValues,
	onDetailsSubmit,
	governanceFormValues,
	onGovernanceSubmit,
	treasuryFormValues,
	onTreasurySubmit,
	onMediaInputChange,
	onLaunchSubmit,
	onClose,
}) => {
	switch (stepId) {
		case 'details':
			return (
				<DetailsForm
					values={detailsFormValues}
					onSubmit={onDetailsSubmit}
					onClose={onClose}
				/>
			);
		case 'governance':
			return (
				<GovernanceForm
					values={governanceFormValues}
					onSubmit={onGovernanceSubmit}
					onClose={onClose}
				/>
			);
		case 'treasury':
			return (
				<TreasuryForm
					values={treasuryFormValues}
					onSubmit={onTreasurySubmit}
					onClose={onClose}
				/>
			);
		case 'launch':
			return (
				<DAOSummary
					onMediaInputChange={onMediaInputChange}
					onSubmit={onLaunchSubmit}
					onClose={onClose}
				/>
			);
	}
};
