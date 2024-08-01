import React from "react";
import { useState } from "react";
import "./InventoryForm.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";
import RadioButton from "../RadioButton/RadioButton";
const InventoryForm = ({
  edit,
  categories,
  warehouses,
  itemName,
  setItemName,
  category,
  setCategory,
  description,
  setDescription,
  status,
  setStatus,
  quantity,
  setQuantity,
  warehouse,
  setWarehouse,
  onCancel,
  onSubmit,
}) => {
  const navigate = useNavigate();

  const selectHandler = (e) => {};

  const warehousesList = warehouses.map((option) => option.warehouseName);

  const [isStatusetIsQuantityExistssChecked, setIsQuantityExists] =
    useState(true);
  const [isStatusChecked, setIsStatusChecked] = useState("In Stock");

  return (
    <form className="inventory-form" onSubmit={onSubmit}>
      <div className="inventory-form__wrapper">
        <div className="inventory-form__top">
          <h2 className="inventory-form__heading">Item Details</h2>
          <label className="inventory-form__label" htmlFor="itemName">
            Item Name
          </label>
          <Input
            classname="site_input--input"
            placeholder={"Item name"}
            name="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <label className="inventory-form__label" htmlFor="description">
            Description
          </label>
          <Input
            txtArea
            placeholder={"Please enter a brief item description..."}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="inventory-form__label" htmlFor="category">
            Category
          </label>
          <DropdownMenu
            options={categories}
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="inventory-form__bottom">
          <h2 className="inventory-form__heading">Item Availablity</h2>
          <label className="inventory-form__label" htmlFor="status">
            Status
          </label>
          <div className="inventory-form__radio-group">
            <RadioButton
              text="In stock"
              name="status"
              value="In Stock"
              setIsStatusChecked={setIsStatusChecked}
              setIsQuantityExists={setIsQuantityExists}
              checked={isStatusChecked === "In Stock"}
            />
            <RadioButton
              text="Out of stock"
              value="Out Of Stock"
              setIsStatusChecked={setIsStatusChecked}
              name="status"
              setIsQuantityExists={setIsQuantityExists}
              checked={isStatusChecked === "Out Of Stock"}
            />
          </div>
          <label className="inventory-form__label" htmlFor="quantity">
            Quanity
          </label>
          <Input
            type="number"
            classname="site_input--number"
            min="0"
            placeholder="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label className="inventory-form__label" htmlFor="warehouse">
            Warehouse
          </label>
          <DropdownMenu
            options={warehousesList}
            name="warehouse"
            onChange={(e) => {
              selectHandler();
            }}
          />
        </div>
      </div>

      <div className="inventory-form__actions">
        <Button
          className="btn btn--sec inventory-form__button"
          type="button"
          text="Cancel"
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button
          className="btn btn--prim inventory-form__button"
          type="submit"
          text={edit ? "Save" : "+Add Item"}
        />
      </div>
    </form>
  );
};

export default InventoryForm;
