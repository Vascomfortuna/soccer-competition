import React from 'react';

const Country = ({name, flag, code, onCountrySelected}) =>{
	return(
		<div 
			className='bg-light-blue hover-bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 w-25 pointer'
			onClick = {onCountrySelected.bind(this,name,code)} 
		>
				<img alt='country flag' src={flag} />
				<h2 style={{wordWrap: 'break-word', fontSize:'3vw'}}>{name}</h2>
		</div>
		);
}


export default Country;