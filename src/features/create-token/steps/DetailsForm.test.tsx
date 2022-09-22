import React from 'react';

import { fireEvent, render, waitFor, screen } from '@testing-library/react';

import { ZUIProvider } from '@zero-tech/zui/ZUIProvider';
import { DetailsForm, DetailsFormProps } from './';
import { DetailsFormSubmit } from '../';

let onSubmit = jest.fn();

const DEFAULT_PROPS: DetailsFormProps = {
	values : {
		mediaType: undefined,
		previewUrl: '',
		name: '',
		symbol: '',
	},
	onSubmit,
	onClose: jest.fn(),
};

describe('<DetailsForm />', () => {
	beforeEach(() => jest.resetAllMocks());

	test('should not fire onSubmit when next button clicked and field values are invalid', async () => {
		render(
			<ZUIProvider>
				<DetailsForm {...DEFAULT_PROPS} />
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
		const values: DetailsFormSubmit = {
			...DEFAULT_PROPS.values,
			name: 'Test',
			symbol: 'TEST',
		};

		render(
			<ZUIProvider>
				<DetailsForm {...DEFAULT_PROPS} values={values} />
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
