import React from 'react';
import filledStar from '../../../../../imgs/Browse/FilteredByRatings/filledStar.svg';
import semiFilledStar from '../../../../../imgs/Browse/FilteredByRatings/semiFilledStar.svg';
import unfilledStar from '../../../../../imgs/Browse/FilteredByRatings/unfilledStar.svg';

const addStar = (key, svgFile) => <img key={key} className="FilterByRatingsStarsSize" src={svgFile} alt="star" />

export const genArr = (numFilled) => {
	let arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push(i < numFilled ? 'f' : 'u')
	}
	return arr;
};

function genStars(semiFilledStarStart, semiFilledStarEnd) {
	return function (numFilled) {
		const arr = genArr(numFilled);
		let finished = arr.map((item, index) => addStar(index, item === 'f' ? filledStar : unfilledStar));
		if (semiFilledStarStart) {
			finished.shift();
			finished.unshift(addStar('__added__before__', semiFilledStar));
		} else if (semiFilledStarEnd) {
			finished.pop();
			finished.push(addStar('__added__after__', semiFilledStar));
		}
		return finished;
	};
}
const getStars = genStars(false, false);

export const st = {
	UNFILLED_STARS: getStars(0),
	SEMIFILLED_STAR: genStars(true, false)(0),
	ONE_FILLED_STAR: getStars(1),
	TWO_FILLED_STARS: getStars(2),
	THREE_FILLED_STARS: getStars(3),
	FOUR_FILLED_STARS: getStars(4),
	FOUR_DOT_FIVE_FILLED_STARS: genStars(false, true)(4),
	FIVE_FILLED_STARS: getStars(5),
};
