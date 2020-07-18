import React, { Component } from 'react'

class stockCards extends Component {
  render() {
    return(
      <div className="container">  
        <div className="row">
          <div className="col-lg-12">
              <input type="text" placeholder="Stock Symbol" className="form-control" id="symbolInput" />
              <button className="btn btn-primary btn-lg" id="symbolButton" onClick={this.props.dataGrab}>Check Prices</button>
          </div>
        </div>
      </div>
    )
  }
}

export default stockCards