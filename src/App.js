import React, {Component} from 'react';
import CountryList from './components/CountryList.js';
import { connect } from 'react-redux';
import Scroll from './components/Scroll.js';
import ErrorBoundry from './components/ErrorBoundry.js';
import './App.css';
import CompetitionList from './components/CompetitionList.js'

import { requestCompetitions,requestCountries, setSelectedCountry } from './actions.js';

const mapStateToProps = state => {
	return {
		countries: state.requestData.countries,
		competitions: state.requestData.competitions,
		isPending: state.requestData.isPending,
		error: state.requestData.error,
		selectedCountry: state.requestData.selectedCountry
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onCountrySelected: (countryName,countryCode) =>  dispatch(requestCompetitions(countryName,countryCode)),
		requestCountries: () => dispatch(requestCountries()),
		setSelectedCountry: (countryName) => dispatch(setSelectedCountry(countryName))
	}
}

class App extends Component{

	componentDidMount(){
		this.props.requestCountries();
	}


	render(){
		const { 
			onCountrySelected, 
			countries, 
			isPending, 
			selectedCountry, 
			setSelectedCountry, 
			competitions 
		} = this.props;
		let content = "";

		if (isPending) {
			content = <h1 className= "sega f1">Loading</h1>;
		} else if (!selectedCountry) {
			content =
			<div>
			<h1 className="f1 sega">Soccer Competition</h1> 
			<Scroll>
				<ErrorBoundry>
					<CountryList countries={countries} onCountrySelected={onCountrySelected}/>
				</ErrorBoundry>	
			</Scroll>
			</div>
		} else if(competitions.length){
			content = 
			<div>
			<div className="flex justify-center items-center">
				<h2 className="f2 sega ">{selectedCountry}</h2>
				<button className="f5 link pointer grow pa3 ma4 dib br3 black bg-blue fw6" onClick={setSelectedCountry.bind(this,'')} >
					BACK TO COUNTRIES
				</button>
			</div>
			<Scroll>
				<ErrorBoundry>
					<CompetitionList competitions={competitions}/>
				</ErrorBoundry>	
			</Scroll>
			</div>
		} else {
			content = <h1 className= "f1">Couldn't get data.<br/> Check your internet connection.</h1>;
		}
	    return (
	    		<div className="tc">
					
					{content}
				</div>
	    	)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
