import { gql } from '@apollo/client';
import { toPipe, parsedObject } from '../../../../helpers';

export const mainCategories = [
	'Living Room Furniture',
	'Kitchen & Dinning Room',
	'Office Furniture',
	'Bedroom Furniture',
	'Kids Furniture',
	'Mattresses & Accessories',
	'TV Stands & Entertainment Centers',
	'Entryway Furniture',
	'Furniture Collections',
	'Small Space Furniture',
];

export const furnitureDepartmentsArrs = {
	bedroomFurniture: [
		'bedFramesAndBoxSprings',
		'bedRisers',
		'bedroomCollections',
		'beds',
		'benches',
		'foldingBeds',
		'headboards',
		'mattressesAndAccessories',
	],
	entrywayFurniture: [
		'benches',
		'cabinetsAndChests',
		'coatRacks',
		'cornerStands',
		'farmHouseHallTrees',
		'freeStandingCoatRacks',
		'hallTrees',
		'overTheDoorCoatRacks',
		'shoeCabinets',
		'traditionalHallTrees',
		'umbrellaRacksAndStands',
		'wallMountedCoatRacks',
	],
	furnitureCollections: [
		'bedroomCollections',
		'homeEntertainmentCollections',
		'kitchenAndDinningCollections',
		'livingRoomCollections',
		'officeCollections',
	],
	kidsFurniture: [
		'bunkBeds',
		'daycareFurniture',
		'kidsBedroomSets',
		'kidsBedsAndHeadboards',
		'kidsChairsAndSeating',
		'kidsCollection',
		'kidsDressersAndArmoires',
		'kidsLoftBeds',
		'kidsNightstandAndVanities',
		'kidsStepStool',
		'kidsTablesAndChairSets',
	],
	kitchenAndDinningRoom: [
		'bakerRacks',
		'barStoolsAndCounterStools',
		'carTablesAndChairSets',
		'dinningChairs',
		'foldingChairs',
		'foldingTables',
		'foldingTablesAndChairs',
		'homeBarFurniture',
		'kitchenAndDinningCollections',
		'microwaveCarts',
		'pubTablesAndSets',
		'sideboardsAndBuffets',
	],
	livingRoomFurniture: [
		'accentChairs',
		'bookcasesAndBookshelves',
		'chaiseLounge',
		'coffeeTables',
		'consoleAndSofaTables',
		'endTables',
		'futons',
		'livingRoomCollections',
		'loveseats',
		'sofaBeds',
		'sofasAndCouches',
	],
	mattressesAndAccessories: ['futonMattresses', 'mattressProtectors', 'mattressToppers', 'shopMattressesBySize'],
	officeFurniture: [
		'twoOrSixCudeStorageOrganizers',
		'twoDrawerFileCabinets',
		'thirteenInchCubeStore',
		'accessories',
		'businessOfficeFurniture',
		'ergonomicChairs',
		'ergonomicDesks',
		'foldingTablesAndChairs',
		'elevenInchCubeStore',
		'rollingFileCabinets',
		'verticalFileCabinets',
	],
	tvStandsAndEntertainmentCenters: [
		'audioAndMediaTowers',
		'blackTvStands',
		'cornerStands',
		'entertainmentCenters',
		'espressoEntertainmentCenters',
		'espressoTvStands',
		'farmHouseEntertainmentCenters',
		'farmHouseTvStands',
		'flatScreenTvStands',
		'floatingTvStands',
		'glassEntertainmentCenters',
		'glassTvStands',
		'homeEntertainmentCollections',
		'homeTheaterSeating',
		'metalEntertainmentCenters',
		'midCenturyEntertainmentCenters',
		'modernEntertainmentCenters',
		'modernTvStands',
		'oakEntertainmentCenters',
		'oakTvStands',
		'rusticEntertainmentCenters',
		'rusticTvStands',
		'smallEntertainmentCenters',
		'speakerStands',
		'tallEntertainmentCenters',
		'traditionalEntertainmentCenters',
		'tvStands',
		'tvStandsWithMount',
		'tvStandsWithStorage',
		'tvStandsWithWheels',
		'wallnutTvStands',
		'whiteEntertainmentCenters',
		'whiteTvStands',
		'woodEntertainmentCenters',
		'woodTvStands',
	],
	smallSpaceFurniture: ['bedroom', 'kitchenAndDinning', 'livingRoom', 'mattresses', 'studyRoom'],
};

