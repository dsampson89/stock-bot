import React, { Component } from 'react'
import Bot from '../../API/alpaca'

class stockCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bot: new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
    }
}
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/login" className="btn btn-success">Show Stock</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/login" className="btn btn-success">Show Stock</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default stockCards
