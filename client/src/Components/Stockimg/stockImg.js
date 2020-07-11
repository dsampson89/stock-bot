import React, { Component } from 'react'
import Bot from '../../API/alpaca'

export class stockImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bot: new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
        }
    }
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
