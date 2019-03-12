import React from 'react'
import {Switch,Route} from 'react-router-dom' 
import Home from './components/layout/Home';
import Signup from './components/auth/Signup';
import WrappedNormalLoginForm from './components/auth/Login';
import Profile from './components/auth/Profile';


export default (props) => {
  let {user} = props
  let {catched} = props 
    return (
      <Switch>
          <Route exact path= "/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" render = {(props) => <WrappedNormalLoginForm catched={catched}{...props}/>} />
          <Route path="/profile" render = {(props) => <Profile user={user} {...props}/>} />
      </Switch>

  )
}
