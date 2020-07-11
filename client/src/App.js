import React, {Component} from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter} from "react-router-dom";

import Nav from "./Components/Nav/nav"
import Login from "./Components/Login/login";
import Signup from "./Components/SignUp/index.js";
import Portfolio from './pages/Portfolio';
import Stocks from "./pages/Stocks"
import Bot from "./API/alpaca"

import "./index.css"

class App extends Component{
  render() {
    return(
      
      <BrowserRouter>
      <Nav />
        <div className= "App">
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Signup} />
              <Route path ="/portfolio" component={Portfolio} />
              <Route path ="/stocks" component={Stocks} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;