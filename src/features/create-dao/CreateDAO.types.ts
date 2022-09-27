import { MediaType } from '@zero-tech/zui/components/MediaInput';

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
