import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'

class Donations extends Component {
	constructor(props) {
	super(props);
	this.state = {
		donations : [],
		donationMonths: [],
		monthToggle:0,
		monthNames:[],
		donationSums:[]
	}
	this.handlePrevClick = this.handlePrevClick.bind(this)
	this.handleNextClick = this.handleNextClick.bind(this)
	this.componentDidMount = this.componentDidMount.bind(this)
}

	componentDidMount() {
		fetch('http://localhost:3000/donations', {
	    	method: 'post',
	    	headers: {'Content-Type': 'application/json'},
	    	body: JSON.stringify({
	      	email: this.props.user.email
	    	}
	    	)
	  })
    .then(response => response.json())
    .then(object => this.setState({
    	donations:object.donations,
			donationMonths:object.donationMonths,
			monthNames:object.monthNames,
			monthToggle:object.donations.length-1,
			donationSums:object.donationSums
		}))

}

	handlePrevClick() {
		let current = this.state.monthToggle
		if (current === 0) {

		} else {
			this.setState({monthToggle:current-1})
			let sum = 0
			this.state.donations[this.state.monthToggle].map(x=>sum=sum+Number(x.amount))
			this.setState({donationSum:sum})
		}
	}

	handleNextClick() {
		let current = this.state.monthToggle
		let max = this.state.donations.length-1
		if (current === max) {

		} else {
			this.setState({monthToggle:current+1})
		}
	}

	handleDonorClick(donorcode, event) {
    this.props.loadDonorInfo(donorcode)
	}
	

	render() {
	if (this.state.donations.length > 0) {
		return(
	    <div className="Main">
	      <div id="Controls">
					<a className="Prev" onClick={this.handlePrevClick}>Previous Month</a>
					<p className="This">{this.state.monthNames[this.state.monthToggle]}</p>
					<a className="Next" onClick={this.handleNextClick}>Next Month</a>
				</div>
		<div className="Table">
	      <table>
	        <thead>
	        <tr>
	          
	          </tr>
	        </thead>
	        <tbody>
	          	<tr className="tableHead">
		            <td>Name</td>
		            <td>Donor Code</td>
		            <td>Gift Amount</td>
		            <td>Date</td>
		            <td>Memo</td>
	            </tr>
	          

	          {this.state.donations[this.state.monthToggle].map(x => (
	         <tr className="row" key={x.code}>
	            <td ><Link onClick={(event)=>this.handleDonorClick(x.donorcode,event)}to="/DonorInfo">{x.donorname}</Link></td>
	            <td>{x.donorcode}</td>
	            <td>{x.amount}</td>
	            <td>{x.giftdate}</td>
	            <td>{x.memo}</td>
            </tr>
          ))}
	          <tr>
	          	<th className="tableHead" colSpan="5">Total ({this.state.donations[this.state.monthToggle].length} Donations): {this.state.donationSums[this.state.monthToggle]}</th>
	          
	          </tr>
	        </tbody>
	      </table>
		</div>
		</div>
	);} else {
		return (		
			<div className="Main">
	      <div id="Controls">
					<a className="Prev">Previous Month</a>
					<p className="This"> This many donations!!!</p>
					<a className="Next">Next Month</a>
				</div>
			<div className="Table">
	      <table>
	        <thead>
	        <tr>
	          <th colSpan="3">these are your donations</th>
	          </tr>
	        </thead>
	        <tbody>
	          <tr>
	            <td>name</td>
	            <td>address</td>
	            <td>gift amount</td>
	          </tr>
	        </tbody>
	      </table>
	      <Drag_drop/>
		</div>
		</div>)
	}
}

}

export default Donations;