import React from "react";
import style from "./style.css";

    const Login = () => {
        return (
            <div>
                <div className="container">
                <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <a href="/portfolio" className="btn btn-primary">Submit</a>
            </form>
            </div>
            </div>
            
            
        );
    }

    export default Login