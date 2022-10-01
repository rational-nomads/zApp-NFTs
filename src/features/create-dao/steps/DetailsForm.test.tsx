//- React Imports
import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';

//- Component Imports
import { DetailsForm, DetailsFormProps } from './DetailsForm';
import { ZUIProvider } from '@zero-tech/zui/ZUIProvider';

//- Type Imports
import { CreateDAOFormContext } from '../CreateDAOFormContext';

let onSubmit = jest.fn();

const DEFAULT_PROPS: DetailsFormProps = {
	onClose: jest.fn()
};

const DEFAULT_PROVIDER_VALUES = {
    stepId: 'details',
	title: 'Create DAO',
	details: {
		mediaType: undefined,
		previewUrl: '',
		name: '',
		znaAddress: '',
		description: '',
	},
	governance: {
		votingProcess: '',
		votingPeriod: '',
		votingSystem: '',
		daoTokenAddress: '',
		votingThreshold: '',
	},
	treasury: {
		gnosisSafe: '',
	},
	onStepUpdate: jest.fn(),
	onTitleUpdate: jest.fn(),
	onDetailsSubmit: onSubmit,
	onGovernanceSubmit: jest.fn(),
	onTreasurySubmit: jest.fn(),
	onLaunchSubmit: jest.fn(),
}

const renderDetailsForm = (props = DEFAULT_PROPS, value = DEFAULT_PROVIDER_VALUES): void => {
    render(
        <ZUIProvider>
            <CreateDAOFormContext.Provider value={value}>
                <DetailsForm {...props} />
            </CreateDAOFormContext.Provider>
        </ZUIProvider>,
    );
}

describe('DetailsForm', () => {
	beforeEach(() => jest.resetAllMocks());

	test('should not fire onSubmit when next button clicked and field values are invalid', async () => {
		renderDetailsForm();

		fireEvent.click(screen.getByRole('button', {
			name: 'Next'
		}));

		await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
	});

	test('should fire onSubmit when next button clicked and field values are valid', async () => {
		renderDetailsForm(DEFAULT_PROPS, {
			...DEFAULT_PROVIDER_VALUES,
			details: {
				mediaType: undefined,
				previewUrl: '',
				name: 'Test',
				znaAddress: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B',
				description: 'Testing testing 123.',
			}
		})

		fireEvent.click(screen.getByRole('button', {
			name: 'Next'
		}));

		await waitFor(() => expect(onSubmit).toHaveBeenCalled());
	});
});