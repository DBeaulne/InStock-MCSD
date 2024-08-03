import React, { useEffect, useState } from "react";
import "./WarehouseDetails.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import TableHeader from "../TableHeader/TableHeader";
import axios from "axios";
import { apiUrl } from "../../App";

const WarehouseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

  const tableHeaders = ["Inventory Item", "Category", "Status", "Quantity"];

  useEffect(() => {
    getWarehouse(id);
  }, [id]);

  const getWarehouse = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/warehouses/${id}`);
      console.log(data);
      setWarehouseDetails(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="warehouse-details">
      <div className="warehouse-details__container">
        <div className="warehouse-details__top">
          <img
            className="warehouse-details__back-icon"
            src={ArrowBackIcon}
            alt="Back Icon"
            onClick={() => {
              navigate(-1);
            }}
          />
          <h1 className="warehouse-details__heading">
            {warehouseDetails.warehouse_name}
          </h1>
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
            <p className="warehouse-details__txt">
              {warehouseDetails.address},
              <br className="warehouse-details__line-break" />{" "}
              {warehouseDetails.city}, {warehouseDetails.country}
            </p>
          </div>
          <div className="warehouse-details__mid-container2">
            <div className="warehouse-details__name">
              <h3 className="warehouse-details__sub-heading">Contact Name</h3>
              <p className="warehouse-details__txt">
                {warehouseDetails.contact_name}
              </p>
              <p className="warehouse-details__txt">
                {warehouseDetails.contact_position}
              </p>
            </div>
            <div className="warehouse-details__info">
              <h3 className="warehouse-details__sub-heading">
                Contact Information
              </h3>
              <p className="warehouse-details__txt">
                {warehouseDetails.contact_phone}
              </p>
              <p className="warehouse-details__txt">
                {warehouseDetails.contact_email}
              </p>
            </div>
          </div>
        </div>
        <div className="warehouse-details__bottom">
          <TableHeader columns={tableHeaders} />
          {/* {inventoryList.map((item) => (
          <inventoryList />
        ))} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
          mollitia rem corrupti rerum numquam fugit odio fugiat alias nobis,
          obcaecati sequi neque, autem doloremque aspernatur similique.
          Voluptatum, quod blanditiis!
        </div>
      </div>
    </section>
  );
};

export default WarehouseDetails;
