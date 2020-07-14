import React from 'react';
// hoist up constant jsx
const _fDO35 = (
	<span>
		<div>
			<span>Free delivery</span>
		</div>
		<div>
			<span>on orders over $35</span>
		</div>
	</span>
);

const _fD = (
	<span>
		<div>
			<span>Free delivery</span>
		</div>
	</span>
);

const _fP = (
	<span>
		<span>Free pickup</span>
	</span>
);

const _fPT = (
	<span>
		<div>
			<span>Free pickup today</span>
		</div>
	</span>
);

// end of constants

export default function Options({ options }) {
	if (options) {
		if (options.freeDeliveryOver35) {
			return _fDO35;
		} else if (options.freeDelivery) {
			return _fD;
		} else if (options.freePickup) {
			return _fP;
		} else if (options.freePickupToday) {
			return _fPT;
		} else if (options.soldAndShippedBy) {
			return (
				<span>
					<div>
						<span style={{ whiteSpace: 'pre-line' }}>
							{`Sold & shipped by\n`}
							{options.soldAndShippedBy[0]}
						</span>
					</div>
				</span>
			);
		} else if (options.unknownOption1) {
			return (
				<span>
					<div>
						<span>{options.unknownOption1}</span>
					</div>
				</span>
			);
		} else if (options.unknownOption2) {
			return (
				<span>
					<div>
						{/* <span> */}
						{options.unknownOption2[0]}
						{options.unknownOption2[1]}
						{/* </span> */}
					</div>
				</span>
			);
		} else return null;
	} else return null;
}
