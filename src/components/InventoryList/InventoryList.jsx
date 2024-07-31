import React from "react";
import './InventoryList.scss';
import Inventory from "./Inventory";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button"

// MAP FUNCTION TO BE ADDED // 

const InventoryList = (inventory) => {
  return (
    <>
     <section className="inventories">
      <div className="inventories__wrapper--form">
        <h1 className="inventories__title">Inventory</h1>
        <form className="inventories__form">
          <SearchBar 
          classname={'inventories__form-input'}
          placeholder={'Search...'}
          />
          <Button 
          className={'inventories__form-button'}
          text={'+ Add New Item'}
          />
          
        </form>
      </div>
      <div className="inventories__wrapper">
            {/* {inventory.map(() => {

      })} */}
      <Inventory 
      /> 
      </div>
    </section>
    </>
  )
};

export default InventoryList;
