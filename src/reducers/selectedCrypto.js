import { REQUEST_PRICE, REQUEST_HISTORY } from '../actions';

const initialState =  {
	currencyHistory: []
};

export default function modal(state = initialState, action) {
	switch (action.type) {
		case REQUEST_PRICE:
			return {
				...state, currencyPrice: action.payload.data['GBP']
			};
		case REQUEST_HISTORY:
			return {
				...state, currencyHistory: action.payload.data.Data
			};
		default:
			return state;
	}
}