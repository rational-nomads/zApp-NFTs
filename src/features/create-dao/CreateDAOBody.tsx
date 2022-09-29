//- React Imports
import React, { FC, useContext } from 'react';

//- Component Imports
import { DetailsForm } from './steps/DetailsForm';
import { GovernanceForm } from './steps/GovernanceForm';
import { TreasuryForm } from './steps/TreasuryForm';
import { DAOSummary } from './steps/DAOSummary';

//- Context Imports
import { CreateDAOFormContext } from './CreateDAOFormContext';

type CreateDAOBodyProps = {
	onClose: () => void;
};

export const CreateDAOBody: FC<CreateDAOBodyProps> = ({ onClose }) => {
	const { stepId } = useContext(CreateDAOFormContext);

	switch (stepId) {
		case 'details':
			return <DetailsForm onClose={onClose} />;
		case 'governance':
			return <GovernanceForm onClose={onClose} />;
		case 'treasury':
			return <TreasuryForm onClose={onClose} />;
		case 'launch':
			return <DAOSummary onClose={onClose} />;
	}
};
