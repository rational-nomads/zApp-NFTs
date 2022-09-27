//- React Imports
import React, { FC } from 'react';

//- Style Imports
import styles from './CreateDAOHeader.module.scss';

//- Component Imports
import { IconCross } from '@zero-tech/zui/components/Icons';
import { StepBar } from '@zero-tech/zui/components/StepBar/StepBar';
import { Step } from '@zero-tech/zui/components/StepBar/StepBar.types';
import { Wizard } from '@zero-tech/zui/components/Wizard/Wizard';

interface CreateTokenHeaderProps {
	title: string;
	subtitle: string;
	stepId: string;
	steps: Step[];
	onClose: () => void;
	onChangeStep: (step: Step) => void;
}

export const CreateDAOHeader: FC<CreateTokenHeaderProps> = ({
	title,
	subtitle,
	stepId,
	steps,
	onClose,
	onChangeStep,
}) => (
	<div className={styles.Container}>
		<Wizard.Header
			header={title}
			headerInfo="Create a decentralized autonomous organization for your domain. You can add members to your DAO where they can come together and be part of a community."
			subHeader={subtitle}
			sectionDivider={false}
		>
			<div className={styles.Close} onClick={onClose}>
				<IconCross size={24} />
			</div>
			<StepBar
				currentStepId={stepId}
				steps={steps}
				onChangeStep={onChangeStep}
			/>
		</Wizard.Header>
	</div>
);
