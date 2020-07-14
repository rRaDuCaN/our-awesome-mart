import React from 'react';
import './FilterByRatings.css';
import FancyCheckbox from './FancyCheckbox';
import filledStar from '../../../../../imgs/Browse/FilteredByRatings/filledStar.svg';
import unfilledStar from '../../../../../imgs/Browse/FilteredByRatings/unfilledStar.svg';
import {genArr} from '../Ratings/starsConsts';

export default function FilterByRatings({ onChange }) {
	const arrs = [genArr(4), genArr(3), genArr(2), genArr(1)].map((item, index) => {
		return item.map((itemInner, indexInn) => {
			return (
				<span key={'__' + index + itemInner + indexInn}>
					{itemInner === 'f' ? (
						<img className="FilterByRatingsStarsSize" src={filledStar} alt="filledStar" />
					) : (
						<img className="FilterByRatingsStarsSize" src={unfilledStar} alt="unfilledStar" />
					)}
				</span>
			);
		});
	});
	return (
		<div className="mg0dot2 flexStandard flexColumn mg-t1 fullWidth">
			{['fourStarsAndUp', 'threeStarsAndUp', 'twoStarsAndUp', 'oneStarAndUp'].map((item, index) => (
				<div key={item} className="flexStandard alignSelfFlexStart">
					<span>
						<FancyCheckbox checkboxId={item} isChanged={onChange(item)} />
						{arrs[index]}
					</span>
					<span className="subcategoryColor">{' & Up'}</span>
				</div>
			))}
		</div>
	);
}
