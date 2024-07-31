import React from "react";
import "./AddInventoryItem.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import InventoryForm from "../InventoryForm/InventoryForm";
const AddInventoryItem = () => {
  const navigate = useNavigate();
  const categories = ["A", "b", "c"];
  return (
    <section className="add-inventory">
      <div className="add-inventory__container">
        <div className="add-inventory__top">
          <img
            className="add-inventory__back-icon"
            src={ArrowBackIcon}
            alt="Back Icon"
            onClick={() => {
              navigate(-1);
            }}
          />
          <h1 className="add-inventory__heading">Add New Inventory Item</h1>
        </div>
        <InventoryForm categories={categories} />
      </div>
    </section>
  );
};

export default AddInventoryItem;
