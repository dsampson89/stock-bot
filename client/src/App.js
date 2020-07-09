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
  constructor(props) {
    super(props);
    this.state = {
        bot: new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
    }
}
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