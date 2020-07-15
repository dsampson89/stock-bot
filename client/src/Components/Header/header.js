import React, { Component } from 'react'

class header extends Component {
    

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="jumbotron">
                            <h1 className="display-4">Get Started Below</h1>
                            <a className="btn btn-primary btn-lg" href="/stocks" role="button">Start The Bot</a>
                            <p className="lead">Even further down, check prices of individual stocks</p>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default header