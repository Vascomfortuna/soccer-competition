import React from 'react';
import Competition from './Competition';

const CompetitionList = ({ competitions }) =>{
	competitions.sort((a, b) => {
			    return a.league.id - b.league.id;
			});
	console.log('sort:',competitions);
	return(
		<div className="flex flex-wrap justify-around">
		{

			competitions.map ((competition,i)=>{
				return( 
					<Competition
					key={i}
					league={competition.league} 
					seasons={competition.seasons} 
					/>
				);
			})
		}
		</div>
	);
} 

export default CompetitionList;