//- Library Imports
import { DomainMetadata } from '@zero-tech/zns-sdk/lib/types';

//- Types Imports
import { Metadata } from '../../types/metadata';

export const parseDomainMetadata = (
	domainMetadata: DomainMetadata,
): Metadata => {
	return {
		attributes: domainMetadata.attributes,
		title: domainMetadata.name || domainMetadata.title,
		description: domainMetadata.description,
		image: domainMetadata.image,
		image_full: domainMetadata.image_full,
		previewImage: domainMetadata.previewImage,
		animation_url: domainMetadata.animation_url,
		stakingRequests:
			domainMetadata.stakingRequests || domainMetadata.stakingrequests,
		isBiddable:
			domainMetadata.isBiddable === undefined ||
			Boolean(domainMetadata.isBiddable),
		isMintable: Boolean(domainMetadata.isMintable),
		gridViewByDefault:
			domainMetadata.gridViewByDefault === undefined ||
			Boolean(domainMetadata.gridViewByDefault),
		customDomainHeader: Boolean(domainMetadata.customDomainHeader),
		customDomainHeaderValue: domainMetadata.customDomainHeaderValue,
	} as Metadata;
};
