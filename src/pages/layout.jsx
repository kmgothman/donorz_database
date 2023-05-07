import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navigation from "../components/navigation/navigation"
import "./layout.css"

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	return(
      <div className="Layout">
        <Navigation signOut={this.props.signOut} className="side-bar"/>
        <Outlet />
      </div>
	);
  }
}

export default Layout;