const CLIENT_CACHE = `
view @client {
	productsView
	}
  sortBy @client {
	  bestSellers 
	  priceLowToHigh
	  priceHighToLow
	  highestRating
	  new
  }
  sideFilters @client{
	deliveryAndPickup {
		showAll
		nextDayDelivery 
		twoDayDelivery
		deliverToHome
		freePickupPlusDiscount
		freePickup
		freePickupToday
	}
	specialOffers {
		clearance
		rollback
		reducedPrice
		specialBuy
		new
		asAdvertised
	}
	price {
		from0To75
		from75To100
		from100To150
		from150To200
		from200To250
		from250To300
		from300To500
		from500To600
		from600AndPlus
	}
	customerRating {
		fourStarsAndUp
		threeStarsAndUp
		twoStarsAndUp
		oneStarAndUp
	}
  }
  sideFiltersFlags @client{
	deliveryAndPickup
	specialOffers
	price
	customerRating
  }
`;

function shopHomeFurnishing(subquery) {
	return gql`
    query {
      ${CLIENT_CACHE}
      shopHomeFurnishing {
        homeFurniture {
          categories {
              ${subquery}
          }
        }
      }
    }
    `;
}

export const test = gql` 
	query GetSomething($p: String) {
		# ${CLIENT_CACHE}
		shopHomeFurnishing {
			homeFurniture {
				categories {
					bedroomFurniture {
						subcategories {
							bedFramesAndBoxSprings {
								name
								limit
								page(p: $p) {
									productIs
									productTitle
									ratings
									price {
										currentPriceFirstType
										currentPriceSecondType
										currentPriceThirdType
										currentPriceFourthType
									}
									options {
										soldAndShippedBy
										freePickup
										freePickupToday
										freeDelivery
										freeDeliveryOver35
										soldAndShippedBy
										unknownOption1
										unknownOption2
									}
									imgURL
								}
							}
						}
					}
				}
			}
		}
	}
`;
const SUBCATEGORY_DATA = `
    productIs
    productTitle
    ratings
    price {
      currentPriceFirstType
      currentPriceSecondType
      currentPriceThirdType
      currentPriceFourthType
    }
    options {
      soldAndShippedBy
      freePickup
      freePickupToday
      freeDelivery
      freeDeliveryOver35
      soldAndShippedBy
      unknownOption1
      unknownOption2
    }
    imgURL
`;
// end of generic parts
const shopHomeFurnishingName = () => gql`
	query {
		shopHomeFurnishing {
			categoryName
		}
	}
`;
const homeFurnitureName = gql`
	query {
		shopHomeFurnishing {
			homeFurniture {
				categoryName
			}
		}
	}
`;

// subdepartmentAbstraction helpers
const subdAbstract = (subdeparment) => (str) => `
${subdeparment} {
    subcategories {
        ${str}
    }
}
`;

function queryWithVariables(subquery) {
	return gql`
    query GetFurnitureDepartment($p: String!){
		${CLIENT_CACHE}
      shopHomeFurnishing {
        homeFurniture {
          categories {
              ${subquery}
          }
        }
      }
    }
    `;
}

const abstracted = (deprtmnt) => (subdData) => toPipe(subdAbstract(deprtmnt), queryWithVariables)(subdData);
const nameAndData = (fn) => (subdepartment) => [
	// fn(`${subdepartment} { 
	// 	    name 
	//     }`),
	fn(`${subdepartment}{
		 limit
		 page (p: $p) {
			 ${SUBCATEGORY_DATA}
			}
	}`),
];

const getQueries = (arr, category) => {
	const createObjFromArrElems = parsedObject(
		arr.reduce((acc, curr) => {
			return { ...acc, [curr]: '' };
		}, {})
	);

	// consider updating it
	const nAndD = toPipe(abstracted, nameAndData)(category);

	arr.forEach((item) => {
		createObjFromArrElems[item] = nAndD(item);
	});
	return createObjFromArrElems;
};

const departmentName = (name) =>
	shopHomeFurnishing(`
			${name} {
				categoryName
			}
	`);

const departmentMain = (main) => {
	const abstr = abstracted(main);
	const currentQueries = abstr(`
		${main}Main {
			limit
			page(p: $p) {
				${SUBCATEGORY_DATA}
			}
		}
	`);
	return currentQueries;
};

// get everything for department
const depQuery = (dep) => {
	// assigns respective queries
	const mainQuery = departmentMain(dep);
	const query = getQueries(furnitureDepartmentsArrs[dep], dep);
	return {
		query,
		mainQuery,
	};
};
// end of subdepartmentAbstraction helpers

