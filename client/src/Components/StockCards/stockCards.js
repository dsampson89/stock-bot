import React, { Component } from 'react'

class stockCards extends Component {
  render() {
    return(
      <div>  
        <div className="form-row">
          <div className="col">
              <input type="text" className="form-control" />
              <button className="btn btn-primary btn-lg" onClick={this.props.dataGrab}>Check Prices</button>
          </div>
        </div>
      </div>
    )
  }
}

export default stockCards