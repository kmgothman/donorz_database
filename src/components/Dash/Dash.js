import React from 'react';
import './Dash.css';

function Dash(props) {
	return(
			<div id="Controls">
				<a className="Prev">Prev Month</a>
				<p className="This"> This many donations!!!</p>
				<a className="Next">Next Month</a>
			</div>
	);
}

export default Dash;