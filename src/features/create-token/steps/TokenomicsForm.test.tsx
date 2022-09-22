import React from 'react';

import { fireEvent, render, waitFor, screen } from '@testing-library/react';

import { ZUIProvider } from '@zero-tech/zui/ZUIProvider';
import { TokenomicsForm, TokenomicsFormProps } from './';
import { TokenomicsFormSubmit } from '../';

let onSubmit = jest.fn();

const DEFAULT_PROPS: TokenomicsFormProps = {
	values: {
		tokenCount: '',
		initialTokenSupplyWalletAddress: '',
		adminWalletAddress: '',
	},
	onSubmit,
	onClose: jest.fn(),
};

describe('<TokenomicsForm />', () => {
	beforeEach(() => jest.resetAllMocks());

	test('should not fire onSubmit when next button clicked and field values are invalid', async () => {
		render(
			<ZUIProvider>
				<TokenomicsForm {...DEFAULT_PROPS} />
			</ZUIProvider>,
		);

		fireEvent.click(
			screen.getByRole('button', {
				name: 'Next',
			}),
		);

		await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
	});

	test('should fire onSubmit when next button clicked and field values are valid', async () => {
		const values: TokenomicsFormSubmit = {
			tokenCount: '123',
			initialTokenSupplyWalletAddress:
				'0xb794f5ea0ba39494ce839613fffba74279579268',
			adminWalletAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
		};

		render(
			<ZUIProvider>
				<TokenomicsForm {...DEFAULT_PROPS} values={values} />
			</ZUIProvider>,
		);

		fireEvent.click(
			screen.getByRole('button', {
				name: 'Next',
			}),
		);

		await waitFor(() => expect(onSubmit).toHaveBeenCalled());
	});
});
