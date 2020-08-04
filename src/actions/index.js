import axios from 'axios';

export const REQUEST_TOPLIST = 'REQUEST_TOPLIST';
export const REQUEST_LATEST_NEWS = 'REQUEST_LATEST_NEWS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_PRICE = 'REQUEST_PRICE';
export const REQUEST_HISTORY = 'REQUEST_HISTORY';

export function requestTopList() {
	const API_URL = 'https://min-api.cryptocompare.com/data/top/totalvol?limit=10&tsym=GBP';
	const data = axios.get(`${API_URL}`);

	return {
		type: REQUEST_TOPLIST,
		payload: data
	}
}

export function requestLatestNews() {
	const API_URL = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
	const data = axios.get(`${API_URL}`);

	return {
		type: REQUEST_LATEST_NEWS,
		payload: data
	}
}

export function openModal(id, name) {
	return {
		type: OPEN_MODAL,
		currencyId: id,
		currencyName: name,
	}
}

export function closeModal() {
	return {
		type: CLOSE_MODAL
	}
}

export function requestCurrencyPrice(id) {
	const API_URL = `https://min-api.cryptocompare.com/data/price?fsym=${id}&tsyms=GBP`;
	const data = axios.get(`${API_URL}`);

	return {
		type: REQUEST_PRICE, 
		payload: data
	}
}

export function requestCurrencyHistory(id) {
	const API_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=${id}&tsym=GBP&limit=7`;
	const data = axios.get(`${API_URL}`);

	return {
		type: REQUEST_HISTORY, 
		payload: data
	}
}