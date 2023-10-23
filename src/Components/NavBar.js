import React from "react";
export default function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: props.themeColorBackground,
      }}
    >
      <div className="container">
        <a
          className={`navbar-brand text-${
            props.themeColorBackground === "black" ? "white" : "white"
          }`}
          href="\"
        >
          <b>{props.brandName}</b>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active text-${
                  props.themeColorBackground === "black" ? "white" : "white"
                }`}
                aria-current="page"
                href="\"
              >
                {props.itemOne}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.themeColorBackground === "black" ? "white" : "white"
                }`}
                href="\"
              >
                {props.itemTwo}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.themeColorBackground === "black" ? "white" : "white"
                }`}
                href="\"
              >
                {props.itemThree}
              </a>
            </li>
          </ul>
          <div className="">
            <div
              className="rounded bg-dark p-1 mx-2 text-white"
              onClick={props.themeFunc}
            >
              Select Theme
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div
                className="rounded bg-primary p-3 text-white"
                onClick={props.themeFunc1}
              ></div>
            </div>
            <div className="col-md-2">
              <div
                className="rounded bg-secondary p-3 text-white"
                onClick={props.themeFunc2}
              ></div>
            </div>
            <div className="col-md-2">
              <div
                className="rounded bg-success p-3 text-white"
                onClick={props.themeFunc3}
              ></div>
            </div>
            <div className="col-md-2">
              <div
                className="rounded bg-info p-3 text-white"
                onClick={props.themeFunc4}
              ></div>
            </div>
            <div className="col-md-2">
              <div
                className="rounded bg-warning p-3 text-dark"
                onClick={props.themeFunc5}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
