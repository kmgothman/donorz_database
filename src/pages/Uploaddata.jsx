import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'

class Uploaddata extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}



	render () {
	return(
        <div className="Main">
          	<div id="Controls">
          		<p></p>
				<p className="This"> Upload CSV Data</p>
				<p></p>
			</div>
			<div className="uploadDataContent">
				<Drag_drop {...this.props}/>	
			</div>
        </div>
	);
}
}

export default Uploaddata;