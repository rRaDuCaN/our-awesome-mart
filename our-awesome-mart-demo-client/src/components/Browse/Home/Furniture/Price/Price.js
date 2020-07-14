import React from 'react';

export default function Price({ price }) {
	if(price){const priceOption = Object.keys(price).filter((item) => item !== '__typename' && price[item] !== null);
	if (priceOption[0] === 'currentPriceFirstType') {
		return (
			<span className="font-w-bold flexStart">
				<span className="PriceValue">{price.currentPriceFirstType[0]}</span>
				<span className="">-</span>
				<span className="PriceValue">{price.currentPriceFirstType[1]}</span>
			</span>
		);
	} else {
		return (
			<span className="font-w-bold flexStart">
				<span className="PriceValue">{price[priceOption[0]]}</span>
			</span>
		);
	}} else {
		return (
			<span className="font-w-bold flexStart">
				<span className="PriceValue">not applicable</span>
			</span>
		);
	}
}
