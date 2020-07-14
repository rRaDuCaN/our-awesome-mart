import React from 'react';
import './LoaderComponent.css';
 
const spinner1 = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25mm" width="25mm">
		<circle className="Spinner1" cx="12.5" cy="12.5" r="10" />
	</svg>
);

export default function LoaderComponent() {
	return (
		<div className="flexArranged fullHeight p-abs fullWidth Loader">
			 {spinner1}
		</div>
	);
}
