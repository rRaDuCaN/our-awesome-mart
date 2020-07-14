import { gql } from '@apollo/client';

// check where it's called
export const sortByFlagsQueries = {
	bestSellers: gql`
		query {
			sortByFlags @client {
				bestSellers
			}
		}
	`,
	priceHighToLow: gql`
		query {
			sortByFlags @client {
				priceHighToLow
			}
		}
	`,
	priceLowToHigh: gql`
		query {
			sortByFlags @client {
				bestSellers
				priceHighToLow
				priceLowToHigh
				highestRating
				new
			}
		}
	`,
	highestRating: gql`
		query {
			sortByFlags @client {
				highestRating
			}
		}
	`,
	new: gql`
		query {
			sortByFlags @client {
				new
			}
		}
	`,
};

export const sortByNames = gql`
	query {
		sortByNames @client
	}
`;

export const sideFilterFlagQueries = {
	deliveryAndPickup: gql`
		query {
			sideFiltersFlags @client {
				deliveryAndPickup
			}
		}
	`,
	specialOffers: gql`
		query {
			sideFiltersFlags @client {
				specialOffers
			}
		}
	`,
	price: gql`
		query {
			sideFiltersFlags @client {
				price
			}
		}
	`,
	customerRating: gql`
		query {
			sideFiltersFlags @client {
				customerRating
			}
		}
	`,
};

export const sideFilterQueries = {
	deliveryAndPickup: {
		showAll: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						showAll
					}
				}
			}
		`,
		nextDayDelivery: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						nextDayDelivery 
					}
				}
			}
		`,
		twoDayDelivery: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						twoDayDelivery
					}
				}
			}
		`,
		deliverToHome: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						deliverToHome
					}
				}
			}
		`,
		freePickupPlusDiscount: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						freePickupPlusDiscount
					}
				}
			}
		`,
		freePickup: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						freePickup
					}
				}
			}
		`,
		freePickupToday: gql`
			query {
				sideFilters @client {
					deliveryAndPickup {
						freePickupToday
					}
				}
			}
		`,
	},
	specialOffers: {
		clearance: gql`
			query {
				sideFilters @client {
					specialOffers {
						clearance
					}
				}
			}
		`,
		rollback: gql`
			query {
				sideFilters @client {
					specialOffers {
						rollback
					}
				}
			}
		`,
		reducedPrice: gql`
			query {
				sideFilters @client {
					specialOffers {
						reducedPrice
					}
				}
			}
		`,
		specialBuy: gql`
			query {
				sideFilters @client {
					specialOffers {
						specialBuy
					}
				}
			}
		`,
		new: gql`
			query {
				sideFilters @client {
					specialOffers {
						new
					}
				}
			}
		`,
		asAdvertised: gql`
			query {
				sideFilters @client {
					specialOffers {
						asAdvertised
					}
				}
			}
		`,
	},
	price: {
		from0To75: gql`
			query {
				sideFilters @client {
					price {
						from0To75
					}
				}
			}
		`,
		from75To100: gql`
			query {
				sideFilters @client {
					price {
						from75To100
					}
				}
			}
		`,
		from100To150: gql`
			query {
				sideFilters @client {
					price {
						from100To150
					}
				}
			}
		`,
		from150To200: gql`
			query {
				sideFilters @client {
					price {
						from150To200
					}
				}
			}
		`,
		from200To250: gql`
			query {
				sideFilters @client {
					price {
						from200To250
					}
				}
			}
		`,
		from250To300: gql`
			query {
				sideFilters @client {
					price {
						from250To300
					}
				}
			}
		`,
		from300To500: gql`
			query {
				sideFilters @client {
					price {
						from300To500
					}
				}
			}
		`,
		from500To600: gql`
			query {
				sideFilters @client {
					price {
						from500To600
					}
				}
			}
		`,
		from600AndPlus: gql`
			query {
				sideFilters @client {
					price {
						from600AndPlus
					}
				}
			}
		`,
	},
	customerRating: {
		fourStarsAndUp: gql`
			query {
				sideFilters @client {
					customerRating {
						fourStarsAndUp
					}
				}
			}
		`,
		threeStarsAndUp: gql`
			query {
				sideFilters @client {
					customerRating {
						threeStarsAndUp
					}
				}
			}
		`,
		twoStarsAndUp: gql`
			query {
				sideFilters @client {
					customerRating {
						twoStarsAndUp
					}
				}
			}
		`,
		oneStarAndUp: gql`
			query {
				sideFilters @client {
					customerRating {
						oneStarAndUp
					}
				}
			}
		`,
	},
};
