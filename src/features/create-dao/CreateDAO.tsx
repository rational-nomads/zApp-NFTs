//- React Imports
import React, { FC, useState } from 'react';

//- Style Imports
import styles from './CreateDAO.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components/Wizard/Wizard';
import { CreateDAOBody } from './CreateDAOBody';
import { CreateDAOHeader } from './CreateDAOHeader';
import { ConnectWallet } from '../../features/ui/ConnectWallet';

// Lib Imports
import { useWeb3 } from '../../lib/hooks/useWeb3';

//- Type Imports
import { Step } from '@zero-tech/zui/components/StepBar/StepBar.types';
import { MediaType } from '@zero-tech/zui/components/MediaInput';

import {
	DetailsFormSubmit,
	GovernanceFormSubmit,
	TreasuryFormSubmit,
} from './CreateDAO.types';

const steps: Step[] = [
	{
		id: 'details',
		title: 'Details',
	},
	{
		id: 'governance',
		title: 'Governance',
	},
	{
		id: 'treasury',
		title: 'Treasury',
	},
	{
		id: 'launch',
		title: 'Launch',
	},
];

export type CreateDAOProps = {
	domainName: string;
	onClose: () => void;
};

export const CreateDAO: FC<CreateDAOProps> = ({ domainName, onClose }) => {
	const { account } = useWeb3();

	const [stepId, setStepId] = useState(steps[0].id);
	const [title, setTitle] = useState('Create DAO');

	const [details, setDetails] = useState<DetailsFormSubmit>({
		mediaType: undefined,
		previewUrl: '',
		avatar: null,
		name: '',
		znaAddress: '',
		description: '',
	});

	const [governance, setGovernance] = useState<GovernanceFormSubmit>({
		votingProcess: '',
		votingPeriod: '',
		votingSystem: '',
		daoTokenAddress: '',
		votingThreshold: '',
	});

	const [treasury, setTreasury] = useState<TreasuryFormSubmit>({
		gnosisSafe: '',
	});

	const handleDetailsSubmit = (values: DetailsFormSubmit): void => {
		setTitle(`Create "${values.name}" DAO`);
		setDetails(values);
		setStepId(steps[1].id);
	};

	const handleGovernanceSubmit = (values: GovernanceFormSubmit): void => {
		setGovernance(values);
		setStepId(steps[2].id);
	};

	const handleTreasurySubmit = (values: TreasuryFormSubmit): void => {
		setTreasury(values);
		setStepId(steps[3].id);
	};

	const handleMediaInputChange = (
		mediaType: MediaType,
		previewUrl: string,
		image: Buffer,
	): void => {
		setDetails({
			...details,
			mediaType: mediaType,
			previewUrl: previewUrl,
			avatar: image,
		});
	};

	const handleLaunchSubmit = (): void => {
		// TODO - wire up launch action once sdk integrated.
		onClose();
	};

	const content = account ? (
		<Wizard.Container className={styles.Container}>
			<CreateDAOHeader
				title={title}
				subtitle={domainName}
				stepId={stepId}
				steps={steps}
				onClose={onClose}
				onChangeStep={(step: Step) => setStepId(step.id)}
			/>
			<CreateDAOBody
				stepId={stepId}
				detailsFormValues={details}
				onDetailsSubmit={handleDetailsSubmit}
				governanceFormValues={governance}
				onGovernanceSubmit={handleGovernanceSubmit}
				treasuryFormValues={treasury}
				onTreasurySubmit={handleTreasurySubmit}
				onMediaInputChange={handleMediaInputChange}
				onLaunchSubmit={handleLaunchSubmit}
				onClose={onClose}
			/>
		</Wizard.Container>
		) : (
		<ConnectWallet message={'Connect your wallet to create a DAO.'} />
	);

	return content;
};
