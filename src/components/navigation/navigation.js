import React, {Component} from 'react';
import './navigation.css';
import Logo from './Logo/Logo.png'
import {BrowserRouter, Route, Link} from "react-router-dom"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {reportsToggle:0};
  }

reportsClick=(event) => {
	if (this.state.reportsToggle) {
		this.setState({reportsToggle:0})
	} else {
		this.setState({reportsToggle:1})
	}
}

render() {
	if (this.state.reportsToggle) {
	return(
		<nav>
			<div className="Logo"><img width="150" alt="Logo" src={Logo}/></div>
			<div className="nav">
				<Link className='sideBar' to="/">Dashboard</Link>
				<Link className='sideBar' to="/Donations">Donations</Link>
				<Link className='sideBar' to="/Donors">Donors</Link>
				<Link className='sideBar' onClick={this.reportsClick}>Reports</Link>
						<div className='dropBox'><Link className="dropBoxItem" to="/Lapsedgifts">Lapsed Gifts</Link></div>
						<div className='dropBox'><Link className="dropBoxItem" to="/Locations">Gifts by Location</Link></div>
				<Link className='sideBar'  to="/Uploaddata">Upload Data</Link>
				<Link className='sideBar' onClick={this.props.signOut} to="/">Sign Out</Link>
			</div>
		</nav>
	);} else {
		return (
		<nav>
			<div className="Logo"><img width="150" alt="Logo" src={Logo}/></div>
			<div className="nav">
				<Link className='sideBar' to="/">Dashboard</Link>
				<Link className='sideBar' to="/Donations">Donations</Link>
				<Link className='sideBar' to="/Donors">Donors</Link>
				<Link className='sideBar' onClick={this.reportsClick}>Reports</Link>
				<Link className='sideBar'  to="/Uploaddata">Upload Data</Link>
				<Link className='sideBar' onClick={this.props.signOut} to="/">Sign Out</Link>
			</div>
		</nav>)
	}
}
}

export default Navigation;