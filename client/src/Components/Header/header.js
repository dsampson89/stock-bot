import React, { Component } from 'react'
import Bot from '../../API/alpaca'
export class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bot: new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
        }
    }

    render() {
        console.log(this.state.bot)
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, User</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id metus sed diam tristique tristique.</p>
                <hr className="my-4"/>
                <p>Build onto you portfolio</p>
                <a className="btn btn-primary btn-lg" href="/stocks" role="button">Buy Stocks</a>
            </div>
        )
    }
}

export default header