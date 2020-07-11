import React, { Component } from 'react'
import Bot from '../../API/alpaca'

export class stockImg extends Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-header">Stock</h5>
                <div className="card-body">
                <img src="..." className="card-img-top" alt="..."/>
                </div>
            </div>
        )
    }
}

export default stockImg
