import { REQUEST_TOPLIST } from '../actions';

const initialState =  {
  topList: [],
  selectedCrytpo: null
};

export default function cryptos(state = initialState, action) {
	switch (action.type) {
		case REQUEST_TOPLIST:
			return {
				...state, topList: action.payload.data.Data
			};
		default:
			return state;
	}
}