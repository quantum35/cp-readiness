import React from 'react';
import robocop from '../../robocop.jpg';
import './Card.css';

const Card = ({name, email, id})=>{
	
	return(
			<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img className = 'robocops' src={robocop} alt='robots'/>
			 <div>
				<h2>{name}</h2>
				<p>{email}</p>
			 </div>
			</div>
		);
}
export default Card;