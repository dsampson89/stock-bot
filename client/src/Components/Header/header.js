import React, { Component } from 'react'

class header extends Component {
    

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="jumbotron">
                            <h1 className="display-4">Hello, User</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id metus sed diam tristique tristique.</p>
                            <p>Build onto you portfolio</p>
                            <a className="btn btn-primary btn-lg" href="/stocks" role="button">Buy Stocks</a>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default header