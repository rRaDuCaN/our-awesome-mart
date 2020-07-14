import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FilterByRatings from './FilterByRatings';
import AcordeonButton from './AcordeonButton';
import FancyRadioButton from './FancyRadioButton';
import FancyCheckbox from './FancyCheckbox';
import { getFilters } from './topAndSideFilterHelpers';

const delivery = {
	showAll: 'Show All',
	nextDayDelivery: 'NextDay Delivery',
	twoDayDelivery: '2-day delivery',
	deliverToHome: 'Deliver To Home',
	freePickupPlusDiscount: 'Free pickup + discount',
	freePickup: 'Free pickup',
	freePickupToday: 'Free pickup today',
};
const prices = {
	from0To75: '$0 - $75',
	from75To100: '$75 - $100',
	from100To150: '$100 - $150',
	from150To200: '$150 - $200',
	from200To250: '$200 - $250',
	from250To300: '$250 - $300',
	from300To500: '$300 - $500',
	from500To600: '$500 - $600',
	from600AndPlus: '$600+',
};

const specialOffersNames = {
	clearance: 'Clearance',
	rollback: 'Rollback',
	reducedPrice: 'Reduced Price',
	specialBuy: 'Special Buy',
	new: 'New',
	asAdvertised: 'As Advertised',
};

export default function SideFiltersImplementation({ productsSetter, routePaths, categs, dataArr }) {
	const deliveryAndPickupKeys = useRef(Object.keys(delivery));
	const specialOffersKeys = useRef(Object.keys(specialOffersNames));
	const priceKeys = useRef(Object.keys(prices));

	const onHandleChangeSideFilter = (appliedFlag) => {
		return (val) => {
			const func = getFilters[appliedFlag][val];
			const filteredArr = func(dataArr);
			return (predicate) => {
				if (predicate) {
					productsSetter(filteredArr.length !== 0 ? filteredArr : null);
				} else {
					productsSetter(null);
				}
			};
		};
	};

	return (
		<>
			<div className="Filters mg-pad0 flexStandard flexColumn fullWidth mobile-side-filters">
				<AcordeonButton filterTitle="Category">
					<div className="Category flexStandard flexColumn justifySelfFlexStart">
						<ul className="Category discless-list pad-inline-start-none no-mgBlockStart-mgBlockEnd">
							{categs &&
								categs.map((item, index) => (
									<li key={item} className="mg-t1 aligned-li">
										<Link
											to={routePaths[index]}
											role="link"
											aria-label={item}
											className="subcategoryColor textDecorationNone"
										>
											{item}
										</Link>
									</li>
								))}
						</ul>
					</div>
				</AcordeonButton>
				<AcordeonButton filterTitle={'Delivery & Pickup'}>
					<div className="flexStandard flexColumn justifySelfFlexStart fullWidth">
						<ul className="DeliveryAndPickup discless-list pad-inline-start-none alignSelfFlexStart no-mgBlockStart-mgBlockEnd">
							{deliveryAndPickupKeys.current.map((item, index) => (
								<li key={index} className="mg-t1">
									<div>
										<FancyRadioButton
											radioId={item}
											isChanged={onHandleChangeSideFilter('deliveryAndPickup')(item)}
										/>
										<span className="subcategoryColor">{delivery[item]}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</AcordeonButton>
				<AcordeonButton filterTitle="Special Offers">
					<div className="flexStandard flexColumn fullWidth">
						<ul className="SpecialOffers discless-list pad-inline-start-none alignSelfFlexStart no-mgBlockStart-mgBlockEnd">
							{specialOffersKeys.current.map((item) => (
								<li key={item} className="mg-t1">
									<div>
										<FancyCheckbox
											checkboxId={item}
											isChanged={onHandleChangeSideFilter('specialOffers')(item)}
										/>
										<span className="subcategoryColor">{specialOffersNames[item]}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</AcordeonButton>
				<AcordeonButton filterTitle="Price">
					<div className="Price alignSelfFlexStart fullWidth">
						<div className="flexStandard PriceSelector mg-b1">
							<div className="Min flexStandard subcategoryColor">
								<span>$</span>
								<input type="number" name="min" />
							</div>
							<div>-</div>
							<div className="Max flexStandard subcategoryColor">
								<span>$</span>
								<input type="number" name="max" />
							</div>
						</div>
						<ul className=" PriceList discless-list pad-inline-start-none no-mgBlockStart-mgBlockEnd">
							{priceKeys.current.map((item) => (
								<li key={item} className="mg-t1">
									<div>
										<FancyCheckbox
											checkboxId={item}
											isChanged={onHandleChangeSideFilter('price')(item)}
										/>
										<span className="subcategoryColor">{prices[item]}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</AcordeonButton>
				<AcordeonButton filterTitle="Costumer Rating">
					<FilterByRatings onChange={onHandleChangeSideFilter('customerRating')} />
				</AcordeonButton>
			</div>
		</>
	);
}
