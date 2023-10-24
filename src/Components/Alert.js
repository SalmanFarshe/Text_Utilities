import React from "react";

export default function Alert(props) {
  return (
    props.alertt && (
      <div className="container mt-2 alert alert-success position-relative" role="alert">
        <p>{props.alertt.msg}</p>
      </div>
    )
  );
}