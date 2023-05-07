import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'

class DonorInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			donations:[0],
			donorInfo:[],
			donationSum:0
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/donorinfo', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
        donorcode: this.props.donorcode,
        email: this.props.user.email
      })
    })
      .then(response => response.json())
      .then(object => this.setState({
      	donations:object.donations, 
  			donorInfo:object.donorInfo[0],
  			donationSum:object.donationSum	
  			}))
}

	handleDonorClick() {
		//fetch the donor info db.donors and db.donations
		//update the state
	}


	render () {
	return(
      <div>
        <div className="Main">
          	<div id="Controls">
          		<p></p>
							<p className="This"> Ministry Partner Information</p>
							<p></p>
						</div>
			<div>
				<h2>{this.state.donorInfo.name}</h2>
				<p>Donor ID:{this.state.donorInfo.donorcode}</p>
				<h2>Address</h2>
				<p>{this.state.donorInfo.address}</p>
				<p>{this.state.donorInfo.city},{this.state.donorInfo.state} {this.state.donorInfo.postalcode}</p>
				<h2>Email</h2>
				<p>{this.state.donorInfo.email}</p>
			</div>
		<div className="Table">
	      <table>
	        <tbody>
	          <tr className="tableHead">
	            <td>Date</td>
	            <td>Type</td>
	            <td>Memo</td>
	            <td>Amount</td>
	          </tr>
	          {this.state.donations.map(x=>(
	          	<tr className="row">
		            <td >{x.giftdate}</td>
		            <td>{x.paymentmethodcode}</td>
		            <td>{x.memo}</td>
		            <td>{x.amount}</td>
            	</tr>
	          	))}
	          <tr className="tableHead">
	          	<th colSpan="3">Total ({this.state.donations.length} Donations):{this.state.donationSum}</th>
	          </tr>
	        </tbody>
	      </table>
		</div>
				
        </div>
      </div>
	);
}
}

export default DonorInfo;