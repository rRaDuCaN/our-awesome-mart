const { readDataSet, toPipe } = require('../../helperFuncs');

const homeFurnitureData = toPipe(readDataSet, JSON.parse)('src/search/wholeDataShopHomeFurnishing.json');

const resolvers = {
	Query: {
		shopHomeFurnishing: () => homeFurnitureData,
	},

	ShopHomeFurnishing: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		homeFurniture: (parent) => {
			return parent.homeFurniture;
		},
	},
	HomeFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		categories: (parent) => {
			return parent.categories;
		},
		subdepartmentNames: (parent) => {
			return parent.subdepartmentNames;
		},
	},
	HomeFurnitureCategories: {
		bedroomFurniture: (parent) => {
			return parent.bedroomFurniture;
		},
		entrywayFurniture: (parent) => {
			return parent.entrywayFurniture;
		},
		furnitureCollections: (parent) => {
			return parent.furnitureCollections;
		},
		kidsFurniture: (parent) => {
			return parent.kidsFurniture;
		},
		kitchenAndDinningRoom: (parent) => {
			return parent.kitchenAndDinningRoom;
		},
		livingRoomFurniture: (parent) => {
			return parent.livingRoomFurniture;
		},
		mattressesAndAccessories: (parent) => {
			return parent.mattressesAndAccessories;
		},
		officeFurniture: (parent) => {
			return parent.officeFurniture;
		},
		smallSpaceFurniture: (parent) => {
			return parent.smallSpaceFurniture;
		},
		tvStandsAndEntertainmentCenters: (parent) => {
			return parent.tvStandsAndEntertainmentCenters;
		},
	},
	ProductPrice: {
		currentPriceFirstType: (parent) => {
			return parent.currentPriceFirstType ? parent.currentPriceFirstType : null;
		},
		currentPriceSecondType: (parent) => {
			return parent.currentPriceSecondType ? parent.currentPriceSecondType : null;
		},
		currentPriceThirdType: (parent) => {
			return parent.currentPriceThirdType ? parent.currentPriceThirdType : null;
		},
		currentPriceFourthType: (parent) => {
			return parent.currentPriceFourthType ? parent.currentPriceFourthType : null;
		},
	},
	Options: {
		soldAndShippedBy: (parent) => {
			return parent.soldAndShippedBy;
		},
		freePickup: (parent) => {
			return parent.freePickup;
		},
		freePickupToday: (parent) => {
			return parent.freePickupToday;
		},
		freeDelivery: (parent) => {
			return parent.freeDelivery;
		},
		freeDeliveryOver35: (parent) => {
			return parent.freeDeliveryOver35;
		},
		unknownOption1: (parent) => {
			return parent.unknownOption1;
		},
		unknownOption2: (parent) => {
			return parent.unknownOption2;
		},
	},
	Action: {
		addToCart: (parent) => {
			return parent.addToCart ? parent.addToCart : false;
		},
		chooseOptions: (parent) => {
			return parent.chooseOptions ? parent.chooseOptions : false;
		},
	},
	Cart: {
		productIs: (parent) => {
			return parent.productIs ? parent.productIs : '';
		},
		productTitle: (parent) => {
			return parent.productTitle ? parent.productTitle : '';
		},
		ratings: (parent) => {
			return parent.ratings ? parent.ratings : '';
		},
		price: (parent) => {
			return parent.price;
		},
		options: (parent) => {
			return parent.options;
		},
		action: (parent) => {
			return parent.action;
		},
		imgName: (parent) => {
			return parent.imgName;
		},
		imgURL: (parent) => {
			return parent.imgURL;
		},
	},
	// Pages: {
	// 	p1: (parent) => (parent.p1 ? parent.p1 : null),
	// 	p2: (parent) => (parent.p2 ? parent.p2 : null),
	// 	p3: (parent) => (parent.p3 ? parent.p3 : null),
	// 	p4: (parent) => (parent.p4 ? parent.p4 : null),
	// 	p5: (parent) => (parent.p5 ? parent.p5 : null),
	// 	p6: (parent) => (parent.p6 ? parent.p6 : null),
	// 	p7: (parent) => (parent.p7 ? parent.p7 : null),
	// 	p8: (parent) => (parent.p8 ? parent.p8 : null),
	// 	p9: (parent) => (parent.p9 ? parent.p9 : null),
	// 	p10: (parent) => (parent.p10 ? parent.p10 : null),
	// 	p11: (parent) => (parent.p11 ? parent.p11 : null),
	// 	p12: (parent) => (parent.p12 ? parent.p12 : null),
	// 	p13: (parent) => (parent.p13 ? parent.p13 : null),
	// 	p14: (parent) => (parent.p14 ? parent.p14 : null),
	// 	p15: (parent) => (parent.p15 ? parent.p15 : null),
	// 	p16: (parent) => (parent.p16 ? parent.p16 : null),
	// 	p17: (parent) => (parent.p17 ? parent.p17 : null),
	// 	p18: (parent) => (parent.p18 ? parent.p18 : null),
	// 	p19: (parent) => (parent.p19 ? parent.p19 : null),
	// 	p20: (parent) => (parent.p20 ? parent.p20 : null),
	// 	p21: (parent) => (parent.p21 ? parent.p21 : null),
	// 	p22: (parent) => (parent.p22 ? parent.p22 : null),
	// 	p23: (parent) => (parent.p23 ? parent.p23 : null),
	// 	p24: (parent) => (parent.p24 ? parent.p24 : null),
	// 	p25: (parent) => (parent.p25 ? parent.p25 : null),
	// },
	SubcategoryName: {
		name: (parent) => parent.name,
		limit: (parent) => parent.limit,
		page: (parent, { p }) => parent.pages[p],
	},
	BedroomFurnitureSubcats: {
		bedFramesAndBoxSprings: (parent) => {
			return parent.bedFramesAndBoxSprings;
		},
		bedRisers: (parent) => {
			return parent.bedRisers;
		},
		bedroomCollections: (parent) => {
			return parent.bedroomCollections;
		},
		bedroomFurnitureMain: (parent) => {
			return parent.bedroomFurnitureMain;
		},
		beds: (parent) => {
			return parent.beds;
		},
		benches: (parent) => {
			return parent.benches;
		},
		foldingBeds: (parent) => {
			return parent.foldingBeds;
		},
		headboards: (parent) => {
			return parent.headboards;
		},
		mattressesAndAccessories: (parent) => {
			return parent.mattressesAndAccessories;
		},
	},
	BedroomFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	EntrywayFurnitureSubcats: {
		benches: (parent) => {
			return parent.benches;
		},
		cabinetsAndChests: (parent) => {
			return parent.cabinetsAndChests;
		},
		coatRacks: (parent) => {
			return parent.coatRacks;
		},
		contemporaryHallTrees: (parent) => {
			return parent.contemporaryHallTrees;
		},
		cornerStands: (parent) => {
			return parent.cornerStands;
		},
		entrywayFurnitureMain: (parent) => {
			return parent.entrywayFurnitureMain;
		},
		farmHouseHallTrees: (parent) => {
			return parent.farmHouseHallTrees;
		},
		freestandingCoatRacks: (parent) => {
			return parent.freestandingCoatRacks;
		},
		hallTrees: (parent) => {
			return parent.hallTrees;
		},
		overTheDoorCoatRacks: (parent) => {
			return parent.overTheDoorCoatRacks;
		},
		shoeCabinets: (parent) => {
			return parent.shoeCabinets;
		},
		traditionalHallTrees: (parent) => {
			return parent.traditionalHallTrees;
		},
		umbrellaRacksAndStands: (parent) => {
			return parent.umbrellaRacksAndStands;
		},
		wallMountedCoatRacks: (parent) => {
			return parent.wallMountedCoatRacks;
		},
	},
	EntrywayFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	FurnitureCollectionsSubcats: {
		bedroomCollections: (parent) => {
			return parent.bedroomCollections;
		},
		furnitureCollectionsMain: (parent) => {
			return parent.furnitureCollectionsMain;
		},
		homeEntertainmentCollections: (parent) => {
			return parent.homeEntertainmentCollections;
		},
		kitchenAndDinningCollections: (parent) => {
			return parent.kitchenAndDinningCollections;
		},
		livingRoomCollections: (parent) => {
			return parent.livingRoomCollections;
		},
		officeCollections: (parent) => {
			return parent.officeCollections;
		},
	},
	FurnitureCollections: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	KidsFurnitureSubcats: {
		bunkBeds: (parent) => {
			return parent.bunkBeds;
		},
		daycareFurniture: (parent) => {
			return parent.daycareFurniture;
		},
		kidsBedroomSets: (parent) => {
			return parent.kidsBedroomSets;
		},
		kidsBedsAndHeadboards: (parent) => {
			return parent.kidsBedsAndHeadboards;
		},
		kidsChairsAndSeating: (parent) => {
			return parent.kidsChairsAndSeating;
		},
		kidsCollection: (parent) => {
			return parent.kidsCollection;
		},
		kidsDressersAndArmoires: (parent) => {
			return parent.kidsDressersAndArmoires;
		},
		kidsFurnitureMain: (parent) => {
			return parent.kidsFurnitureMain;
		},
		kidsLoftBeds: (parent) => {
			return parent.kidsLoftBeds;
		},
		kidsNightstandAndVanities: (parent) => {
			return parent.kidsNightstandAndVanities;
		},
		kidsStepStool: (parent) => {
			return parent.kidsStepStool;
		},
		kidsTablesAndChairSets: (parent) => {
			return parent.kidsTablesAndChairSets;
		},
	},
	KidsFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	KitchenAndDinningRoomSubcats: {
		bakerRacks: (parent) => {
			return parent.bakerRacks;
		},
		barStoolsAndCounterStools: (parent) => {
			return parent.barStoolsAndCounterStools;
		},
		cardTableAndChairSets: (parent) => {
			return parent.cardTableAndChairSets;
		},
		dinningChairs: (parent) => {
			return parent.dinningChairs;
		},
		foldingChairs: (parent) => {
			return parent.foldingChairs;
		},
		foldingTables: (parent) => {
			return parent.foldingTables;
		},
		foldingTablesAndChairs: (parent) => {
			return parent.foldingTablesAndChairs;
		},
		homeBarFurniture: (parent) => {
			return parent.homeBarFurniture;
		},
		kitchenAndDinningCollections: (parent) => {
			return parent.kitchenAndDinningCollections;
		},
		kitchenAndDinningRoomMain: (parent) => {
			return parent.kitchenAndDinningRoomMain;
		},
		microwaveCarts: (parent) => {
			return parent.microwaveCarts;
		},
		pubTablesAndSets: (parent) => {
			return parent.pubTablesAndSets;
		},
		sideboardsAndBuffets: (parent) => {
			return parent.sideboardsAndBuffets;
		},
	},
	KitchenAndDinningRoom: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	LivingRoomFurnitureSubcats: {
		accentChairs: (parent) => {
			return parent.accentChairs;
		},
		bookcasesAndBookshelves: (parent) => {
			return parent.bookcasesAndBookshelves;
		},
		chaiseLounge: (parent) => {
			return parent.chaiseLounge;
		},
		coffeeTables: (parent) => {
			return parent.coffeeTables;
		},
		consoleAndSofaTables: (parent) => {
			return parent.consoleAndSofaTables;
		},
		endTables: (parent) => {
			return parent.endTables;
		},
		futons: (parent) => {
			return parent.futons;
		},
		livingRoomCollections: (parent) => {
			return parent.livingRoomCollections;
		},
		livingRoomFurnitureMain: (parent) => {
			return parent.livingRoomFurnitureMain;
		},
		loveseats: (parent) => {
			return parent.loveseats;
		},
		sofaBeds: (parent) => {
			return parent.sofaBeds;
		},
		sofasAndCouches: (parent) => {
			return parent.sofasAndCouches;
		},
		tvStandsAndEntertainmentCenters: (parent) => {
			return parent.tvStandsAndEntertainmentCenters;
		},
	},
	LivingRoomFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	MattressesAndAccessoriesSubcats: {
		futonMattresses: (parent) => {
			return parent.futonMattresses;
		},
		mattressesAndAccessoriesMain: (parent) => {
			return parent.mattressesAndAccessoriesMain;
		},
		mattressProtectors: (parent) => {
			return parent.mattressProtectors;
		},
		mattressSets: (parent) => {
			return parent.mattressSets;
		},
		mattressToppers: (parent) => {
			return parent.mattressToppers;
		},
		shopMattressesBySize: (parent) => {
			return parent.shopMattressesBySize;
		},
	},
	MattressesAndAccessories: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	OfficeFurnitureSubcats: {
		twoOrSixCubeStorageOrganizers: (parent) => {
			return parent.twoOrSixCubeStorageOrganizers;
		},
		twoDrawerFileCabinets: (parent) => {
			return parent.twoDrawerFileCabinets;
		},
		thirteenInchCubeStore: (parent) => {
			return parent.thirteenInchCubeStore;
		},
		accessories: (parent) => {
			return parent.accessories;
		},
		businessOfficeFurniture: (parent) => {
			return parent.businessOfficeFurniture;
		},
		ergonomicChairs: (parent) => {
			return parent.ergonomicChairs;
		},
		ergonomicDesks: (parent) => {
			return parent.ergonomicDesks;
		},
		foldingTablesAndChairs: (parent) => {
			return parent.foldingTablesAndChairs;
		},
		elevenInchCubeStore: (parent) => {
			return parent.elevenInchCubeStore;
		},
		officeFurnitureMain: (parent) => {
			return parent.officeFurnitureMain;
		},
		rollingFileCabinets: (parent) => {
			return parent.rollingFileCabinets;
		},
		verticalFileCabinets: (parent) => {
			return parent.verticalFileCabinets;
		},
	},
	OfficeFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	SmallSpaceFurnitureSubcats: {
		bedroom: (parent) => {
			return parent.bedroom;
		},
		kitchenAndDinning: (parent) => {
			return parent.kitchenAndDinning;
		},
		livingRoom: (parent) => {
			return parent.livingRoom;
		},
		mattresses: (parent) => {
			return parent.mattresses;
		},
		smallSpaceFurnitureMain: (parent) => {
			return parent.smallSpaceFurnitureMain;
		},
		studyRoom: (parent) => {
			return parent.studyRoom;
		},
	},
	SmallSpaceFurniture: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
	TVStandsAndEntertainmentCentersSubcats: {
		audioAndMediaTowers: (parent) => {
			return parent.audioAndMediaTowers;
		},
		blackTvStands: (parent) => {
			return parent.blackTvStands;
		},
		cornerStands: (parent) => {
			return parent.cornerStands;
		},
		entertainmentCenters: (parent) => {
			return parent.entertainmentCenters;
		},
		espressoEntertainmentCenters: (parent) => {
			return parent.espressoEntertainmentCenters;
		},
		espressoTvStands: (parent) => {
			return parent.espressoTvStands;
		},
		farmHouseEntertainmentCenters: (parent) => {
			return parent.farmHouseEntertainmentCenters;
		},
		farmHouseTvStands: (parent) => {
			return parent.farmHouseTvStands;
		},
		flatScreenTvStands: (parent) => {
			return parent.flatScreenTvStands;
		},
		floatingTvStands: (parent) => {
			return parent.floatingTvStands;
		},
		glassEntertainmentCenters: (parent) => {
			return parent.glassEntertainmentCenters;
		},
		glassTvStands: (parent) => {
			return parent.glassTvStands;
		},
		homeEntertainmentCollections: (parent) => {
			return parent.homeEntertainmentCollections;
		},
		homeTheaterSeating: (parent) => {
			return parent.homeTheaterSeating;
		},
		metalEntertainmentCenters: (parent) => {
			return parent.metalEntertainmentCenters;
		},
		metalTvStands: (parent) => {
			return parent.metalTvStands;
		},
		midCenturyEntertainmentCenters: (parent) => {
			return parent.midCenturyEntertainmentCenters;
		},
		modernEntertainmentCenters: (parent) => {
			return parent.modernEntertainmentCenters;
		},
		modernTvStands: (parent) => {
			return parent.modernTvStands;
		},
		oakEntertainmentCenters: (parent) => {
			return parent.oakEntertainmentCenters;
		},
		oakTvStands: (parent) => {
			return parent.oakTvStands;
		},
		rusticEntertainmentCenters: (parent) => {
			return parent.rusticEntertainmentCenters;
		},
		rusticTvStands: (parent) => {
			return parent.rusticTvStands;
		},
		smallEntertainmentCenters: (parent) => {
			return parent.smallEntertainmentCenters;
		},
		speakerStands: (parent) => {
			return parent.speakerStands;
		},
		tallEntertainmentCenters: (parent) => {
			return parent.tallEntertainmentCenters;
		},
		traditionalEntertainmentCenters: (parent) => {
			return parent.traditionalEntertainmentCenters;
		},
		tvStands: (parent) => {
			return parent.tvStands;
		},
		tvStandsAndEntertainmentCentersMain: (parent) => {
			return parent.tvStandsAndEntertainmentCentersMain;
		},
		tvStandsWithMount: (parent) => {
			return parent.tvStandsWithMount;
		},
		tvStandsWithStorage: (parent) => {
			return parent.tvStandsWithStorage;
		},
		tvStandsWithWheels: (parent) => {
			return parent.tvStandsWithWheels;
		},
		wallnutTvStands: (parent) => {
			return parent.wallnutTvStands;
		},
		whiteEntertainmentCenters: (parent) => {
			return parent.whiteEntertainmentCenters;
		},
		whiteTvStands: (parent) => {
			return parent.whiteTvStands;
		},
		woodEntertainmentCenters: (parent) => {
			return parent.woodEntertainmentCenters;
		},
		woodTvStands: (parent) => {
			return parent.woodTvStands;
		},
	},
	TVStandsAndEntertainmentCenters: {
		categoryName: (parent) => {
			return parent.categoryName;
		},
		subcategories: (parent) => {
			return parent.subcategories;
		},
	},
};

module.exports = resolvers;
