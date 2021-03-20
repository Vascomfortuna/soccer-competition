import {
	SET_SELECTED_COUNTRY,
	REQUEST_COUNTRIES_PENDING,
	REQUEST_COUNTRIES_SUCCESS,
	REQUEST_COUNTRIES_FAILED,
	REQUEST_COMPETITIONS_PENDING,
	REQUEST_COMPETITIONS_SUCCESS,
	REQUEST_COMPETITIONS_FAILED
} from './constants.js';

const initialStateRequest = {
	isPending: false,
	countries: [],
	competitions:[],
	selectedCountry: '',
	error: ''
}

export const requestData = (state=initialStateRequest, action={}) => {
	switch(action.type){
		case SET_SELECTED_COUNTRY:
			return Object.assign({}, state, {selectedCountry:action.payload});
		case REQUEST_COUNTRIES_PENDING:
			return Object.assign({}, state, {isPending: true});
		case REQUEST_COUNTRIES_SUCCESS:
			return Object.assign({}, state, {countries: action.payload, competitions:[], isPending: false});
		case REQUEST_COUNTRIES_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});
		case REQUEST_COMPETITIONS_PENDING:
			return Object.assign({}, state, {isPending: true});
		case REQUEST_COMPETITIONS_SUCCESS:
			return Object.assign({}, state, {competitions: action.payload, isPending: false});
		case REQUEST_COMPETITIONS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}

