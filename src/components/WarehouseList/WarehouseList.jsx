import React, { useState, useCallback, useEffect } from "react";
import "./WarehouseList.scss";
import Warehouse from "./Warehouse";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

const WarehouseList = () => {
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [warehouseIdToDelete, setWarehouseIdToDelete] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getWarehouses();
  }, [id]);

  // function to get all the warehouses in the company
  const getWarehouses = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/warehouses`);
      setWarehouse(data);
    } catch (e) {
      console.log(e);
    }
  };

  // function to reset showModal state to false to close modal window
  const handleClose = () => {
    setShowWarehouseModal(false);
  };

  // function to delete the warehouse based on the id passed in from the warehouse list
  // filter the list of warehouses to isolate the warehouse based on the id passed in
  // then set the state "setWarehouseIdToDelete" with the resultant array
  // then show the modal component
  const deleteWarehouseBtn = (warehouseId) => {
    const deleteWarehouse = warehouse.filter(
      (deleteWarehouse) => deleteWarehouse.id === warehouseId
    );
    setWarehouseIdToDelete(deleteWarehouse);
    setShowWarehouseModal(true);
  };

  // async function to call the api to delete the warehouse based on the ID
  const handleDelete = useCallback(async () => {
    if (warehouseIdToDelete !== null) {
      try {
        await axios.delete(`${apiUrl}/warehouses/${warehouseIdToDelete[0].id}`);
        getWarehouses().then(() => handleClose());
      } catch (e) {
        console.log("Error deleting warehouse:", e);
      }
    }
  }, [warehouseIdToDelete]);

  return (
    <>
      <section className="warehouses">
        <div className="warehouses__wrapper--form">
          <h1 className="warehouses__title">Warehouses</h1>
          <form className="warehouses__form">
            <Input
              classname={"site_input--input warehouses__form-input"}
              placeholder={"Search..."}
              search
            />
            <Button
              className={"warehouse__form-button"}
              text={"+ Add New Warehouse"}
            />
          </form>
        </div>
        <div className="warehouses__wrapper">
          {warehouse.map((warehouse) => {
            const {
              id,
              warehouse_name,
              address,
              city,
              country,
              contact_email,
              contact_name,
              contact_phone,
            } = warehouse;
            return (
              <Warehouse
                key={id}
                warehouseId={id}
                location={warehouse_name}
                address={address}
                city={city}
                country={country}
                phone={contact_phone}
                email={contact_email}
                name={contact_name}
                deleteWarehouseBtn={deleteWarehouseBtn}
                // editWarehouseBtn={} /* temp prop until warehouse.map() exists */
              />
            );
          })}
        </div>
        {showWarehouseModal && (
          <Modal
            handleClose={handleClose}
            handleDelete={handleDelete}
            title={`Delete ${warehouseIdToDelete[0].warehouse_name} warehouse?`}
            text={`Please confirm that you'd like to delete the ${warehouseIdToDelete[0].warehouse_name} warehouse from the list of warehouses. You won't be able to undo this action.`}
          />
        )}
      </section>
    </>
  );
};

export default WarehouseList;
