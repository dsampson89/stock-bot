import React, {Component} from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter} from "react-router-dom";

import Nav from "./Components/Nav/index"
import Login from "./Components/Login/index";
import Signup from "./Components/SignUp/index.js";
import Portfolio from './pages/Portfolio';

import "./App.css";
// import "./index.css"

class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <div className= "App">
        <Nav />
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Signup} />
              <Route path ="/portfolio" component={Portfolio} />  
        </div>
      </BrowserRouter>
    )
  }
}

export default App;