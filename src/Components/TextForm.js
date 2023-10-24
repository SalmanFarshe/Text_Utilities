import React, { useState } from "react";

export default function TextForm(props) {
  const onchangevalue = (event) => {
    newValue(event.target.value);
  };
  const toUpperClick = () => {
    let upperText = textValue.toUpperCase();
    newValue(upperText);
    props.alertmdg("Text Converted Uppercase Successfully!")
  };
  const toLowerClick = () => {
    let lowerText = textValue.toLowerCase();
    newValue(lowerText);
    props.alertmdg("Text Converted Lowercase Successfully!");
  };
  const clearText = () => {
    newValue("");
    props.alertmdg("Text Cleared Successfully!")
  };
  const [textValue, newValue] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="mb-3">
            <h1 className="display-6 mt-5">Make your Text Here</h1>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={textValue}
              onChange={onchangevalue}
            ></textarea>
            <button
              className="btn btn-outline-secondary btn-light my-2"
              onClick={toUpperClick}
            >
              Uppercase
            </button>
            <button
              className="btn btn-outline-secondary btn-light m-2"
              onClick={toLowerClick}
            >
              LowerCase
            </button>
            <button
              className="btn btn-outline-secondary btn-light m-2"
              onClick={clearText}
            >
              Clear Text
            </button>
          </div>
        </div>
        <div className="container">
          <h3>Your Text Summery</h3>
          <p>
            {textValue.split(" ").length} Words and {textValue.length}{" "}
            charecters
          </p>
          <p>Read Time : {textValue.split("").length * 0.008} Minutes</p>
          <h3>{textValue == "" ? "Enter you Text to Preview Here" : "Preview"}</h3>
          <p>{textValue}</p>
        </div>
      </div>
    </>
  );
}
