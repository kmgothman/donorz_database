import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Logo from '../components/navigation/Logo/Logo.png'
// import './welcomepage.css';
class Homepage extends React.Component {
  constructor() {
    super();
  }

  render () {
	return(
			<div style={{backgroundImage: 'url("/background.jpg")',
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover"}} className="landing">
        <div className="box-home">
					<div className="box-top"> 
						<img width="100" alt="Logo" src={Logo}/>
					</div>
					<div className="box-bottom">
						<h2>A Webapp for Managing Donations</h2>
						<Link to="/register"><button className='register'>Create an Account</button></Link>
						<Link className='a' to="/login">Log In   </Link>
					</div>
				</div>
		</div>
	);
}
}

export default Homepage;