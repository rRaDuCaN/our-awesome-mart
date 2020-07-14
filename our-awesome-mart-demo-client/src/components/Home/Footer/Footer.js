import React from 'react';
import fb from '../../../imgs/Home/Footer/facebook-black.svg';
import insta from '../../../imgs/Home/Footer/instagram-black.svg';
import tw from '../../../imgs/Home/Footer/twitter-black.svg';
import pint from '../../../imgs/Home/Footer/pinterest-black.svg';
import ytb from '../../../imgs/Home/Footer/youtube-black.svg';
import { NavLink } from 'react-router-dom';

const mainCategories = [
	'OurAwesome Services',
	'Get to Know Us',
	'OurAwesomeMart.com',
	'Customer Services',
	'In the Spotlight',
];
const offers = {
	ourAwesomeServices: [
		'Grocery Pickup & Delivery',
		'MoneyCenter',
		'OurAwesomeMart Credit Card',
		'OurAwesomeMart Pay',
		'Weekly Ad',
		'Other Services',
	],
	getToKnowUs: [
		'Our Company',
		'Digital Museum',
		'Our Suppliers',
		'Sell on OurAwesomeMart.com',
		'Advertise with Us',
		'Careers',
	],
	OurAwesomeMartDotCom: [
		'OurAwesomeMart Labs',
		'Our Ads',
		'Terms of Use',
		'Privacy & Security',
		'CA Privacy Rights',
		'Do Not Sell My Personal Information',
		'Request My Personal Information',
		'Tax Exemt Program',
	],
	customerService: ['Help Center', 'Returns', 'Product Recalls', 'Accessibility', 'Contact Us', 'Store Pickup'],
	inTheSpotlight: [
		'PortableAirConditioners',
		'PS4',
		'Trampoline',
		'Skateboard',
		'Outdoor Furniture',
		'Nintendo Switch Lite',
	],
};

const offersKeys = Object.keys(offers);

function mapOverOffers(arr) {
	return arr.map((item, index) => (
		<li>
			<NavLink to="/" key={'__' + index} role="link" className="subcategoryColor textDecorationNone unmountLinks">
				<span className="font-s12 customLineHeight">{item}</span>
			</NavLink>
		</li>
	));
}

function makeMainCatElems() {
	return mainCategories.map((item, index) => (
		<li key={`___${index}___`} className="initialGridItem">
			<span className="font-w-bold font-s12 customLineHeight">{item}</span>
			{mapOverOffers(offers[offersKeys[index]])}
		</li>
	));
}

export default function Footer() {
	return (
		<footer className="Footer fullWidth grid">
			<div className="flexEnd social-websites-wrapper fullHight">
				<div className="flexStandard social-websites fullHight">
					{[fb, tw, pint, ytb, insta].map((item, index) => (
						<img src={item} key={'_' + index} alt="social-websites" className="tailored-social-logo" />
					))}
				</div>
			</div>
			<ul className="offers grid heightAuto pad-inline-start-none no-mgBlockStart-mgBlockEnd discless-list">
				<li className="enableDisableHiddenOffers">
					<ul className="flexCenter fullHeight pad-inline-start-none no-mgBlockStart-mgBlockEnd discless-list">
						{mainCategories.map((item, index) => (
							<li key={'_' + index} className="aligned-li">
                                <NavLink
								to="/"
								className="font-w-bold font-s12 customized subcategoryColor textDecorationNone"
							>
								{item}
							</NavLink>
                            </li>
						))}
					</ul>
				</li>
				{makeMainCatElems()}
			</ul>
            <div className="shopOurBrandsWrapper fullWidth font-s12 mg-b4">
                <div className="shopOurBrands fullHeight flexEnd">
                    <NavLink to='/' role="link" className="subcategoryColor textDecorationNone">Shop Our Brands</NavLink>
                </div>
                <div className="writer fullWidth flexStandard">
                    <div className="writer-customize">
                    &#xA9; 2020 OurAwesomeMart. This webapplication has no purpose other than for learning interest. 
                    </div>
                    <div className="writer-customize">We are changing the way you think about purchases</div>
                </div>
            </div>
		</footer>
	);
}
