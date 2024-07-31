import React from "react";
import "./DropdownMenu.scss";
import arrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
const DropdownMenu = ({ options, name, className }) => {
  return (
    <select className={`dropdown__menu ${className}`} name={name}>
      <option className="dropddown__option1" hidden>
        Please select
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
