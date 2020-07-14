import React, { useRef, useState, useEffect } from 'react';
import './FurnitureDepartments.css';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import SideFiltersImplementation from './Filters/SideFiltersImplementation';
import gridViewSelector from '../../../../imgs/Browse/FilteredByRatings/gridViewSelector.svg';
import listViewSelector from '../../../../imgs/Browse/FilteredByRatings/listViewSelector.svg';
import LoaderComponent from '../../../loader/LoaderComponent';
import { productsView } from '../../../../apolloClient/Browse/Home/Furniture/furnitureQueries';
import { sortByFilters as calculateSortByArrays } from './Filters/topAndSideFilterHelpers';
import ProductGallery from './ProductGallery/ProductGallery';
import Footer from '../../../Home/Footer/Footer';

/************************************************************************************************************************
 *														GLOBAL CONSTANTS										    	*
 ***********************************************************************************************************************/
const navigationItems = [
	'Shop Home',
	'Shop by Room',
	'Shop by Style',
	'Furniture',
	'Kitchen & Dinning',
	'Appliances',
	'Bed & Bath',
	'Patio & Garden',
	'Decor',
	'Storage & Organization',
	'Savings',
	'Decorating Ideas',
];

const sortByNames = {
	selectBy: 'Select By',
	bestSellers: 'Best Sellers',
	priceLowToHigh: 'Price: low to high',
	priceHighToLow: 'Price: high to low',
	highestRating: 'Highest Rating',
	new: 'New',
};

const sortByNameKeys = Object.keys(sortByNames);

// hoisted up stateless elements
const navigationItemsElems = (
	<nav className="borders navigation flexEvenly heightAuto">
		<ul className="discless-list pad-inline-start-0px flexEvenly fullWidth adjusted-nav-items">
			{navigationItems.map((item, index) => {
				return (
					<li key={'__' + item + index}>
						<Link
							to="/"
							className="PageSwitcherItem subcategoryColor textDecorationNone f-s05"
							data-link="top-navigation-link"
						>
							{item}
						</Link>
					</li>
				);
			})}
		</ul>
	</nav>
);
// this is an abstraction component for userHistory helper function
function CreateLink({ temp, curr, isUnderlined }) {
	return (
		<span>
			<span>/</span>
			{isUnderlined ? (
				<Link to={temp} className=" capitalize subcategoryColor textDecorationNone" role="link">
					{curr}
				</Link>
			) : (
				<Link to={temp} className=" capitalize subcategoryColor textDecorationNone">
					{curr}
				</Link>
			)}
		</span>
	);
}

/************************************************************************************************************************
 *														END OF GLOBAL CONSTANTS	(Avoid them)							*
 ***********************************************************************************************************************/

