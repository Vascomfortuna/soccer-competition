import React from 'react';
import Country from './Country';

const CountryList = ({ countries,onCountrySelected }) =>{
	return(
		<div className="flex flex-wrap justify-around">
		{
			countries.map ((country,i)=>{
				return( 
					<Country 
					key={i}
					onCountrySelected = {onCountrySelected} 
					code={country.code} 
					name={country.name} 
					flag={country.flag}
					/>
				);
			})
		}
		</div>
	);
} 

export default CountryList;