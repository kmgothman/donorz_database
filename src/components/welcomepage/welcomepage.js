import React from 'react';
import './welcomepage.css';
class Welcomepage extends React.Component {
  constructor() {
    super();
  }

  render () {
	return(
			<div class="row">
			<header class="text-center col-12 text-light ">
				<h1> Donors Home </h1><br/>
				<h2> Your new donations database software </h2> <br/>
				
				<button type="button" class="btn btn-secondary">Log In</button>
				
				<a href="create_account.html">Create New Account</a>
			</header>
		</div>
	);
}
}

export default Welcomepage;