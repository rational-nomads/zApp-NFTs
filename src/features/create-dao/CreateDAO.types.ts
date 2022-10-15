import {
	Step,
	ToggleOptions,
	MediaType,
	DropdownItem,
} from '@zero-tech/zui/components';

export const steps: Step[] = [
	{
		id: 'details',
		title: 'Details',
	},
	{
		id: 'governance',
		title: 'Governance',
	},
	{
		id: 'treasury',
		title: 'Treasury',
	},
	{
		id: 'launch',
		title: 'Launch',
	},
];

export const VOTING_PROCESS_OPTIONS: ToggleOptions = [
	{
		key: 'absolute',
		label: 'ABSOLUTE',
	},
	{
		key: 'majority',
		label: 'MAJORITY',
	},
];

export const getVotingPeriodItems = (setFieldValue: any): DropdownItem[] => [...Array(7)].map((_, i) => {
	const day = i + 1;
	const dayString = i === 0 ? "1 Day" : `${day} Days`

	return {
		id: day.toString(),
		label: dayString,
		onSelect: () => setFieldValue('votingPeriod', dayString)
	};
});

export const getVotingSystemItems = (setFieldValue: any): DropdownItem[] => [
	{
		id: 'snapshot',
		label: 'Snapshot',
		onSelect: (e: any) => setFieldValue('votingSystem', "Snapshot"),
	},
	{
		id: 'polygon',
		label: 'Polygon',
		onSelect: (e: any) => setFieldValue('votingSystem', "Polygon"),
	},
	{
		id: 'starkware',
		label: 'Starkware (coming soon)',
		onSelect: (e: any) => setFieldValue('votingSystem', "Starkware"),
	},
];

export interface DetailsFormSubmit {
	mediaType: MediaType | undefined;
	previewUrl: string;
	avatar?: Buffer;
	name: string;
	znaAddress: string;
	description: string;
}

export interface GovernanceFormSubmit {
	votingProcess: string;
	votingPeriod: string;
	votingSystem: string;
	daoTokenAddress: string;
	votingThreshold: string;
}

export interface TreasuryFormSubmit {
	gnosisSafe: string;
}
