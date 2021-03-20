import React from 'react';

const Season= ({year,start,end}) =>{
	return(
		<div >
			<h2>Year: {year}</h2>
			<h3>Start: {start}</h3><h3>End: {end}</h3>
		</div>
		);
}


export default Season;