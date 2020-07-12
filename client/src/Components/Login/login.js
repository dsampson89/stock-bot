import style from "./style.css";
import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
          <div>
            <div className="container">
              <div className="jumbotron">
                <h1 className="display-4">Hello, Stock Traders!</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id metus sed diam tristique tristique. Sed lobortis
                  diam sit amet risus ornare cursus. Sed sollicitudin purus
                  viverra, imperdiet lorem eleifend, tempus nibh.{" "}
                </p>
                <a
                  className="btn btn-primary btn-lg"
                  href="/sign-up"
                  role="button"
                >
                  Learn more
                </a>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sign In</h5>
                  <form>
                      
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
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
        );
    }
}

export default login
