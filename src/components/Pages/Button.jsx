import React from "react";
import "../styles/Btn.css";

function Button(props) {
  return (
    <>
      <button className="btnAnimate">
        <span>{props.btn}</span>
      </button>
    </>
  );
}

export default Button;
