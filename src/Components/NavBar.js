import React from "react";
export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand text-info" href="\">
          <b>{props.brandName}</b>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-info"
                aria-current="page"
                href="\"
              >
                {props.itemOne}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="\">
                {props.itemTwo}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="\">
                {props.itemThree}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
