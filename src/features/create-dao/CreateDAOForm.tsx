//- React Imports
import { FC } from 'react';

//- Style Imports
import styles from './CreateDAOForm.module.scss';

//- Component Imports
import { Wizard } from '@zero-tech/zui/components/Wizard/Wizard';
import { CreateDAOBody } from './CreateDAOBody';
import { CreateDAOHeader } from './CreateDAOHeader';
import { ConnectWallet } from '../ui/ConnectWallet';

// Lib Imports
import { useWeb3 } from '../../lib/hooks/useWeb3';

//- Context Imports
import { CreateDAOFormContextProvider } from './CreateDAOFormContext';

export type CreateDAOFormProps = {
	domainName: string;
	onClose: () => void;
};

export const CreateDAOForm: FC<CreateDAOFormProps> = ({
	domainName,
	onClose,
}) => {
	const { account } = useWeb3();

	const content = account ? (
		<CreateDAOFormContextProvider>
			<Wizard.Container className={styles.Container}>
				<CreateDAOHeader subtitle={domainName} onClose={onClose} />
				<CreateDAOBody onClose={onClose} />
			</Wizard.Container>
		</CreateDAOFormContextProvider>
	) : (
		<ConnectWallet message={'Connect your wallet to create a DAO.'} />
	);

	return content;
};
