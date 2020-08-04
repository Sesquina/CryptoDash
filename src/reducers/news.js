import { REQUEST_LATEST_NEWS } from '../actions';

const initialState =  {
  news: []
};

export default function cryptos(state = initialState, action) {
	switch (action.type) {
		case REQUEST_LATEST_NEWS:
			return {
				...state, news: action.payload.data.Data.slice(0, 10)
			};
		default:
			return state;
	}
}

//switch case opens news and opens news to link