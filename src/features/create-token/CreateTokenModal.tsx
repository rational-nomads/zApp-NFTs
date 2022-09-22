import { FC, useState } from 'react';

import { BasicModalProps } from '../../lib/types/ui';

import { Modal } from '@zero-tech/zui/components';
import { CreateTokenForm } from './';

export interface CreateTokenModalProps extends BasicModalProps {
	domainName: string;
}

export const CreateTokenModal: FC<CreateTokenModalProps> = ({
	domainName,
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = (): void => {
		setIsOpen(false);
	};

	const handleOpenChange = (open: boolean): void => {
		if (!open) return;
		setIsOpen(true);
	};

	return (
		<Modal {...props} open={isOpen} onOpenChange={handleOpenChange}>
			<CreateTokenForm domainName={domainName} onClose={handleClose} />
		</Modal>
	);
};
