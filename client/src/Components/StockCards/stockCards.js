import React, { Component } from 'react'
import Bot from '../../API/alpaca'

class stockCards extends Component {

   


  render() {

      return(
        <div>
          
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                        <button className="btn btn-primary btn-lg" onClick={this.props.dataGrab}>Check Balance</button>
            
        
      </div>
      )
    }
  
  }

export default stockCards