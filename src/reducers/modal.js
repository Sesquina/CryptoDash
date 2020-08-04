import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState =  {
  modalStatus: false,
  selectedCurrencyId: '',
  selectedCurrencyName: '',
};

//Switch case for opening and closing modal
export default function modal(state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state, modalStatus: true, selectedCurrencyId: action.currencyId, selectedCurrencyName: action.currencyName 
			};
		case CLOSE_MODAL:
			return {
				...state, modalStatus: false
			};
		default:
			return state;
	}
}