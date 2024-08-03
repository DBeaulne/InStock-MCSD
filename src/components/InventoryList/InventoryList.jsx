import React from "react";
import "./InventoryList.scss";
import Inventory from "./Inventory";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
// MAP FUNCTION TO BE ADDED //

const InventoryList = (inventory) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="inventories">
        <div className="inventories__wrapper--form">
          <h1 className="inventories__title">Inventory</h1>
          <form className="inventories__form">
            <Input
              classname={"inventories__form-input"}
              placeholder={"Search..."}
              search
            />
            <Button
              className={"inventories__form-button"}
              text={"+ Add New Item"}
            />
          </form>
        </div>
        <div className="inventories__wrapper">
          {/* {inventory.map(() => {

      })} */}
          <Inventory />
        </div>
      </section>
    </>
  );
};

export default InventoryList;
