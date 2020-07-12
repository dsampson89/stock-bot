import React, { Component } from 'react'
import Bot from '../../API/alpaca'

export class stockInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Automated Profits... Inbound</h5>
          <h6 className="card-subtitle mb-2 text-muted">Watch your profits soar!</h6>
          <button className="btn btn-primary btn-lg" onClick={this.props.initiate}>Buy Stocks</button>
          <hr></hr>
          <button className="btn btn-primary btn-lg" onClick={this.props.checkMoney}>Check Balance</button>
          <h3>{this.props.money}</h3>
        </div>
      </div>
    )
  }
}

export default stockInfo
