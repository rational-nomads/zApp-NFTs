//- React Imports
import { ReactNode } from 'react';

export enum ActionTypes {
	BID,
	SET_BUY_NOW,
	BUY_NOW,
	USER_BID,
}

export type ActionBlock = {
	label: string;
	amountToken: number | string;
	amountUsd: number | string;
	isVisible: boolean;
	dataTestId: string;
	shouldShowBorder?: boolean;
	buttonComponent: ReactNode;
};
