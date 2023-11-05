import React from 'react'
import { Link } from 'react-router-dom'
export default function TextTorHome() {
    return (
      <>
        <div className="container">
          <p className=" display-1 text-center mt-5 pt-5">TextTorHome</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <Link
                type="button"
                className="m-1 btn btn-success align-content-center"
                to="/Signin"
              >
                Sign In
              </Link>
              <Link
                type="button"
                className="m-1 btn btn-success align-content-center"
                to="/home"
              >
                Home
              </Link>
              <Link
                type="button"
                className="m-1 btn btn-success align-content-center"
                to="/about"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
