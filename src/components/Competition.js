import React from 'react';
import Season from './Season';

const Competition= ({league, seasons}) =>{
	return(
		<div className='tc bg-light-blue br3 pa3 ma2 shadow-5 w-20 '>
			<h5 className="f3">{league.name}</h5>
			{

			seasons.map ((season,i)=>{
				return( 
					<Season
					key={i}
					year={season.year} 
					start={season.start}
					end={season.end} 
					/>
				);
			})
		}
		</div>
		);
}


export default Competition;