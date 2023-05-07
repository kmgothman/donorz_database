import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navigation from "../components/navigation/navigation"
import Dash from "../components/Dash/Dash"
import Table from "../components/Table/Table"
import Homepage from "./homepage"

function Layout2(props) {
	return(
      <div className="App">
      	<Homepage/>
        <Outlet />
      </div>
	);
}

export default Layout2;