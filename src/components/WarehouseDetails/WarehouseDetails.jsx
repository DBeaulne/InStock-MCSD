import React, { useState } from "react";
import "./WarehouseDetails.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
const WarehouseDetails = () => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

  return (
    <main className="warehouse-details">
      <div className="warehouse-details__container">
        <div className="warehouse-details__top">
          <img
            className="warehouse-details__back-icon"
            src={ArrowBackIcon}
            alt="Back Icon"
            onClick={() => {}}
          />
          <h2 className="warehouse-details__heading">
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
          <div className="warehouse-details__mid-container1">
            <h3 className="warehouse-details__sub-heading">
              Warehouse Address
            </h3>
            <p>33 Pearl Street SW, Washington,USA</p>
          </div>
          <div className="warehouse-details__mid-container2">
            <div className="warehouse-details__name">
              <h3 className="warehouse-details__sub-heading">Contact Name</h3>
              <p className="warehouse-details__txt">
                Graeme Lyon
                {/* {warehouseDetails.manager} */}
              </p>
              <p className="warehouse-details__txt">
                Warehouse Manager
                {/* {warehouseDetails.designation} */}
              </p>
            </div>
            <div className="warehouse-details__info">
              <h3 className="warehouse-details__sub-heading">
                Contact Information
              </h3>
              <p className="warehouse-details__txt">
                +1 (647) 504-0911
                {/* {warehouseDetails.phone} */}
              </p>
              <p className="warehouse-details__txt">
                glyon@instock.com
                {/* {warehouseDetails.email} */}
              </p>
            </div>
          </div>
        </div>
        <div className="warehouse-details__bottom">
          {/* {inventoryList.map((item) => (
          <inventoryList />
        ))} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
          mollitia rem corrupti rerum numquam fugit odio fugiat alias nobis,
          obcaecati sequi neque, autem doloremque aspernatur similique.
          Voluptatum, quod blanditiis!
        </div>
      </div>
    </main>
  );
};

export default WarehouseDetails;
