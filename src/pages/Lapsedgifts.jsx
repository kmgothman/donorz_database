import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'

class Lapsedgift extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lapsedGifts : []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/lapsedgift', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
        email: this.props.user.email
      })
    })
      .then(response => response.json())
      .then(object => this.setState({lapsedGifts:object.lapsedGifts}))
}

	handleDonorClick(donorcode, event) {
		// 		fetch('http://localhost:3000/donorinfo', {
    //   	method: 'post',
    //   	headers: {'Content-Type': 'application/json'},
    //   	body: JSON.stringify({
    //     email: this.props.user.email
    //     donorcode: 
    //   })
    // })
    //   .then(response => response.json())
    this.props.loadDonorInfo(donorcode)
	}


	render () {
	if (this.state.lapsedGifts.length > 0) {
		return(
	    <div className="Main">
	      <div id="Controls">
					<p></p>
					<p className="This"> Lapsed Gift Report</p>
					<p></p>
				</div>
		<div className="lapsedGiftContent">
	      <table>
	        
	        <tbody>
	          <tr className="tableHead">
	            <td>Name</td>
	            <td>Last Gift</td>
	          </tr>

	          {this.state.lapsedGifts.map(x => (
	         <tr className="row">
            <td ><Link onClick={(event)=>this.handleDonorClick(x.donorcode,event)}to="/DonorInfo">{x.donorname}</Link></td>
            <td>{x.donorsLastMonth}</td>
            </tr>
          ))}
	          <tr>
	          <td>  </td>
	          <td>  </td>
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
		</div>
		</div>
		)
	}
}
}

export default Lapsedgift;