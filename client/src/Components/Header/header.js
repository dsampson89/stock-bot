import React, { Component } from 'react'
import Bot from '../../API/alpaca'
import style from "./style.css"

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bot: new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert("Search submited for: " + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.state.bot)
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, User</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id metus sed diam tristique tristique.</p>
                <hr className="my-4"/>
                <p>Build onto you portfolio</p>
                <form className="input" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
                </form>
                <a className="btn btn-primary btn-lg" href="/stocks" role="button">Buy Stocks</a>
            </div>
        )
    }
}

export default header