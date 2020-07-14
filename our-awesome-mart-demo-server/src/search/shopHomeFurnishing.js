const chalk = require('chalk');
const { JSON_prettify, readDataFiles, readDataSet, toPipe, writeDataSet } = require('../../helperFuncs');

const dataDirectory = 'src/shopHomeFurnishing_copy/homeFurniture';
const DATA_FILES = readDataFiles(dataDirectory);
console.log(chalk.cyan`DATA_FILES gotten :)`);
let count = 0;

const FILES = toPipe((homeFurnishingBranches) => {
	const returnedFiles = [];
	let aboutToBeRead = '';

	function pushFile(data) {
		returnedFiles.push(data);
	}

	for (const dataFile of homeFurnishingBranches) {
		aboutToBeRead = dataDirectory.concat('/').concat(dataFile);
		toPipe(readDataFiles, pushFile)(aboutToBeRead);
	}
	return returnedFiles;
})(DATA_FILES);
console.log(chalk.cyan`FILES gotten :)`);

const BASE_URL = 'http://localhost:4000/static/';
const IMG_DIRECTORY = 'imgs/search/shopHomeFurnishing/homeFurniture';
const IMG_FOLDER_PATH = `public/${IMG_DIRECTORY}`;
const IMG_SUBDIRS = ((imgFolders) => {
	const imgSubs = [];
	const pushItem = (data) => {
		imgSubs.push(data);
	};

	for (const imgFolder of imgFolders) {
		toPipe(readDataFiles, pushItem)(`${IMG_FOLDER_PATH}/${imgFolder}`);
	}
	return imgSubs;
})(DATA_FILES);

const categories = [
	'Bedroom Furniture',
	'Entryway Furniture',
	'Furniture Collections',
	'Kids Furniture',
	'Kitchen & Dinning Room',
	'Living Room Furniture',
	'Mattresses & Accessories',
	'Office Furniture',
	'Small Space Furniture',
	'TV Stands & Entertainment Centers',
];

