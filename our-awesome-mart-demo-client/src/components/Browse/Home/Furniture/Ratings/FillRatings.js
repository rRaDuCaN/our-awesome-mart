import React from 'react';
import { st } from './starsConsts';

function Stars({ par, sts }) {
	return (
		<>
			<span key={`__span${par}`} className="flexStandard">
				{sts}
			</span>
			<span key={`__span${par}__`} className="subcategoryColor alignSelfFlexStart">{`${par}`}</span>
		</>
	);
}

export default function FillRatings({ param = 0 }) {
	if (param === 0) {
		return <Stars {...{ par: param, sts: st.UNFILLED_STARS }} />;
	} else if (param <= 5) {
		return <Stars {...{ par: param, sts: st.SEMIFILLED_STAR }} />;
	} else if (param > 10 && param <= 30) {
		return <Stars {...{ par: param, sts: st.ONE_FILLED_STAR }} />;
	} else if (param > 30 && param <= 100) {
		return <Stars {...{ par: param, sts: st.TWO_FILLED_STARS }} />;
	} else if (param > 100 && param <= 200) {
		return <Stars {...{ par: param, sts: st.THREE_FILLED_STARS }} />;
	} else if (param > 200 && param <= 400) {
		return <Stars {...{ par: param, sts: st.FOUR_FILLED_STARS }} />;
	} else if (param > 400 && param <= 700) {
		return <Stars {...{ par: param, sts: st.FOUR_DOT_FIVE_FILLED_STARS }} />;
	} else if (param > 700) {
		return <Stars {...{ par: param, sts: st.FIVE_FILLED_STARS }} />;
	} else {
		return null;
	}
}
