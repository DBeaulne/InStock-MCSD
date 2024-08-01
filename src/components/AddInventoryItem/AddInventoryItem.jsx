import React, { useEffect, useState } from "react";
import "./AddInventoryItem.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import InventoryForm from "../InventoryForm/InventoryForm";
import axios from "axios";
import { apiUrl } from "../../App";

const AddInventoryItem = () => {
  const navigate = useNavigate();
  //const categories = ["A", "b", "c"];
  //const warehouses = [1, 2, 3];
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In stock");
  const [quantity, setQuantity] = useState("0");
  const [warehouse, setWarehouse] = useState("");

  useEffect(() => {
    getWarehousesList();
    console.log(warehouses);
  }, []);
  const resetForm = () => {
    setItemName("");
    setDescription("");
    setCategory("Please Select");
    setStatus("In stock");
    setQuantity("0");
    setWarehouse("Please Select");
  };

  const getWarehousesList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/warehouses`);
      if (response.status === 200) {
        return response.data;
      }
      const warehouseData = response.data;
      const warehouses = warehouseData.map((warehouse) => {
        return {
          id: warehouse.id,
          warehouseName: warehouse.warehouse_name,
        };
      });

      setWarehouses([...new Set(warehouses)]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const warehouseId = await

    const newInventory = {
      //warehouse_id: warehouseId,
      item_name: itemName,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
    };

    try {
      const response = await axios.post(`${apiUrl}/inventory`, newInventory);
      if (response.status === 200) {
        return response;
      }
      resetForm();
      navigate(-1);
    } catch (e) {
      console.log(e);
    }
  };

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
        <InventoryForm
          categories={categories}
          warehouses={warehouses}
          itemName={itemName}
          description={description}
          category={category}
          status={status}
          quantity={quantity}
          warehouse={warehouse}
          setitemName={setItemName}
          setDescription={setDescription}
          setCategory={setCategory}
          setStatus={setStatus}
          setQuantity={setQuantity}
          setWarehouse={setWarehouse}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default AddInventoryItem;
