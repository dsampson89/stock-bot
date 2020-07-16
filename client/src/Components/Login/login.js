import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
            <div className="container" id="stockImg">
              <div className="row">
                <div className="col-lg-12">
                  <div className="jumbotron" id="main-header">
                    <h1 className="display-4">Want to trade stocks but don't know how?</h1>
                    <p className="lead">
                      Trade stocks with no stock market knowledge required! Just enter you api information from alpaca.markets and let our bot do all the work!{" "}
                    </p>
                    <a className="btn btn-primary btn-lg" href="/sign-up" role="button">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                <div className="card" id= "main-menu">
                <div className="card-body">
                  <h5 className="card-title">Sign In</h5>
                  <form>   
                    <div className="form-group">
                      <label>App ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter App ID"
                      />
                    </div>
                    <div className="form-group">
                      <label>App Secret</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Secret Key"
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <a href="/portfolio" className="btn btn-primary">
                      Submit
                    </a>
                  </form>
                </div>
              </div>
                </div>
              </div>
            </div>
        );
    }
}

export default login