export default function FurnitureDepartment({ department, subcategory, category, routes, subdepartments }) {
	/************************************************************************************************************************
	 *														HOOKS															*
	 * **********************************************************************************************************************/
	const [topSelector, setTopSelector] = useState('Select By');
	const [products, setProducts] = useState([]);
	const limit = useRef(0);
	const page = useRef(1);
	const experiment = useRef(null);

	const { loading, data: storage, client, fetchMore } = useQuery(department, {
		variables: { p: 'p1' },
		displayName: `${subcategory}Query`.toUpperCase(),
	});

	const location = useLocation().pathname.replace(/\/dist\/index\.html\/search\//gi, '');

	useEffect(() => {
		// do not perform any unneccessary calculations while data is being fetched
		if (loading === false && storage !== null) {

			const {
				shopHomeFurnishing: {
					homeFurniture: {
						categories: {
							[category]: { subcategories: d },
						},
					},
				},
			} = storage;
			limit.current = d[subcategory].limit;
			experiment.current = d[subcategory].page;
			setProducts(experiment.current);
			
		}
	}, [loading, subcategory, category, storage]);

	/************************************************************************************************************************
	 *												END OF HOOKS															*
	 * **********************************************************************************************************************/

	/************************************************************************************************************************
	 *												HELPER FUNCTIONS														*
	 * **********************************************************************************************************************/

	function getView() {
		const {
			view: { productsView: view },
		} = storage;
		return view;
	}

	const setGridView = () => {
		if (getView() !== 'grid') {
			client.cache.writeQuery({
				query: productsView,
				data: {
					view: {
						productsView: 'grid',
					},
				},
			});
		} else {
			return true;
		}
	}

	const setListView = () => {
		if (getView() !== 'list') {
			client.cache.writeQuery({
				query: productsView,
				data: {
					view: {
						productsView: 'list',
					},
				},
			});
		} else {
			return true;
		}
	}

	// depending on the situation userHistory can be or a string, in case it returns "/", or an array of jsx components
	const userHistory = ((str) => {
		// create and return the user history links and return them so that they could be just ready to be rendered
		const defaultURL = '';
		let history = [];
		let links = [];
		let temp = '';
		// don't pay attention to default url, user history stack is not created yet
		if (location === defaultURL || location === defaultURL + '/') {
			return '/';
		} else {
			// get the individual pages where the user have been from the path.
			history = str.split('/');
			// create links based on user history
			history.reduce((acc, curr, currIndex) => {
				// home and furniture pages are not yet implemented, put in array the default link
				if (curr === 'home' || curr === 'furniture') {
					temp = acc;
					links.push(<CreateLink {...{ temp, curr, isUnderlined: true }} key={'__' + curr} />);
					if (curr === 'furniture') {
						temp = acc + '/search/home/furniture';
					}
					return temp;
				} else {
					temp = acc + `/${curr}`;
					links.push(
						history.length - 1 === currIndex ? (
							<CreateLink {...{ temp, curr }} key={'__' + curr} />
						) : (
							<CreateLink {...{ temp, curr, isUnderlined: true }} key={'__' + curr} />
						)
					);
					return temp;
				}
			}, defaultURL);
		}
		temp = null;
		history = null;
		return links;
	})(location);

	/************************************************************************************************************************
	 *												END OF HELPER FUNCTIONS													*
	 * **********************************************************************************************************************/

	/************************************************************************************************************************
	 *												FUNCTION HANDLERS														*
	 * **********************************************************************************************************************/

	const fetchMoreHandler = (page) => {
		fetchMore({
			query: department,
			variables: {
				p: `p${page < limit.current ? page : limit.current}`,
			},
		});
	};

	const onTopSelectorFilterChange = ({ target: { value } }) => {
		setTopSelector(value);
		if (value !== 'Select By') {
			sortByNameKeys.forEach((item) => {
				if (value === sortByNames[item]) {
					const {
						sortBy: { [item]: val },
					} = storage;
					setProducts(val.length !== 0 ? val : calculateSortByArrays[item](products));
				}
			});
		} else {
			setProducts(experiment.current);
		}
	}

	const onSideFilterSet = (filteredArr) => {
		console.log('filteredArr from onSideFilterSet: ', filteredArr);
		setProducts(filteredArr ? filteredArr : experiment.current);
	}

	/************************************************************************************************************************
	 *												END OF FUNCTION HANDLERS												*
	 * **********************************************************************************************************************/

	/************************************************************************************************************************
	 *												RENDERING																*
	 * **********************************************************************************************************************/

	return (
		<>
			<div className="grid FurnitureDepartments">
				<div className="flexArranged fullWidth">{navigationItemsElems}</div>
				<div className="UserHistoryNavigation flexEvenly heightAuto">
					<span className="subcategoryColor widthAuto flexStandard">{location !== '/' && userHistory}</span>
				</div>
				<div className="flexEnd translateX-1dot5">
					<div className="TopFilters flexStandard">
						<div className="subcategoryColor">
							<span className="font-w">Refine by</span>
							<span>|</span>
							<span>Price</span>
						</div>
						<div className="flexStandard subcategoryColor">
							<span className="font-w">Sort by</span>
							<span>|</span>
							<span>
								<select id="sortBy" value={topSelector} onChange={onTopSelectorFilterChange}>
									{sortByNameKeys.map((item, index) => (
										<option value={sortByNames[item]} key={'__' + index + item}>
											{sortByNames[item]}
										</option>
									))}
								</select>
							</span>
							<span className="flexStandard">
								<img
									onClick={setListView}
									className="viewSelectors"
									src={listViewSelector}
									alt="listViewSelector"
								/>
								<img
									onClick={setGridView}
									className="viewSelectors"
									src={gridViewSelector}
									alt="gridViewSelector"
								/>
							</span>
						</div>
					</div>
				</div>
				<div className="grid borders MainProductView">
					<div className="borders SideFilters">
						<SideFiltersImplementation  productsSetter={onSideFilterSet} routePaths={routes} categs={subdepartments} dataArr={products} />
					</div>
					{loading === false ? (
						<div className="fullWidth heightAuto ProductGalleryWrapper">
							<div className="heightAuto Intermediate">
								<ProductGallery
									{...{
										products: products,
										view: getView(),
										limit: limit.current,
										toFetchMore: fetchMoreHandler,
										page: page.current,
									}}
								/>
							</div>
						</div>
					) : (
						<LoaderComponent />
					)}
				</div>
				<Footer />
			</div>
			)
		</>
	);
}
