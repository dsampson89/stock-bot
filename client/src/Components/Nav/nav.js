import { Link } from "react-router-dom"
import style from "./style.css"
import React, { Component } from 'react'

export class nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>StockBOT</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default nav
