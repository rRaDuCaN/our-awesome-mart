import { toPipe } from '../../../../../helpers';

// function flatened(arr) {
// 	return arr.flat();
// }

function parseToInt(strNumb) {
	return typeof strNumb !== 'undefined' && strNumb !== '' ? Number.parseInt(strNumb) : 0;
}

function parseToFloat(strNumb) {
	return typeof strNumb !== 'undefined' && strNumb !== '' ? Number.parseFloat(strNumb) : 0;
}

function getPrice(obj) {
	const removeDollarSign = (str) => str.replace(/\$/gi, '');
	const obtainedPrice = (strPrice) => toPipe(removeDollarSign, parseToFloat)(strPrice);

	if (obj.price.currentPriceFirstType !== null) {
		return obtainedPrice(obj.price.currentPriceFirstType[0]);
	} else if (obj.price.currentPriceSecondType !== null) {
		return obtainedPrice(obj.price.currentPriceSecondType);
	} else if (obj.price.currentPriceThirdType !== null) {
		return obtainedPrice(obj.price.currentPriceThirdType);
	} else if (obj.price.currentPriceFourthType !== null) {
		return obtainedPrice(obj.price.currentPriceFourthType);
	} else {
		// if the product has no price
		return 1;
	}
}

// function arraysOf40Elems(arr) {
// 	if (arr) {
// 		let placeholder = [];
// 		let counter = 1;

// 		arr.reduce((acc, curr, currIndex) => {
// 			if (counter === 40) {
// 				placeholder.push(acc);
// 				acc = [];
// 				counter = 0;
// 			} else if (currIndex === arr.length - 1) {
// 				placeholder.push(acc);
// 				counter = undefined;
// 			}
// 			counter++;
// 			return [...acc, curr];
// 		}, []);

// 		return placeholder;
// 	} else return null;
// }

function sortedArr(cb) {
	return (arr) => [...arr].sort(cb);
}

export const sortByFilters = {
	bestSellers: (productsArray) => productsArray.filter((item) => item.productIs === 'BEST SELLER'),
	priceHighToLow: (productsArray) => toPipe(sortedArr((a, b) => getPrice(b) - getPrice(a)))(productsArray),
	priceLowToHigh: (productsArray) => toPipe(sortedArr((a, b) => getPrice(a) - getPrice(b)))(productsArray),
	highestRating: (productsArray) =>
		toPipe(sortedArr((a, b) => parseToInt(b.ratings) - parseToInt(a.ratings)))(productsArray),
	new: (productsArray) =>
		toPipe((arr) => {
			return arr.filter((item) =>
				typeof item.productIs !== 'undefined' ? item.productIs.toUpperCase() === 'NEW' : null
			);
		})(productsArray),
};

// side filters

function piped(cb) {
	return (arr) => toPipe(cb)(arr);
}

function filteredOption(option) {
	return (array) => array.filter((item) => item.options[option] !== null);
}
//
export const deliveryAndPickup = {
	showAll: (arr) => arr,
	nextDayDelivery: (arr) => piped(filteredOption('freeDeliveryOnOrdersOver35'))(arr),
	twoDayDelivery: (arr) => piped(filteredOption('unknownOption2'))(arr),
	deliverToHome: (arr) => piped(filteredOption('unknownOption2'))(arr),
	freePickupPlusDiscount: (arr) => piped(filteredOption('unknownOption1'))(arr),
	freePickup: (arr) => piped(filteredOption('freePickup'))(arr),
	freePickupToday: (arr) => piped(filteredOption('freePickupToday'))(arr),
};

function filteredOffer(offer) {
	return (arr) => arr.filter((item) => item.productIs === offer);
}

export const specialOffers = {
	clearance: (arr) => piped(filteredOffer('CLEARANCE'))(arr),
	rollback: (arr) => piped(filteredOffer('ROLLBACK'))(arr),
	reducedPrice: (arr) => piped(filteredOffer('REDUCED PRICE'))(arr),
	specialBuy: (arr) => piped(filteredOffer('SPECIAL BUY'))(arr),
	new: (arr) => piped(filteredOffer('NEW'))(arr),
	asAdvertised: (arr) => piped(filteredOffer('AS ADVERTISED'))(arr),
};

function filterPriceByRange(from, to) {
	return (arr) =>
		arr.filter((item) => {
			const price = getPrice(item);
			return from !== 600 ? price >= from && price <= to : price > 600;
		});
}

export const price = {
	from0To75: (arr) => piped(filterPriceByRange(0, 75))(arr),
	from75To100: (arr) => piped(filterPriceByRange(75, 100))(arr),
	from100To150: (arr) => piped(filterPriceByRange(100, 150))(arr),
	from150To200: (arr) => piped(filterPriceByRange(150, 200))(arr),
	from200To250: (arr) => piped(filterPriceByRange(200, 250))(arr),
	from250To300: (arr) => piped(filterPriceByRange(250, 300))(arr),
	from300To500: (arr) => piped(filterPriceByRange(300, 500))(arr),
	from500To600: (arr) => piped(filterPriceByRange(500, 600))(arr),
	from600AndPlus: (arr) => piped(filterPriceByRange(600))(arr),
};

function filterStarsFrom(from) {
	return (arr) => arr.filter((item) => !Number.isNaN(item.ratings) && Number.parseInt(item.ratings) > from);
}

export const customerRating = {
	fiveStars: (arr) => piped(filterStarsFrom(700))(arr),
	fourStarsAndUp: (arr) => piped(filterStarsFrom(200))(arr),
	threeStarsAndUp: (arr) => piped(filterStarsFrom(100))(arr),
	twoStarsAndUp: (arr) => piped(filterStarsFrom(30))(arr),
	oneStarAndUp: (arr) => piped(filterStarsFrom(10))(arr),
};

export const getFilters = {
	deliveryAndPickup,
	specialOffers,
	price,
	customerRating,
};

// handler functions

// for FancyRadioBtn and FancyCheckbox
export const onChangeDetected = (property) => {
	// console.log('property: ', property);
	return (e) => {
		// console.log('returned: ', property(e.target.checked))
		return property(e.target.checked);
	};
}
