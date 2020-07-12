import React, { Component } from 'react'

export class accBalance extends Component {
    render() {
        return (
            <div>
                <h3>${this.props.money}</h3>
            </div>
        )
    }
}

export default accBalance
