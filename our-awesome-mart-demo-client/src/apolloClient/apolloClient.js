import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { productsViewType } from './Browse/Home/Furniture/localState';
import { productsView, sortBy, sideFilters, appliedSideFilter } from './Browse/Home/Furniture/furnitureQueries';
import { isClosedQuery } from './PopOnSideMenu/queries';
import { parsedObject } from '../helpers';

const initialState = {
	deliveryAndPickup: {
		showAll: [],
		nextDayDelivery: [],
		twoDayDelivery: [],
		deliverToHome: [],
		freePickupPlusDiscount: [],
		freePickup: [],
		freePickupToday: [],
	},
	specialOffers: {
		clearance: [],
		rollback: [],
		reducedPrice: [],
		specialBuy: [],
		new: [],
		asAdvertised: [],
	},
	price: {
		from0To75: [],
		from75To100: [],
		from100To150: [],
		from150To200: [],
		from200To250: [],
		from250To300: [],
		from300To500: [],
		from500To600: [],
		from600AndPlus: [],
	},
	customerRating: {
		fourStarsAndUp: [],
		threeStarsAndUp: [],
		twoStarsAndUp: [],
		oneStarAndUp: [],
	},
};

const defaultSortBy = {
	bestSellers: [],
	priceHighToLow: [],
	priceLowToHigh: [],
	highestRating: [],
	new: [],
};

function getFields(obj) {
	const keys = Object.keys(obj);
	return (placeholder) =>
		parsedObject(
			keys.reduce((acc, curr) => {
				return {
					...acc,
					[curr]: placeholder,
				};
			}, {})
		);
}

/* About writeQuery, writeFragment, readQuery, readFragment
Important: You should call these methods on your app's ApolloClient object, not directly on the cache. 
By doing so, the ApolloClient object broadcasts cache changes to your entire app, which enables automatic UI updates.
If you call these methods directly on the cache instead, changes are not broadcast.
*/

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isClosed: {
					merge(existing = true, incoming) {
						return incoming === 'undefined' ? existing : incoming;
					},
				},
				// you can write the same read function as so
				view(view = 'grid') {
					return view;
				},
				sideFiltersFlags: {
					merge(existing, incoming, { mergeObjects }) {
						// initially existing is already initialized, there is no need for a default value
						// existing object is savet from unintended modifications, instead return a new object
						// concatenating them like so, by default only incoming is returned, that's inconvenient for
						// this use case as flags must to be kep
						return mergeObjects(existing, incoming);
					},
					read(sideFilterFlags) {
						return sideFilterFlags;
					},
				},
				sideFilters: {
					merge(existing = { ...initialState }, incoming = {}, { mergeObjects }) {
						let obj = null;
						const existingKeys = Object.keys(existing);
						if (incoming !== 'undefined') {
							obj = existingKeys.reduce((acc, curr) => {
								if (incoming[curr]) {
									return {
										...acc,
										...parsedObject({ [curr]: mergeObjects(existing[curr], incoming[curr]) }),
									};
								} else {
									return { ...acc, ...parsedObject({ [curr]: existing[curr] }) };
								}
							}, {});
						}
						return obj === null ? existing : obj;
					},
					read(sideFilters) {
						return sideFilters;
					},
				},
				sortBy: {
					merge(existing, incoming, { mergeObjects }) {
						return mergeObjects(existing, incoming);
					},
					read(sortBy) {
						return sortBy;
					},
				},
			},
		},
		SubcategoryName: {
			fields: {
				page: {
					merge(_, incoming) {
						return incoming;
					},
					read(page) {
						return page;
					},
				},
			},
		},
		SortBy: {
			fields: getFields(defaultSortBy)({
				merge(existing = [], incoming, options) {
					console.log('existing: ', existing);
					console.log('incoming: ', incoming);
					return options.mergeObjects(existing, incoming);
				},
			}),
		},
		SideFilters: {
			fields: getFields(initialState)({
				merge(existing = {}, incoming, options) {
					return options.mergeObjects(existing, incoming);
				},
			}),
		},
	},
});

export const client = new ApolloClient({
	cache,
	link: createHttpLink({
		uri: 'http://localhost:4000/graphql',
	}),
	// productsViewType,
	resolvers: {},
	// optional fields
	// fetchPolicy "cache-first" | "network-only" | "cache-only" | "no-cache" | "standby" | "cache-and-network"
	queryDeduplication: false,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'cache-and-network',
			errorPolicy: 'all',
		},
		mutate: {
			errorPolicy: 'all',
		},
	},
});

function initialStorage() {
	client.writeQuery({
		query: productsView,
		data: { view: { productsView: 'grid' } },
	});

	client.writeQuery({
		query: sortBy,
		data: {
			sortBy: defaultSortBy,
		},
	});

	client.writeQuery({
		query: sideFilters,
		data: {
			sideFilters: { ...initialState },
		},
	});

	client.writeQuery({
		query: appliedSideFilter,
		data: {
			sideFiltersFlags: {
				deliveryAndPickup: 'showAll',
				specialOffers: 'none',
				price: 'none',
				customerRating: 'none',
			},
		},
	});

	client.writeQuery({
		query: isClosedQuery,
		data: {
			isClosed: true,
		},
	});
}

// initialize the storage

initialStorage();

// if resetStorage is detected, rewrite the store
client.onResetStore(initialStorage);
console.log('cache from apollo client: ', client);

// Some cache manipulation functions for isClosedQuery

export function writeIsClosed(bool) {
	client.writeQuery({
		query: isClosedQuery,
		data: {
			isClosed: bool,
		},
	});
}