// bedroom furniture
const bedroomFurnitureQuery = depQuery('bedroomFurniture');
const entrywayFurnitureQuery = depQuery('entrywayFurniture');
const furnitureCollectionsQuery = depQuery('furnitureCollections');
const kidsFurnitureQuery = depQuery('kidsFurniture');
const kitchenAndDinningRoomQuery = depQuery('kitchenAndDinningRoom');
const livingRoomFurnitureQuery = depQuery('livingRoomFurniture');
const mattressesAndAccessoriesQuery = depQuery('mattressesAndAccessories');
const officeFurnitureQuery = depQuery('officeFurniture');
const smallSpaceFurnitureQuery = depQuery('smallSpaceFurniture');
const tvStandsAndEntertainmentCentersQuery = depQuery('tvStandsAndEntertainmentCenters');

export const subdepartmentNamesQuery = gql`
	query {
		shopHomeFurnishing {
			homeFurniture {
				subdepartmentNames
			}
		}
	}
`;

// local state queries

export const productsView = gql`
	query {
		view @client {
			productsView @client
		}
	}
`;

export const sortBy = gql`
	query {
		sortBy @client {
			bestSellers
			priceHighToLow
			priceLowToHigh
			highestRating
			new
		}
	}
`;

export const sortByFlags = gql`
	query {
		sortByFlags @client {
			bestSellers
			priceHighToLow
			priceLowToHigh
			highestRating
			new
		}
	}
`;

export const sideFilters = gql`
	query {
		sideFilters @client {
			deliveryAndPickup {
				showAll
				nextDayDelivery
				twoDayDelivery
				deliverToHome
				freePickupPlusDiscount
				freePickup
				freePickupToday
			}
			specialOffers {
				clearance
				rollback
				reducedPrice
				specialBuy
				new
				asAdvertised
			}
			price {
				from0To75
				from75To100
				from100To150
				from150To200
				from200To250
				from250To300
				from300To500
				from500To600
				from600AndPlus
			}
			customerRating {
				fourStarsAndUp
				threeStarsAndUp
				twoStarsAndUp
				oneStarAndUp
			}
		}
	}
`;
// abstraction for sortBy field
const sortByAbstr = (subfield) => gql`
query {
	sortBy @client {
		${subfield}
	}
}
`;

export const appliedSideFilter = gql`
	query {
		sideFiltersFlags @client {
			deliveryAndPickup
			specialOffers
			price
			customerRating
		}
	}
`;

export const sortByQueries = {
	bestSellers: sortByAbstr('bestSellers'),
	priceHighToLow: sortByAbstr('priceLowToHigh'),
	priceLowToHigh: sortByAbstr('priceHighToLow'),
	highestRating: sortByAbstr('highestRating'),
	new: sortByAbstr('new'),
};
// end of local state queries

// end of local state mutations
export const furnitureDepartments = [
	'livingRoomFurniture',
	'kitchenAndDinningRoom',
	'officeFurniture',
	'bedroomFurniture',
	'kidsFurniture',
	'mattressesAndAccessories',
	'tvStandsAndEntertainmentCenters',
	'entrywayFurniture',
	'furnitureCollections',
	'smallSpaceFurniture',
];

// subdepartments information
export const furnitureDepartmentsQueries = [
	livingRoomFurnitureQuery,
	kitchenAndDinningRoomQuery,
	officeFurnitureQuery,
	bedroomFurnitureQuery,
	kidsFurnitureQuery,
	mattressesAndAccessoriesQuery,
	tvStandsAndEntertainmentCentersQuery,
	entrywayFurnitureQuery,
	furnitureCollectionsQuery,
	smallSpaceFurnitureQuery,
];

export const departmentNames = {
	shopHomeFurnishingName,
	homeFurnitureName,
	bedroomFurnitureName: departmentName('bedroomFurniture'),
	entrywayFurnitureName: departmentName('entrywayFurniture'),
	furnitureCollectionsName: departmentName('furnitureCollections'),
	kidsFurnitureName: departmentName('kidsFurniture'),
	kitchenAndDinningRoomName: departmentName('kitchenAndDinningRoom'),
	livingRoomFurnitureName: departmentName('livingRoomFurniture'),
	mattressesAndAccessoriesName: departmentName('mattressesAndAccessories'),
	officeFurnitureName: departmentName('officeFurniture'),
	smallSpaceFurnitureName: departmentName('smallSpaceFurniture'),
	tvStandsAndEntertainmentCentersName: departmentName('tvStandsAndEntertainmentCenters'),
};