const homeFurnitureSubCategories = {
	bedroomFurniture: {
		bedFramesAndBoxSprings: 'Bed frames & Box Springs',
		bedRisers: 'Bed Risers',
		bedroomCollections: 'Bedroom Collections',
		bedroomFurnitureMain: 'Bedroom Furniture Main',
		beds: 'Beds',
		benches: 'Benches',
		foldingBeds: 'Folding Beds',
		headboards: 'Head Boards',
		mattressesAndAccessories: 'Mattresses & Accessories',
	},
	entrywayFurniture: {
		benches: 'Benches',
		cabinetsAndChests: 'Cabinets & Chests',
		coatRacks: 'Coat Racks',
		contemporaryHallTrees: 'Contemporary Hall Trees',
		cornerStands: 'Corner Stands',
		entryWayFurnitureMain: 'Entryway Furniture Main',
		farmHouseHallTrees: 'Farm House Hall Trees',
		freeStandingCoatRacks: 'Free Standing Coat Racks',
		hallTrees: 'Hall Trees',
		overTheDoorCoatRacks: 'Over the Door Coat Racks',
		shoeCabinets: 'Shoe Cabinets',
		traditionalHallTrees: 'Traditional Hall Trees',
		umbrellaRacksAndStands: 'Umbrella racks & Stands',
		wallMountedCoatRacks: 'Wall Mounted coat Racks',
	},
	furnitureCollections: {
		bedroomCollections: 'Bedroom Collections',
		furnitureCollectionsMain: 'Furniture Collections Main',
		homeEntertainmentCollections: 'Home Entertainment Collections',
		kitchenAndDinningCollections: 'Kitchen & Dinning Collections',
		livingRoomCollections: 'Living Room Collections',
		officeCollections: 'Office Collections',
	},
	kidsFurniture: {
		bunkBeds: 'Bunk Beds',
		daycareFurniture: 'Daycare Furniture',
		kidsBedroomSets: 'Kids Bedroom Sets',
		kidsBedsAndHeadboards: 'Kids Beds & Headboards',
		kidsChairsAndSeating: 'Kids Chairs & Seating',
		kidsCollection: 'Kids Collection',
		kidsDressersAndArmoires: 'Kids Dressers & Armoires',
		kidsFurnitureMain: 'Kids Furniture Main',
		kidsLoftBeds: 'Kids Loft Beds',
		kidsNightStandAndVanities: 'Kids Night Stand & Vanities',
		kidsStepStool: 'Kids Step Stool',
		kidsTablesAndChairSets: 'Kids Tables & Chair Sets',
	},
	kitchenAndDinningRoom: {
		bakerRacks: 'Baker Racks',
		BarStoolsAndCounterStools: 'Bar Stools & Counter Stools',
		carTableAndChairSets: 'Car Table & Chair Sets',
		dinningChairs: 'Dinning Chairs',
		foldingChairs: 'Folding Chairs',
		foldingTables: 'Folding Tables',
		foldingTablesAndChairs: ' Folding Tables & Chairs',
		homeBarFurniture: 'Home Bar Furniture',
		kitchenAndDinningCollections: 'Kitchen & Dinning Collections',
		kitchenAndDinninRoomMain: 'Kitchen & Dinning Room Main',
		microwaveCarts: 'Microwave Carts',
		pubTablesAndSets: 'Pub Tables & Sets',
		sideboardsAndBuffers: 'Sideboards & Buffers',
	},
	livingRoomFurniture: {
		accentChairs: 'Accent Chairs',
		bookcasesAndBookshelves: 'Bookcases & Bookshelves',
		chaiseLounge: 'Chaise Lounge',
		coffeeTables: 'Coffee Tables',
		consoleAndSofaTables: 'Console & Sofa Tables',
		endTables: 'End Tables',
		futons: 'Futons',
		livingRoomCollections: 'Living Room Collections',
		livingRoomFurnitureMain: 'Living Room Furniture Main',
		loveseats: 'Love Seats',
		sofaBeds: 'Sofa Beds',
		sofasAndCouches: 'Sofas & Couches',
		tvStandsEntertainmentCenters: ' TV Stands & EntertainmentCenters',
	},
	mattressesAndAccessories: {
		futonMattresses: 'Futon Mattresses',
		mattressesAndAccessoriesMain: 'Mattresses & Accessories Main',
		mattressProtectors: 'Mattress Protectors',
		mattressSets: 'Mattress Sets',
		mattressToppers: 'Mattress Toppers',
		shopMattressesBySize: 'Shop MAttresses By Size',
	},
	officeFurniture: {
		accessories: 'Accessories',
		businessOfficeFurniture: 'Business Office Furniture',
		elevenInchCubeStore: '11 Inch Cube Store',
		ergonomicChairs: 'Ergonomic Chairs',
		ergonomicDesks: 'Ergonomic Desks',
		foldingTablesAndChairs: 'Folding Tables & Chairs',
		officeFurnitureMain: 'Office Furniture Main',
		rollingFileCabinets: 'Rolling File Cabinets',
		thirteenInchCubeStore: '13 Inch Cube Store',
		twoDrawerFileCabinets: '2 Drawer File Cabinets',
		twoOrSixCubeStorageOrganizers: '2-6 Cube Storage Organizers',
		verticalFileCabinets: 'Vertical File Cabinets',
	},
	smallSpaceFurniture: {
		bedroom: 'Bedroom',
		kitchenAdnDinning: 'Kitchen & Dinning',
		livingRoom: 'Living Room',
		mattresses: 'Mattresses',
		smallSpaceFurnitureMain: 'Small Space Furniture Main',
		studyRoom: 'Study Room',
	},
	tvStandsAndEntertainmentCenters: {
		audioAndMediaTowers: 'Audio & Media Towers',
		blackTvStands: 'Black TV Stands',
		cornerStands: 'Corner Stands',
		entertainmentCenters: 'Entertainment Centers',
		espressoEntertainmentCenters: 'Espresso Entertainment Centers',
		espressoTvStands: 'Espresso TV Stands',
		farmHouseEntertainmentCenters: 'Farm House Entertainment Centers',
		farmHouseTvStands: 'Farm House TV Stands',
		flatScreeTvStands: 'Flat Screen TV Stands',
		floatingTvStands: 'Floating TV Stands',
		glassEntertainmentCenters: 'Glass Entertainment Centers',
		glassTvStands: 'Glass TV Stands',
		homeEntertainmentCollections: 'Home Entertainment Collections',
		homeTheaterSeating: 'Home Theater Seating',
		metalEntertainmentCenters: 'Metal Entertainment Centers',
		metalTvStands: 'Metal TV Stands',
		midCenturyEntertainmentCenters: 'Mid Century Entertainment Centers',
		modernEntertainmentCenters: 'Modern Entertainment Centers',
		modernTvStands: 'Modern TV Stands',
		oakEntertainmentCenters: 'Oak Entertainment Centers',
		oakTvStands: 'Oak TV Stands',
		rusticEntertainmentCenters: 'Rustic Entertainment Centers',
		rusticTvStands: 'Rustic TV Stands',
		smallEntertainmentCenters: 'Small Entertainment Centers',
		speakerStands: 'Speaker Stands',
		tallEntertainmentCenters: 'Tall Entertainment Centers',
		traditionalEntertainmentCenters: 'Traditional Entertainment Centers',
		tvStands: 'TV Stands',
		tvStandsAndEntertainmentCentersMain: 'TV Stands & Entertainment Centers Main',
		tvStandsWithMount: 'TV Stands With Mount',
		tvStandsWithStorage: 'TV Stands With Storage',
		tvStandsWithWheels: 'TV Stands With Wheels',
		wallnutTvStands: 'Wallnut TV Stands',
		whiteEntertainmentCenters: 'White Entertainment Centers',
		whiteTvStands: 'White TV Stands',
		woodEntertainmentCenters: 'Wood Entertainment Centers',
		woodTvStands: 'Wood TV Stands',
	},
};

