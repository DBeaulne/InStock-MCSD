import React from "react";
import "./WarehouseList.scss";
import Warehouse from "./Warehouse";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button"

// MAP FUNCTION TO BE ADDED // 

const WarehouseList = (warehouse) => {
  return (
    <>
     <section className="warehouses">
      <div className="warehouses__wrapper--form">
        <h1 className="warehouses__title">Warehouses</h1>
        <form className="warehouses__form">
          <SearchBar 
          classname={'warehouses__form-input'}
          placeholder={'Search...'}
          />
          <Button 
          className={'warehouse__form-button'}
          text={'+ Add New Warehouse'}
          />
          
        </form>
      </div>
      <div className="warehouses__wrapper">
            {/* {warehouse.map(() => {

      })} */}
      <Warehouse 
      /> 
      </div>
    </section>
    </>
  )
};

export default WarehouseList;
