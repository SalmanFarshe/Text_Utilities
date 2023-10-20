import React, { useState } from "react";

export default function LogIN() {
  let colorTheme = {
    background: "",
    padding: "30px",
    color: "",
  };
  let ButtonColorTheme = {
    color: "white",
    background: "#445760",
  };
  let SubmitButtonColorTheme = {
    border:"none",
    color: "white",
    background: "#445760",
  };
  const [ColorMode, setColorMode] = useState(colorTheme);
  const [ButtonColorMode, setButtonColorMode] = useState(ButtonColorTheme);
  const [SubmitButtonColorMode, SubmitsetButtonColorMode] = useState(
    SubmitButtonColorTheme
  );
  const ChangeColorMode = () => {
    if (ColorMode.background == "") {
      setColorMode({
        background: "#445760",
        padding: "30px",
        color: "white",
      });
      setButtonColorMode({
        color: "#445760",
        background: "white",
      });
      SubmitsetButtonColorMode({
        border: "none",
        color: "black",
        background: "white",
      });
      
    } else {
      setColorMode({
        background: "",
        padding: "30px",
        color: "",
      });
      setButtonColorMode({
        color: "white",
        background: "#445760",
      });
      SubmitsetButtonColorMode({
        border: "none",
        color: "white",
        background: "#445760",
      });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container" style={ColorMode}>
          <h1 className="mb-3 text-center">Login or Sign Up</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                style={SubmitButtonColorMode}
                className="btn btn-info"
              >
                Sign in
              </button>
            </div>
          </form>
          <button
            type="submit"
            onClick={ChangeColorMode}
            className="btn mt-2 w-100"
            style={ButtonColorMode}
          >
            Change Color Mode
          </button>
        </div>
      </div>
    </>
  );
}
