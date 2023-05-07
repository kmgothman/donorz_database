import React, { Component, useState } from 'react';
import Navigation from './components/navigation/navigation';
import Dash from './components/Dash/Dash';
import Table from './components/Table/Table';
import logo from './logo.svg';
import Welcomepage from './components/welcomepage/welcomepage';
// import login from './components/login/login'
import './App.css';
import ReactDom from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout"
import Layout2 from "./pages/layout2"
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/Dashboard"
import Donations from "./pages/Donations"
import Donors from "./pages/Donors"
import Lapsedgifts from "./pages/Lapsedgifts"
import Locations from "./pages/Locations"
import DonorInfo from "./pages/DonorInfo"
import Uploaddata from "./pages/Uploaddata"

const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  },
  donorcode: ''
}

class App extends Component {
  constructor() {
    super();
    if (localStorage.email) {
      console.log(localStorage.email)
      this.state = {
      isSignedIn: true,
      user: {
        id: localStorage.id,
        name: localStorage.name,
        email: localStorage.email,
      }
    }
    } else {
    this.state = initialState;
    // };
    } 
  }


  loadUser = (data) => {
    this.setState({
      isSignedIn: true,
      user: {
      id: data.id,
      name: data.name,
      email: data.email,
    }
    })
    localStorage.setItem('id', data.id)
    localStorage.setItem('name', data.name)
    localStorage.setItem('email', data.email)
  }

  onInputeChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  loadDonorInfo = (donorcode) => {
    this.setState({donorcode: donorcode})
    }

  signOut = (event) => {
    localStorage.clear();
    this.setState(initialState)
  }

  render() {
    const { isSignedIn, route } = this.state;
    if (isSignedIn) {
      return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout signOut={this.signOut} {...this.state} />}>
            <Route index element={<Dashboard {...this.state}/>} />
            <Route path="Donations" element={<Donations loadDonorInfo={this.loadDonorInfo} {...this.state} />} />
            <Route path="Donors" element={<Donors loadDonorInfo={this.loadDonorInfo} {...this.state}/>} />
            <Route path="Lapsedgifts" element={<Lapsedgifts loadDonorInfo={this.loadDonorInfo} {...this.state}/>} />
            <Route path="Locations" element={<Locations {...this.state}/>} />
            <Route path="DonorInfo" element={<DonorInfo {...this.state}/>} />
            <Route path="Uploaddata" element={<Uploaddata {...this.state}/>} />
            <Route path="login" element={<Dashboard {...this.state} />} />
            <Route path="register" element={<Dashboard {...this.state} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )} else { return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout2 />} />
           <Route path="login" element={<Login loadUser={this.loadUser}/>} />
           <Route path="register" element={<Register loadUser={this.loadUser}/>} />
        </Routes>
      </BrowserRouter>

      )}

  }
}


export default App;
