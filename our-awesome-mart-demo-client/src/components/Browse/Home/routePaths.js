const GEN_ROUTE_PATH = '/search/home/furniture';
export const dp = [
	'living room furniture',
	'kitchen & dinning room',
	'office furniture',
	'bedroom furniture',
	'kids furniture',
	'mattresses & accessories',
	'tv stands & entertainment centers',
	'entryway furniture',
	'furniture collections',
	'small space furniture',
];

function route(item) {
	return `${GEN_ROUTE_PATH}/${item}`;
}

function routesWithDept(dept) {
	return function (arr) {
		return arr.map((item) => dept ? `${route(dept)}/${item}` : route(item))
	};
}
 
// global assignable reference
var getRoutes = null;

export const furnitureRoutes = routesWithDept()(dp);

getRoutes = routesWithDept(dp[0]);
export const livingRoomFurnitureRoutes = getRoutes([
	`accent chairs`,
	`bookcases & bookshelves`,
	`chaise lounge`,
	`coffee tables`,
	`console & sofa tables`,
	`end tables`,
	`futons`,
	`living room collections`,
	`loveseats`,
	`sofa beds`,
	`sofas & couches`,
]);
getRoutes = routesWithDept(dp[1]);
export const kitchenAndDinningRoomRoutes = getRoutes([
	'baker racks',
	'bar stools & counter stools',
	'card table & chair sets',
	'dinning chairs',
	'folding chairs',
	'folding tables',
	'folding tables & chairs',
	'home bar furniture',
	'kitchen & dinning collections',
	'microwave carts',
	'pub tables & sets',
	'sideboards & buffets',
]);
getRoutes = routesWithDept(dp[2]);
export const officeFurnitureRoutes = getRoutes([
	'2-6 cube storage organizers',
	'2 drawer file cabinets',
	'13 Inch cube store',
	'accessories',
	'business office furniture',
	'ergonomic chairs',
	'ergonomic desks',
	'folding tables & chairs',
	'11 Inch cube store',
	'rolling file cabinets',
	'vertical file cabinets',
]);
getRoutes = routesWithDept(dp[3]);
export const bedroomFurnitureRoutes = getRoutes([
	'bed frames & box springs',
	'bed risers',
	'bedroom collections',
	'beds',
	'benches',
	'folding beds',
	'headboards',
	'mattresses & accessories',
]);
getRoutes = routesWithDept(dp[4]);
export const kidsFurnitureRoutes = getRoutes([
	'bunk beds',
	'daycare furniture',
	'kids bedroom sets',
	'kids beds & headboards',
	'kids chairs & seating',
	'kids collection',
	'kids dressers & armoires',
	'kids loft beds',
	'kids nightstand & Vanities',
	'kids step stool',
	'kids tables & chair sets',
])
getRoutes = routesWithDept(dp[5]);
export const mattressesAndAccessoriesRoutes = getRoutes([
	'futon mattresses',
	'mattress protectors',
	'mattress toppers',
	'shop mattresses by size',
])
getRoutes = routesWithDept(dp[6]);
export const tvStandsAndEntertainmentCentersRoutes = getRoutes([
	'audio & media towers',
	'black TV stands',
	'corner stands',
	'entertainment centers',
	'espresso entertainment centers',
	'espresso TV stands',
	'farm house entertainment centers',
	'farm house TV stands',
	'flat screen TV stands',
	'floating TV stands',
	'glass entertainment centers',
	'glass TV stands',
	'home entertainment collections',
	'home theater seating',
	'metal entertainment centers',
	'mid century entertainment centers',
	'modern entertainment centers',
	'modern TV stands',
	'oak entertainment centers',
	'oak TV stands',
	'rustic entertainment centers',
	'rustic TV stands',
	'small entertainment centers',
	'speaker stands',
	'tall entertainment centers',
	'traditional entertainment centers',
	'TV stands',
	'TV stands with mount',
	'TV stands with storage',
	'TV stands with wheels',
	'wallnut TV stands',
	'white entertainment centers',
	'white TV stands',
	'wood entertainment centers',
	'wood TV stands',
]);
getRoutes = routesWithDept(dp[7]);
export const entrywayFurnitureRoutes = getRoutes([
	'benches',
	'cabinets & chests',
	'coat racks',
	'corner stands',
	'farm house hall trees',
	'freestanding coat racks',
	'hall trees',
	'over the door coat racks',
	'shoe cabinets',
	'traditional hall trees',
	'umbrella racks & stands',
	'wall mounted coat racks',
])
getRoutes = routesWithDept(dp[8]);
export const furnitureCollectionsRoutes = getRoutes([
	'bedroom collections',
	'home entertainment collections',
	'kitchen & dinning collections',
	'living room collections',
	'office collections',
])
getRoutes = routesWithDept(dp[9]);
export const smallSpaceFurnitureRoutes = getRoutes([
	'bedroom',
	'kitchen & dinning',
	'living room',
	'mattresses',
	'study room',
]);

export const departmentRoutes = {
	livingRoomFurniture: livingRoomFurnitureRoutes,
	kitchenAndDinningRoom: kitchenAndDinningRoomRoutes,
	officeFurniture: officeFurnitureRoutes,
	bedroomFurniture: bedroomFurnitureRoutes,
	kidsFurniture: kidsFurnitureRoutes,
	mattressesAndAccessories: mattressesAndAccessoriesRoutes,
	tvStandsAndEntertainmentCenters: tvStandsAndEntertainmentCentersRoutes,
	entrywayFurniture: entrywayFurnitureRoutes,
	furnitureCollections: furnitureCollectionsRoutes,
	smallSpaceFurniture: smallSpaceFurnitureRoutes,
};
