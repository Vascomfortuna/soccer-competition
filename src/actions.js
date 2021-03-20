import {
	SET_SELECTED_COUNTRY,
	REQUEST_COUNTRIES_PENDING,
	REQUEST_COUNTRIES_SUCCESS,
	REQUEST_COUNTRIES_FAILED,
	REQUEST_COMPETITIONS_PENDING,
	REQUEST_COMPETITIONS_SUCCESS,
	REQUEST_COMPETITIONS_FAILED
} from './constants.js';

export const setSelectedCountry = (text) => ({
	type: SET_SELECTED_COUNTRY,
	payload: text
})

export const requestCountries = () => (dispatch) => {
	dispatch({ type: SET_SELECTED_COUNTRY, payload: ''});
	dispatch({ type: REQUEST_COUNTRIES_PENDING });
	fetch("https://v3.football.api-sports.io/countries", {
				"method": "GET",
				"headers": {
					"x-apisports-key": "2589f251a0948e2c6ae6b431bc28f0b9"
				}
			})
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_COUNTRIES_SUCCESS, payload: data['response']}))
		.catch(error => dispatch({ type: REQUEST_COUNTRIES_FAILED, payload: error }))
}

export const requestCompetitions = (countryName,countryCode) => (dispatch) => {
	dispatch({ type: SET_SELECTED_COUNTRY, payload: countryName});
	dispatch({ type: REQUEST_COMPETITIONS_PENDING });
	const url = "https://v3.football.api-sports.io/leagues?code="+countryCode+"&current=true";
	fetch(url , {
				"method": "GET",
				"headers": {
					"x-apisports-key": "2589f251a0948e2c6ae6b431bc28f0b9"
				}
			})
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_COMPETITIONS_SUCCESS, payload: data['response']}))
		.catch(error => dispatch({ type: REQUEST_COMPETITIONS_FAILED, payload: error }))
}

