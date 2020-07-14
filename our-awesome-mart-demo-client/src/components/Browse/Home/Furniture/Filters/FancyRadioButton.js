import React from 'react';
import {onChangeDetected} from './topAndSideFilterHelpers';

export default function FancyRadioButton({ radioId, isChanged }) {
	return (
		<label htmlFor={radioId} className="radio-label mg-l05-r1dot5">
			<input
				type="radio"
				className="radio-input"
				id={radioId}
				name="deliveryAndPickup"
				value={radioId}
				onChange={onChangeDetected(isChanged)}
			/>
			<span className="outlined"></span>
			<span className="radio-button"></span>
		</label>
	);
}
