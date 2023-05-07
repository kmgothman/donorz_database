import React, {Component} from 'react';

class Table extends Component{
	constructor(props) {
		super(props);
		this.state = {
			donations : [],
			donationMonths: [],
			monthToggle:0
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/donations', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
        email: this.props.email
      })
    })
      .then(response => response.json())
      .then(object => this.setState({donations:object.donations,
  									 donationMonths:object.donationMonths,
  									 monthToggle:object.donations.length-1}))
	}


	render() {
		if (this.state.donations.length > 0) {
	return(
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

	          {this.state.donations[this.state.monthToggle].map(x => (
	         <tr>
            <td >{x.donorname}</td>
            <td>{x.amount}</td>
            <td>{x.giftdate}</td>
            </tr>
          ))}
	        </tbody>
	      </table>
		</div>
	);} else {
		return (		
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
		</div>)
	}
}
}

export default Table;