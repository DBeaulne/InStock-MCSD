import React from "react";
import "./InventoryForm.scss";
import arrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
import Input from "../Input/Input";

const InventoryForm = ({ type, categories, onSubmit }) => {
  return (
    <form className="inventory-form">
      <div className="inventory-form__top">
        <h2 className="inventory-form__heading">Item Details</h2>
        <label for="itemName">Item Name</label>
        <Input
          classname={"site_input"}
          placeholder={"Item name"}
          name="itemName"
          value=""
        />
        <input
          className="input input--txt"
          type="text"
          name="item-name"
          id="itemName"
          placeholder="Item Name"
        />
        <label for="description">Description</label>
        <textarea
          className="input input--txtArea"
          name="description"
          id="description"
          placeholder="Please enter a brief item description..."
        />
        <label for="category">Category</label>
        <div></div>
        <img className="" src={arrowDropDown} alt="dropdown arrow" />
        <select name="category" value="">
          <option hidden>Please select</option>
        </select>
      </div>
      <div className="inventory-form__bottom"></div>
    </form>
  );
};

export default InventoryForm;
