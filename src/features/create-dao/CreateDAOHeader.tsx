//- React Imports
import { FC, useContext } from 'react';

//- Style Imports
import styles from './CreateDAOHeader.module.scss';

//- Component Imports
import { IconCross } from '@zero-tech/zui/components/Icons';
import { StepBar } from '@zero-tech/zui/components/StepBar/StepBar';
import { Wizard } from '@zero-tech/zui/components/Wizard/Wizard';

//- Context Imports
import { CreateDAOFormContext } from './CreateDAOFormContext';

//- Type Imports
import { steps } from './CreateDAO.types';

interface CreateTokenHeaderProps {
	subtitle: string;
	onClose: () => void;
}

export const CreateDAOHeader: FC<CreateTokenHeaderProps> = ({
	subtitle,
	onClose,
}) => {
	const { title, stepId, onStepUpdate } = useContext(CreateDAOFormContext);

	return (
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
					onChangeStep={onStepUpdate}
				/>
			</Wizard.Header>
		</div>
	);
};
