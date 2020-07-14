import React from 'react';
import {onChangeDetected} from './topAndSideFilterHelpers';

export default function FancyCheckbox({checkboxId, isChanged}) {

	// handler function
	return (
		<label htmlFor={checkboxId} className="checkbox-label mg-l05-r1dot5">
			<input type="checkbox" id={checkboxId} name={checkboxId} onChange={onChangeDetected(isChanged)}/>
			<span className="checkmark"></span>
		</label>
	);
}
