import { Link } from "react-router-dom"
import React, { Component } from 'react'

import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container" id="navbg">
        <Link className="navbar-brand" to={"/sign-in"}>StockB<FontAwesomeIcon icon={faRobot} />T</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"//app.alpaca.markets/signup"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default nav
