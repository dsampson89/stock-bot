import React, { Component } from 'react'
import style from "./style.css"

class header extends Component {
    

    render() {
        
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