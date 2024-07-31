import React from "react";
import "./InventoryForm.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";
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
  return (
    <form className="inventory-form" onSubmit={onSubmit}>
      <div className="inventory-form__wrapper">
        <div className="inventory-form__top">
          <h2 className="inventory-form__heading">Item Details</h2>
          <label className="inventory-form__label" for="itemName">
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
          <label className="inventory-form__label" for="description">
            Description
          </label>
          <Input
            txtArea
            placeholder={"Please enter a brief item description..."}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="inventory-form__label" for="category">
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
          <label className="inventory-form__label" for="status">
            Status
          </label>
          <div className="inventory-form__radio-group">
            <div className="inventory-form__radio">
              <input
                type="radio"
                name="status"
                value="in stock"
                defaultChecked
                onClick={() => setStatus("In stock")}
              />
              <label className="inventory-form__radio-txt">In stock</label>
            </div>
            <div className="inventory-form__radio">
              <input
                type="radio"
                name="status"
                value="out of stock"
                onClick={() => setStatus("Out of stock")}
              />
              <label className="inventory-form__radio-txt">Out of stock</label>
            </div>
          </div>
          <label className="inventory-form__label" for="quantity">
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
          <label className="inventory-form__label" for="warehouse">
            Warehouse
          </label>
          <DropdownMenu
            options={warehouses}
            name="warehouse"
            onChange={(e) => setWarehouse(e.target.value)}
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
