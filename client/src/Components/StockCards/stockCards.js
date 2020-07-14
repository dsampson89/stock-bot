import React, { Component } from 'react'

class stockCards extends Component {
  render() {
    return(
      <div className="container">  
        <div className="row">
          <div className="col-lg-12">
              <input type="text" className="form-control" />
              <button className="btn btn-primary btn-lg" onClick={this.props.dataGrab}>Check Prices</button>
          </div>
        </div>
      </div>
    )
  }
}

export default stockCards