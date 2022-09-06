//- React Imports
import { useQuery } from 'react-query';

//- Hooks Imports
import { useZnsSdk } from './useZnsSdk';

export const usePaymentTokenInfo = (token: string) => {
	const sdk = useZnsSdk();

	return useQuery(
		['domain-payment-token-info', token],
		async () => await sdk.zauction.getPaymentTokenInfo(token),
		{
			retry: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			enabled: Boolean(token),
		},
	);
};
