//- React Imports
import { FC } from 'react';

//- Component Imports
import { Modal } from '@zero-tech/zui/components';
import { CreateDAOForm } from './CreateDAOForm';

//- Lib Imports
import { BasicModalProps } from '../../lib/types/ui';

export interface CreateDAOModalProps extends BasicModalProps {}

// TODO - discuss with zer0 how to get domainName and manage close of modal.
export const CreateDAOModal: FC<CreateDAOModalProps> = ({ ...modalProps }) => (
	<Modal {...modalProps}>
		<CreateDAOForm domainName="0://create.dao" onClose={() => {}} />
	</Modal>
);
