import React, { Component } from 'react'
import Bot from '../../API/alpaca'

export class stockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        output: []
    }
  }

  initiate = async () => {
    var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')

    bot.automation(20,600).then((response)=>{
      return response
    }).then((res)=>{
      this.setState((state)=>{
        return {output: res}
      })
    })
  }


  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Automated Profits... Inbound</h5>
          <h6 className="card-subtitle mb-2 text-muted">Watch your profits soar!</h6>
          <button className="btn btn-primary btn-lg" onClick={this.initiate}>Buy Stocks</button>
        </div>
      </div>
    )
  }
}

export default stockInfo
