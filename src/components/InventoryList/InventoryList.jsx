import React, { useState, useCallback, useEffect } from "react";
import "./InventoryList.scss";
import Inventory from "./Inventory";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

const InventoryList = () => {
  const [showInventoryModal, setShowInventoryModal] = useState(false);

  const [inventoryItemIdToDelete, setInvetoryItemIdToDelete] = useState([]);
  const [inventory, setInventory] = useState([]);

  const [inventoryData, setInventoryData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParam = {
    searchValue: searchParams.get("search") || "",
    setSearchParams,
  };

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getInventories();
  }, [id]);

  useEffect(() => {
    !searchParam.searchValue && setSearchParams();
    setInventoryData(
      inventory.filter(
        (item) =>
          item.item_name?.toLowerCase().includes(searchParam.searchValue) ||
          item.category?.toLowerCase().includes(searchParam.searchValue) ||
          item.warehouse_name?.toLowerCase().includes(searchParam.searchValue)
      )
    );
  }, [searchParam.searchValue, inventory, setSearchParams]);

  // function to get all the inventory items
  const getInventories = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/inventory`);
      setInventory(data);
    } catch (e) {
      console.log(e);
    }
  };

  // function to reset showModal state to false to close modal window
  const handleClose = () => {
    setShowInventoryModal(false);
  };

  // function to delete the inventory item based on the id passed in from the inventory list
  // filter the list of inventory to isolate the inventory item based on the id passed in
  // then set the state "setInvetoryItemIdToDelete" with the resultant array
  // then show the modal component
  const deleteInventoryItemBtn = (inventoryId) => {
    const deleteItem = inventory.filter(
      (deleteItem) => deleteItem.id === inventoryId
    );
    setInvetoryItemIdToDelete(deleteItem);

    setShowInventoryModal(true);
  };

  // async function to call the api to delete the warehouse based on the ID

  const handleDelete = useCallback(async () => {
    if (inventoryItemIdToDelete !== null) {
      try {
        await axios.delete(
          `${apiUrl}/inventory/${inventoryItemIdToDelete[0].id}`
        );
        getInventories().then(() => handleClose());
      } catch (e) {
        console.log("Error deleting item:", e);
      }
    }
  }, [inventoryItemIdToDelete]);

  return (
    <>
      <section className="inventories">
        <div className="inventories__wrapper--form">
          <h1 className="inventories__title">Inventory</h1>
          <div className="inventories__form">
            <Input
              classname={"inventories__form-input"}
              placeholder={"Search..."}
              search
              onChange={(e) =>
                searchParam.setSearchParams({
                  search: e.target.value.toLocaleLowerCase(),
                })
              }
              value={searchParam.searchValue}
            />
            <Button
              className={"inventories__form-button"}
              text={"+ Add New Item"}
              onClick={() => {
                navigate("/inventory/add");
              }}
            />
          </div>
        </div>

        <div className="inventories__wrapper">
          {inventoryData.map((item) => {
            const {
              category,
              id,
              item_name,
              quantity,
              status,
              warehouse_name,
            } = item;

            const isAvailable = () => {
              if (quantity === 0) {
                return "inventory__text--tag-outstock";
              } else {
                return "inventory__text--tag-instock";
              }
            };
            return (
              <Inventory
                key={id}
                InventoryId={id}
                itemName={item_name}
                availablity={isAvailable()}
                category={category}
                quantity={quantity}
                status={status}
                warehouse={warehouse_name}
                deleteInventoryItemBtn={deleteInventoryItemBtn}
              />
            );
          })}
        </div>
        {showInventoryModal && (
          <Modal
            handleClose={handleClose}
            handleDelete={handleDelete}
            title={`Delete ${inventoryItemIdToDelete[0].item_name} inventory item?`}
            text={`Please confirm that you'd like to delete ${inventoryItemIdToDelete[0].item_name} from the inventory list. You won't be able to undo this action.`}
          />
        )}
      </section>
    </>
  );
};

export default InventoryList;
