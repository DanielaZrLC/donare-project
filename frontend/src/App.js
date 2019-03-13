import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Router from './Router'

class App extends Component{
  state={
    user:{},
    auth:{}
  } 

catchForGlobalState= (res) =>{
  let {user} = res.data
  this.setState({user, logged: true})
}
  render() {
    let {user} = this.state
    let {logged} = this.state
    return (
      <div className="App">
      <Navbar isLogged = {logged} />
      <Router user = {user} catched= {this.catchForGlobalState}/>
      <Footer/>
      </div>
    );
  }
}


export default App;
