import React, { useState } from 'react';
import rightArrow from '../../../../../imgs/Browse/FilteredByRatings/rightArrow.svg';
import leftArrow from '../../../../../imgs/Browse/FilteredByRatings/leftArrow.svg';
import { Link } from 'react-router-dom';
import FillProductGallery from './FillProductGallery/FillProductGallery';
import LoaderComponent from '../../../../loader/LoaderComponent';

const ListItem = ({ item, highlighted }) => {
	const classes = `flexArranged subcategoryColor textDecorationNone fullWidth fullHeight ${
		highlighted ? 'CurrentPage' : ''
	}`;

	return (
		<li className={`PageSwitcherItemCharacteristics discless-list justifySelfCenter`}>
			<Link
				to="/"
				className={
					Number.isNaN(Number.parseInt(item)) ? classes + ' standardCursor' : classes + ' PageSwitcherItem'
				}
			>
				<div>{item}</div>
			</Link>
		</li>
	);
};

const PageCarousel = ({ currPage, lim }) => {
	const numOfPages = (arrLength) => {
		let arr = [];
		for (let i = 1; i <= arrLength; i++) {
			arr.push(i);
		}
		return arr;
	};

	// approximate it to ceil, anyway it is going to be the last round
	const divisionBy6 = Math.ceil(lim / 6);

	// if we have at least up to 6 pages,
	if (divisionBy6 === 1) {
		// create links for all but do not add navigation buttons
		return numOfPages(lim).map((item, index) => {
			return <ListItem key={index} item={item} highlighted={item === currPage} />;
		});
	} else {
		// we have more than 6 pages or at least twice
		// if currPage is in first turn
		if (currPage <= 6) {
			// render links in this way
			return [1, 2, 3, 4, 5, 6, '...', lim].map((item, index) => {
				return <ListItem key={index} item={item} highlighted={item === currPage} />;
			});
		} else if (divisionBy6 > 1 && currPage < lim - 5) { // if there'smore than 6 pages but less than limit by 5
		// render links
			return [
				'1',
				'...',
				`${currPage - 2}`,
				`${currPage - 1}`,
				`${currPage}`,
				`${currPage + 1}`,
				`${currPage + 2}`,
				'...',
				`${lim}`,
			].map((item, index) => {
				// NaN dy default is coerced to false
				return <ListItem key={index} item={item} highlighted={Number.parseInt(item) === currPage} />;
			});
		} else { // we are in final turn
			return ['1', '...', `${lim - 5}`, `${lim - 4}`, `${lim - 3}`, `${lim - 2}`, `${lim - 1}`, `${lim}`].map(
				(item, index) => {
						return <ListItem key={index} item={item} highlighted={Number.parseInt(item) === currPage} />;
				}
			);
		}
	}
};

export default function ProductGallery({ products = null, view, toFetchMore, limit }) {
	const [page, setPage] = useState(1);

	const goForward = () => {
		if (page === limit) {
			setPage(limit);
			toFetchMore(limit - 1);
		} else {
			setPage((page) => page + 1);
			toFetchMore(page + 1);
		}
	};

	const goBack = () => {
		if (page === 1) {
			setPage(1);
			toFetchMore(1);
		} else {
			setPage((page) => page - 1);
			toFetchMore(page - 1);
		}
	};

	return products ? (
		<>
			<FillProductGallery gallery={products} gallerySetup={view} />
			<div className="PageSwitcherWrapper fullWidth heightAuto flexArranged">
				<div className="PageSwitcher" aria-label="Page Switcher">
					<span className="flexArranged">
						{/* if page is greater than 6 */}
						{page > 6 || products.length < 6 ? (
							<button
								onClick={goBack}
								className="btn rounded PageSwitcherBtn flexArranged cursor-pointer"
							>
								<span>
									<img className="Arrows" src={leftArrow} alt="leftArrow" />
								</span>
							</button>
						) : (
							<></>
						)}
						<ul className="ProductPages flexArranged fullWidth heightAuto pad-inline-start-none no-mgBlockStart-mgBlockEnd">
							<PageCarousel currPage={page} lim={limit} />
						</ul>
						<button onClick={goForward} className="btn rounded PageSwitcherBtn flexArranged cursor-pointer">
							<span>
								<img className="Arrows" src={rightArrow} alt="rightArrow" />
							</span>
						</button>
					</span>
				</div>
			</div>
		</>
	) : (<LoaderComponent />)
}
