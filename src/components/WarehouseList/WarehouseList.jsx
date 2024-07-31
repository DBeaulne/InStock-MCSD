import React from "react";
import "./WarehouseList.scss";
import Warehouse from "./Warehouse";
import Input from "../Input/Input";

// MAP FUNCTION TO BE ADDED //

const WarehouseList = (warehouse) => {
  return (
    <>
      <section className="warehouses">
        <div className="warehouses__wrapper">
          <h1 className="warehouses__title">Warehouses</h1>
          <form className="warehouses__form">
            <Input
              classname={" site_input--input warehouses__form-input"}
              placeholder={"Search..."}
              search
            />
            <button width="1000px">PLACE HOLDER ONLY</button>
          </form>
        </div>
        {/* {warehouse.map(() => {

      })} */}
        <Warehouse />
      </section>
    </>
  );
};

export default WarehouseList;
