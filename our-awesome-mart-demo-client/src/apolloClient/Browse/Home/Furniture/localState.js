import { gql } from '@apollo/client';
import { productsView, sortBy, sideFilters } from './furnitureQueries';

//



// In case useMutation is implemented
export const productsViewType = gql`
	extend type Query {
		view: ProductsView
		sortBy: SortBy
		sideFilters: SideFilters
		sideFiltersFlags: SideFiltersFlags
	}

	extend type ShopHomeFurnishing {
		topSelectorValue: String!
	}

	type Mutation {
		setSelectorValue: ShopHomeFurnishing
	}

	type ProductsView {
		productsView: String
	}

	type SideFilters {
		deliveryAndPickup: DeliveryAndPickup
		specialOffers: SpecialOffers
		price: Price
		customerRating: CustomerRating
	}

	type SideFiltersFlags {
		deliveryAndPickup: String!
		specialOffers: String!
		price: String!
		customerRating: String!
	}

	type ProductPrice {
		currentPriceFirstType: [String]
		currentPriceSecondType: String
		currentPriceThirdType: String
		currentPriceFourthType: String
	}

	type Options {
		soldAndShippedBy: [String]
		freePickup: [String]
		freePickupToday: [String]
		freeDelivery: [String]
		freeDeliveryOver35: [String]
		unknownOption1: [String]
		unknownOption2: [String]
	}

	type Action {
		addToCart: String
		chooseOptions: String
	}

	type Cart {
		productIs: String
		productTitle: String
		ratings: String
		price: ProductPrice
		options: Options
		action: Action
		imgName: String
		imgURL: String
	}

	type DeliveryAndPickup {
		showAll: [Cart]
		nextDayDelivery: [Cart]
		twoDayDelivery: [Cart]
		deliverToHome: [Cart]
		freePickupPlusDiscount: [Cart]
		freePickup: [Cart]
		freePickupToday: [Cart]
	}

	type SpecialOffers {
		clearance: [Cart]
		rollback: [Cart]
		reducedPrice: [Cart]
		specialBuy: [Cart]
		new: [Cart]
		asAdvertised: [Cart]
	}

	type Price {
		from0To75: [Cart]
		from75To100: [Cart]
		from100To150: [Cart]
		from150To200: [Cart]
		from200To250: [Cart]
		from250To300: [Cart]
		from300To500: [Cart]
		from500To600: [Cart]
		from600AndPlus: [Cart]
	}

	type CustomerRating {
		fiveStars: [Cart]
		fourStarsAndUp: [Cart]
		threeStarsAndUp: [Cart]
		twoStarsAndUp: [Cart]
		oneStarAndUp: [Cart]
		halfAStarAndUp: [Cart]
	}

	type SortBy {
		bestSellers: [Cart]
		priceHighToLow: [Cart]
		priceLowToHigh: [Cart]
		highestRating: [Cart]
		new: [Cart]
	}
`;

// when updating with useMutation make sure to implement the resolvers
export const productsViewResolver = {
	Query: {
		view: (root, args, { cache }) => {
			const {
				data: { view },
			} = cache.readQuery({
				query: productsView,
			});
			return view;
		},
		sortBy: (root, args, { cache }) => {
			const {
				data: { sortBy: sortByData },
			} = cache.readQuery({
				query: sortBy,
			});
			return sortByData;
		},
		sideFilters: (root, args, { cache }) => {
			const {
				data: { sideFilters: sideFiltersData },
			} = cache.readQuery({
				query: sideFilters,
			});
			return sideFiltersData;
		}
	},
	ProductsView: {
		productsView: (root, _) => root.productsView,
	},
	SortBy: {
		bestSellers: (root) => root.bestSellers,
		priceHighToLow: (root) => root.priceHighToLow,
		priceLowToHigh: (root) => root.priceLowToHigh,
		highestRating: (root) => root.highestRating,
	},
	SideFilters: {
		deliveryAndPickup: (root) => root.deliveryAndPickup,
		specialOffers: (root) => root.specialOffers,
		price: (root) => root.price,
		customerRating: (root) => root.customerRating,
	},
	DeliveryAndPickup: {
		showAll: (root) => root.showAll,
		nextDayDelivery: (root) => root.nextDayDelivery,
		twoDayDelivery: (root) => root.twoDayDelivery,
		deliverToHome: (root) => root.deliverToHome,
		freePickupPlusDiscount: (root) => root.freePickupPlusDiscount,
		freePickup: (root) => root.freePickup,
		freePickupToday: (root) => root.freePickupToday,
	},
	SpecialOffers: {
		clearance: (root) => root.clearance,
		rollback: (root) => root.rollback,
		reducedPrice: (root) => root.reducedPrice,
		specialBuy: (root) => root.specialBuy,
		new: (root) => root.new,
		asAdvertised: (root) => root.asAdvertised,
	},
	Price: {
		from0To75: (root) => root.from0To75,
		from75To100: (root) => root.from75To100,
		from100To150: (root) => root.from100To150,
		from150To200: (root) => root.from150To200,
		from200To250: (root) => root.from200To250,
		from250To300: (root) => root.from250To300,
		from300To500: (root) => root.from300To500,
		from500To600: (root) => root.from500To600,
		from600AndPlus: (root) => root.from600AndPlus,
	},
	CustomerRating: {
		fiveStars: (root) => root.fiveStars,
		fourStarsAndUp: (root) => root.fourStarsAndUp,
		threeStarsAndUp: (root) => root.threeStarsAndUp,
		twoStarsAndUp: (root) => root.twoStarsAndUp,
		oneStarAndUp: (root) => root.oneStarAndUp,
	},
	ProductPrice: {
		currentPriceFirstType: (root) => root.currentPriceFirstType,
		currentPriceSecondType: (root) => root.currentPriceSecondType,
		currentPriceThirdType: (root) => root.currentPriceThirdType,
		currentPriceFourthType: (root) => root.currentPriceFourthType,
	},
	Options: {
		soldAndShippedBy: (root) => root.soldAndShippedBy,
		freePickup: (root) => root.freePickup,
		freePickupToday: (root) => root.freePickupToday,
		freeDelivery: (root) => root.freeDelivery,
		freeDeliveryOver35: (root) => root.freeDeliveryOver35,
		unknownOption1: (root) => root.unknownOption1,
		unknownOption2: (root) => root.unknownOption2,
	},
	Action: {
		addToCart: (root) => root.addToCart,
		chooseOptions: (root) => root.chooseOptions,
	},
	Cart: {
		productIs: (root) => root.productIs,
		productTitle: (root) => root.productTitle,
		ratings: (root) => root.ratings,
		price: (root) => root.price,
		options: (root) => root.options,
		action: (root) => root.action,
		imgName: (root) => root.imgName,
		imgURL: (root) => root.imgURL,
	},
};
