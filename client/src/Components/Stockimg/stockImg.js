import React, { Component } from 'react'

class stockImg extends Component {
    render() {
        return this.props.output.map((item)=>(
        <h3>{item}</h3>
        ));
    }
}

export default stockImg
