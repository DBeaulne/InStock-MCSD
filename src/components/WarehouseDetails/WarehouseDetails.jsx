import React, { useState } from "react";
import "./WarehouseDetails.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
const WarehouseDetails = () => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

  return (
    <main className="warehouse-details">
      <div className="warehouse-details__top">
        <img src={ArrowBackIcon} alt="Back Icon" onClick={() => {}} />
        <h2>
          Washington
          {/* {warehouseDetails.name} */}
        </h2>
        <Button
          type="button"
          text="Edit"
          className="btn--prim btn--edit"
          txtClassName="btn__txt--edit"
        />
      </div>
      <div className="warehouse-details__mid">
        <h3>Warehouse Address</h3>
        <p>33 Pearl Street SW, Washington,USA</p>
        <div className="warehouse-details__mid-container">
          <div className="warehouse-details__name">
            <h3>Contact Name</h3>
            <p>
              Graeme Lyon
              {/* {warehouseDetails.manager} */}
            </p>
            <p>
              Warehouse Manager
              {/* {warehouseDetails.designation} */}
            </p>
          </div>
          <div className="warehouse-details__info">
            <h3>Contact Information</h3>
            <p>
              +1 (647) 504-0911
              {/* {warehouseDetails.phone} */}
            </p>
            <p>
              glyon@instock.com
              {/* {warehouseDetails.email} */}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="warehouse-details__bottom">
        {inventoryList.map((item) => (
          <inventoryList />
        ))}
      </div> */}
    </main>
  );
};

export default WarehouseDetails;
