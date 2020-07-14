import React from 'react';

function ProductIsElement({ product, path = 'M 0 0 L 100 0 L 90 30 L 0 30 Z' }) {
	return (
		<svg className="BestSeller" xmlns="http://www.w3.org/2000/svg">
			<path className="LineStroke" d={path} />
			<text x="0" y="20" className="ProductFlag">
				{product}
			</text>
		</svg>
	);
}

export default function ProductIs({ product }) {
	return product !== '' ? (
		product === 'BEST SELLER' || product === 'CLEARANCE' || product === 'ROLLBACK' || product === 'NEW' ? (
			<ProductIsElement product={product} />
		) : (
			<ProductIsElement product={product} path={'M 0 0 L 125 0 L 112 30 L 0 30 Z'} />
		)
	) : null;
}
