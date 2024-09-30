import React from "react";
import "./Button.css";

const Button = ({ label, style, classname }) => {
  return (
    <div className={classname}>
      <button style={style}>{label}</button>
    </div>
  );
};

export default Button;
