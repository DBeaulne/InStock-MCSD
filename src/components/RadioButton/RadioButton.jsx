import React from "react";
import "./RadioButton.scss";

const RadioButton = ({
  text,
  name,
  value,
  setIsQuantityExists,
  checked,
  setIsStatusChecked,
}) => {
  const handleChange = () => {
    if (value === "In Stock") {
      setIsQuantityExists(true);
      setIsStatusChecked("In Stock");
    }
    if (value === "Out Of Stock") {
      setIsQuantityExists(false);
      setIsStatusChecked("Out Of Stock");
    }
  };
  return (
    <div className="inventory-form__radio">
      <input
        type="radio"
        name={name}
        value={value}
        className="inventory-form__radio-input"
        checked={checked}
        onChange={handleChange}
      />
      <p className="inventory-form__radio-txt">{text}</p>
    </div>
  );
};

export default RadioButton;