function subcategorySchema(filePath, imgUrl) {
	const subdirFile = toPipe(readDataSet, JSON.parse)(filePath);

	function ifPropertyExists(obj, property) {
		const temp = obj.hasOwnProperty(property) ? obj[property] : undefined;
			return temp;
	}

	function ifPropertyExistsWrapper(subcat) {
		return function f(obj) {
			return ifPropertyExists(obj, subcat);
		};
	}
	

	return subdirFile.reduce((acc, curr) => {
		const ratings = curr.hasOwnProperty('ratings') ? curr.ratings.replace('ratings', '') : undefined;

		return [
			...acc,
			{
				productIs: toPipe(ifPropertyExistsWrapper('productIs'))(curr),
				productTitle: (() => {
					count++;
					return toPipe(ifPropertyExistsWrapper('productTitle'))(curr);
				})(),
				ratings,
				price: {
					currentPriceFirstType: toPipe(ifPropertyExistsWrapper('currentPriceFirstType'))(curr.price),
					currentPriceSecondType: toPipe(ifPropertyExistsWrapper('currentPriceSecondType'))(curr.price),
					currentPriceThirdType: toPipe(ifPropertyExistsWrapper('currentPriceThirdType'))(curr.price),
					currentPriceFourthType: toPipe(ifPropertyExistsWrapper('currentPriceFourthType'))(curr.price),
				},
				options: {
					soldAndShippedBy: toPipe(ifPropertyExistsWrapper('soldAndShippedBy'))(curr.options),
					freePickup: toPipe(ifPropertyExistsWrapper('freePickup'))(curr.options),
					freeDelivery: toPipe(ifPropertyExistsWrapper('freeDelivery'))(curr.options),
					freePickupToday: toPipe(ifPropertyExistsWrapper('freePickupToday'))(curr.options),
					freeDeliveryOnOrdersOver35: toPipe(ifPropertyExistsWrapper('freeDeliveryOnOrdersOver35'))(
						curr.options
					),
					unknownOption1: toPipe(ifPropertyExistsWrapper('unknownOption1'))(curr.options),
					unknownOption2: toPipe(ifPropertyExistsWrapper('unknownOption2'))(curr.options),
				},
				action: (() => {
					{
						const obj = {
							addToCart: curr.action.hasOwnProperty('addToCart') ? true : undefined,
							chooseOptions: curr.action.hasOwnProperty('chooseOptions') ? true : undefined,
						};

						return Object.keys(obj).length === 0 ? undefined : obj;
					}
				})(),
				// imgName: toPipe(ifPropertyExistsWrapper('imgName'))(curr),
				// imgURL: `${imgUrl}/${toPipe(ifPropertyExistsWrapper('imgName'))(curr)}.jpg`,
				imgURL: toPipe(ifPropertyExistsWrapper('imgLink'))(curr)
			},
		];
	}, []);
}

