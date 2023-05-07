import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'

class Donors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			donors : []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/donors', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
        email: this.props.user.email
      })
    })
      .then(response => response.json())
      .then(donors => this.setState({donors:donors}))
}

	handleDonorClick(donorcode, event) {
    this.props.loadDonorInfo(donorcode)
	}


	render () {
	return(
      <div>
        <div className="Main">
          	<div id="Controls">
          	<p></p>
				<p className="This">Mission Partners</p>
				<p></p>
			</div>
			<div className="Table">
	      <table>
	        <tbody>
	          <tr className="tableHead">
	            <td>Donor Code</td>
	            <td>Name</td>
	            <td>Address</td>
	            <td>city</td>
	            <td>State</td>
	            <td>Postal Code</td>
	            <td>Email</td>
	            <td>Phone</td>
	          </tr>
	          {this.state.donors.map(x => (
	         <tr className="row">
            <td >{x.donorcode}</td>
            <td ><Link onClick={(event)=>this.handleDonorClick(x.donorcode,event)}to="/DonorInfo">{x.name}</Link></td>
            <td>{x.address}</td>
            <td>{x.city}</td>
            <td>{x.state}</td>
            <td>{x.postalcode}</td>
            <td>{x.email}</td>
            <td>{x.phone}</td>
            </tr>
          ))}
	        </tbody>
	      </table>
		</div>
				
        </div>
      </div>
	);
}
}

export default Donors;