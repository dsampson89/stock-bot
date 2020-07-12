import React, { Component } from 'react'

class Charts extends Component {
    render() {
      return this.props.output.map((item)=>(
        <h3>{item}</h3>
      ));
    }
}
export default Charts