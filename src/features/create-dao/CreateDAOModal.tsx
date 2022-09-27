//- React Imports
import { FC } from 'react';

//- Component Imports
import { Modal } from '@zero-tech/zui/components';
import { CreateDAO } from './CreateDAO';

//- Lib Imports
import { BasicModalProps } from '../../lib/types/ui';

export interface CreateDAOModalProps extends BasicModalProps {}

export const CreateDAOModal: FC<CreateDAOModalProps> = ({ ...modalProps }) => (
	<Modal {...modalProps}>
		<CreateDAO />
	</Modal>
);