function createSchema() {
	let state = {};
	let filePath = '';


	const furnitureDepartmentsQueries = [
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

	const FILES_FOR_SUBDEPARTMENT_NAMES = toPipe((homeFurnishingBranches) => {
		const returnedFiles = [];
		let aboutToBeRead = '';
	
		function pushFile(data) {
			returnedFiles.push(data);
		}
	
		for (const dataFile of homeFurnishingBranches) {
			aboutToBeRead = dataDirectory.concat('/').concat(dataFile);
			toPipe(readDataFiles, pushFile)(aboutToBeRead);
		}
		return returnedFiles;
	})(furnitureDepartmentsQueries);

	const subdepartmentNames = (() => {
		return FILES_FOR_SUBDEPARTMENT_NAMES.reduce((acc, category, currIndex) => {
			const dataFile = furnitureDepartmentsQueries[currIndex];
			const redirectedSubCategory = homeFurnitureSubCategories[dataFile];
	
			const subcategoryNames = Object.keys(redirectedSubCategory);
	
			const subcategories = category.reduce((accInner, _, curIndexInner) => {
				const subcatName = subcategoryNames[curIndexInner];

				return subcatName.substring(subcatName.length - 4, subcatName.length) === 'Main' ? accInner : [
					...accInner,
					redirectedSubCategory[subcatName],
				];
			}, []);
	
			return [
				...acc,
				subcategories
			];
		}, []);
	})()

	state = FILES.reduce((acc, category, currIndex) => {
		const categoryName = categories[currIndex];
		const dataFile = DATA_FILES[currIndex];
		const redirectedSubCategory = homeFurnitureSubCategories[dataFile];
		const img_url = `${BASE_URL}${IMG_DIRECTORY}/${dataFile}`;

		const subcategoryNames = Object.keys(redirectedSubCategory);

		const subcategories = category.reduce((accInner, subcategory, curIndexInner) => {
			let property = subcategory.replace(/\.[^/.]+$/, '');
			filePath = `${dataDirectory}/${DATA_FILES[currIndex]}/${subcategory}`;
			let img_subdir = `${img_url}/${IMG_SUBDIRS[currIndex][curIndexInner]}`;
			const toData = subcategorySchema(filePath, img_subdir);
			const subcatName = subcategoryNames[curIndexInner];

			filePath = '';

			const arrangedBy40 = ((dataArr) => {
				let fortyElem = [];
				const toPredicate = dataArr.length / 40;
				let count = 0;
				let current = 0;
				let future = 40;

				if (toPredicate < 1 && toPredicate > 0) {
					count = 1;
				} else {
					if (dataArr.length % 40 === 0) {
						count = toPredicate;
					} else {
						count = Math.ceil(toPredicate);
					}
				}

				for (let i = 0; i < count; i++) {
					if (i === count - 1) {
						fortyElem.push(dataArr.slice(current));
					} else {
						fortyElem.push(dataArr.slice(current, future));
						current = future;
						future += 40;
					}
				}
				// return fortyElem;
				// make it suitable for offset pagination
				const readyForOffsetPagination = {
					limit: count,
					pages: fortyElem.reduce((acc, curr, currIndex) => {
						return {
							...acc,
							[`p${currIndex + 1}`]: curr
						}
					}, {})
				}

				return readyForOffsetPagination;
			})(toData);

			return {
				...accInner,
				[property]: {
					name: redirectedSubCategory[subcatName],
					// data: {...arrangedBy40},
					...arrangedBy40
				},
			};
		}, {});

		return {
			...acc,
			[dataFile]: {
				categoryName,
				subcategories,
			},
		};
	}, {});

	return {
		categoryName: 'Shop Home Furnishing',
		homeFurniture: {
			categoryName: 'Home Furniture',
			categories: state,
			subdepartmentNames
		},
	};
}

// add the whole schema to a JSON file
// path
const schemaPath = 'src/search/wholeDataShopHomeFurnishing.json';
const preparedSchema = createSchema();
console.log(chalk.green`Schema has been created`);

toPipe(JSON_prettify, writeDataSet(schemaPath))(preparedSchema);
console.log(chalk.green`writing is done :)`);
console.log(chalk.blue`There are_ ${count} _products`);
