import { combineReducers } from 'redux';
import CrytosReducer from './cryptos';
import NewsReducer from './news';
import ModalReducer from './modal';
import SelectedReducer from './selectedCrypto';

const rootReducer = combineReducers({
  cryptos: CrytosReducer,
  news: NewsReducer,
  modal: ModalReducer,
  selectedCrypto: SelectedReducer,
});

export default rootReducer;