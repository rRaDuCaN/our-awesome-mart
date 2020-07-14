import React, { useState } from 'react';
import plus from '../../../../../imgs/Browse/FilteredByRatings/plus.svg';
import minus from '../../../../../imgs/Browse/FilteredByRatings/minus.svg';

export default function AcordeonButton({ filterTitle, children }) {
	const [fallDown, setFallDown] = useState(false);

	function onFallDownHandler() {
		setFallDown(!fallDown);
	}
	return (
		<div className="fullWidth borders">
			<button
				className="flexStandard btnItemFlexTransparent fullWidth font-w-bold text-align-st pad-top1rem pad-bott1rem"
				onClick={onFallDownHandler}
			>
				<span>{filterTitle}</span>
				<span>
					<img className="FilterByRatingsStarsSize" src={fallDown ? plus : minus} alt="plusOrMinus" />
				</span>
			</button>
			{
				<div hidden={fallDown ? true : false} className=" mg-b1 fullWidth">
					{children}
				</div>
			}
		</div>
	);
}
