import React from "react";
import "./Button.scss";

const Button = ({ className, type, text, txtClassName }) => {
  return (
    <button type={type} className={`btn ${className}`}>
      {/* txtClassName is only for the Edit button to hide the text in mobile
      breakpoint */}
      <span className={`btn__txt ${txtClassName}`}>{text}</span>
    </button>
  );
};

export default Button;
