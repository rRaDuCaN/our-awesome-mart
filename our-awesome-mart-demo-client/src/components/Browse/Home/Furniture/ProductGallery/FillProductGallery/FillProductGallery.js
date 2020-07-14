import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FillRatings from '../../Ratings/FillRatings';
import Price from '../../Price/Price';
import ProductIs from './ProductIs';
import Options from './Options';
import LoaderComponent from '../../../../../loader/LoaderComponent';

function Ratings({ ratings }) {
	if (!Number.isNaN(ratings)) {
		return <FillRatings param={ratings} />;
	} else return <FillRatings />;
}

export default function FillProductGallery({ gallery, gallerySetup }) {
	const fortyProducts = useRef(null);

	fortyProducts.current = gallery.map((item, index) => (
			<li className="fullWidth CartWrapper" key={index}>
				{gallerySetup === 'grid' ? (
					<div className="grid col-1 fullHeight Cart">
						<div className="ProductIsWrapper alignSelfFlexStart widthAuto">
							<div className="ProductIs fullWidth fullHeight">
								<span>
									<ProductIs product={item.productIs} />
								</span>
							</div>
						</div>
						<div className="height200 fullWidth flexArranged">
							<Link to="/" className="fullHeight">
								<img
									className="orientation-square"
									width="200"
									height="200"
									src={item.imgURL}
									loading="lazy"
									alt={item.productTitle}
								/>
							</Link>
						</div>
						<div className="ForAdditionalSelection fullWidth">{/* For additional purposes */}</div>
						<div className="ProductTitle fullWidth heightAuto">
							<Link
								to="/"
								className="ProductTitleLink subcategoryColor textDecorationNone"
								role="link"
								aria-label={`${item.productTitle}`}
							>
								<span>{item.productTitle}</span>
							</Link>
						</div>
						<div className="Ratings">
							<span className="flexStandard Stars">
								<Ratings ratings={Number.parseInt(item.ratings)} />
							</span>
						</div>
						<div className="ProductPriceWithFulfillment fullWidth heightAuto">
							<Price price={item.price} />
							<span className="subcategoryColor alignSelfFlexStart mg-b1">
								<Options options={item.options} />
							</span>
						</div>
					</div>
				) : (
					<div className="flexStandard fullHeight fullWidth CartList mg-b1 mg-t1">
						<div className="height200 img-order">
							<Link to="/" className="fullHeight">
								<img
									className="orientation-square"
									width="200"
									height="200"
									src={item.imgURL}
									loading="lazy"
									alt={item.productTitle}
								/>
							</Link>
						</div>
						<div className="pad-l2 pad-r2 fullHeight flexBasis60 alignSelfFlexStart descr-order">
							<div className="ProductIsWrapper alignSelfFlexStart widthAuto  pad-bott1rem">
								<div className="ProductIs fullWidth fullHeight">
									<span>
										<ProductIs product={item.productIs} />
									</span>
								</div>
							</div>
							<div className="ProductTitle fullWidth heightAuto pad-bott1rem">
								<Link
									to="/"
									className="ProductTitleLink AnchorBlackColor textDecorationNone font-400"
									role="link"
									aria-label={`${item.productTitle}`}
								>
									<span>{item.productTitle}</span>
								</Link>
							</div>
							<div className="Ratings pad-bott1rem">
								<span className="flexStart Stars">
									<Ratings ratings={Number.parseInt(item.ratings)} />
								</span>
							</div>
						</div>
						<div className="ProductPriceWithFulfillment flexColumn flexBasis20 heightAuto">
							<Price price={item.price} />
							<span className="subcategoryColor mg-b1">
								<Options options={item.options} />
							</span>
						</div>
					</div>
				)}
			</li>
	));

	return (
		fortyProducts.current ? <ul
			className={`${
				gallerySetup === 'grid' ? 'ProductGallery' : 'ProductList'
			} discless-list grid borders heightAuto ProductGallery no-mgBlockStart-mgBlockEnd`}
		>
			{fortyProducts.current}
		</ul> : <LoaderComponent />
	);
}
