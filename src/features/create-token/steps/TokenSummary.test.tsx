import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { ZUIProvider } from '@zero-tech/zui/ZUIProvider';
import { TokenSummary, TokenSummaryProps } from './';

let onSubmit = jest.fn();

const DEFAULT_PROPS: TokenSummaryProps = {
	mediaType: 'image',
	previewUrl: '',
	tokenName: '',
	symbol: '',
	totalSupply: '',
	initialTokenSupplyWalletAddress: '',
	adminAddress: '',
	onMediaInputChange: jest.fn(),
	onSubmit: onSubmit,
	onClose: jest.fn(),
};

describe('<TokenSummary />', () => {
	beforeEach(() => jest.resetAllMocks());

	test('should fire onSubmit on click of confirm button', async () => {
		render(
			<ZUIProvider>
				<TokenSummary {...DEFAULT_PROPS} />
			</ZUIProvider>,
		);

		fireEvent.click(
			screen.getByRole('button', {
				name: 'Confirm',
			}),
		);

		expect(onSubmit).toHaveBeenCalled();
	});
});
