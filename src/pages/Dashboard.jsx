import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'

class Dashboard extends Component {
	constructor(props) {
	super(props);
	this.state = {
		donationMonths: ['none uploaded'],
		totalDonors:0,
		goals:[],
		amountToRaise:[],
		totalDonations:0,
		monthlyAverage:0,
		averageDonation:0
	}
}

	componentDidMount() {
		let sum = 0
	fetch('http://localhost:3000/dashboard', {
    	method: 'post',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({
      email: this.props.user.email
    })
  })
    .then(response => response.json())
    .then(object => this.setState({
									 donationMonths:object.donationMonths,
									 totalDonors:object.totalDonors,
									 totalDonations:object.totalDonations,
									 monthlyAverage:object.monthlyAverage,
									 averageDonation:object.averageDonation
									 }))
}

render() {
	return(
      
        <div className="Main">
        	<div id="Controls">
		        <p className="Prev">User: {this.props.user.email}</p>
		        <p> </p>
						<p className="This">Total Donations: ${this.state.totalDonations}</p>
						
					</div>
					<div className="dashboardBody">
						<div className="dashboardCard">
							<div className="cardTop">
								<p>Total Mission Partners </p>
							</div>
							<div className="cardBottom">
								<p>{this.state.totalDonors}</p>
							</div>
						</div>
						<div className="dashboardCard">
							<div className="cardTop">
							<p>Average Monthly Gift</p>
							</div>
							<div className="cardBottom">
							<p>${this.state.averageDonation}</p>
							</div>
						</div>
						<div className="dashboardCard">
							<div className="cardTop">
								<p>Average Monthly Gifts</p>
							</div>
							<div className="cardBottom">
							${(this.state.monthlyAverage)}
							</div>
						</div>
						<div className="dashboardCard">
							<div className="cardTop">
								<p>Donations Uploaded</p>
							</div>
							<div className="cardBottomMonths">
							{this.state.donationMonths.map(month=> (
							<ul key={month}>{month}</ul>))}
							</div>
						</div>
					</div>
        </div>
      
	);
}
}

export default Dashboard;