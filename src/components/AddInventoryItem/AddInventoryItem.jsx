import React, { useState } from "react";
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
  const [category, setCatgory] = useState("");
  const [status, setStatus] = useState("In stock");
  const [quantity, setQuantity] = useState("0");
  const [warehouse, setWarehouse] = useState("");

  const resetForm = () => {
    setItemName("");
    setDescription("");
    setCatgory("Please Select");
    setStatus("In stock");
    setQuantity("0");
    setWarehouse("Please Select");
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
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default AddInventoryItem;
