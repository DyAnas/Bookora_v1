import React, { Component } from 'react';
import './App.css';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import SignUpContainer from "./Container/SignUpContainer";
import SignInContainer from './Container/SignInContainer'
import Home from './Container/home'
import {Provider} from 'react-redux';

import SignUpForm from "./Container/SignUpContainer";

class App extends Component{


  render() {
  return (
    <div className="">

        <Route path="/home" component={Home}></Route>
        <Switch>
        <Route path="/" exact component={SignInContainer}></Route>
        <Route path="/signup" component={SignUpForm}></Route>

        </Switch>

    </div>
  );
}
}
export default App;
