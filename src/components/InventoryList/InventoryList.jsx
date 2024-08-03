import React, { useState, useCallback, useEffect } from "react";
import "./InventoryList.scss";
import Inventory from "./Inventory";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

const InventoryList = () => {
	let itemName = "Windbreaker"; // temporary variable, delete once invetory.map() is present
	const [showInventoryModal, setShowInventoryModal] = useState(false);
	const [inventoryItemIdToDelete, setInvetoryItemIdToDelete] = useState(null);
	const [inventory, setInventory] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getInventories();
	}, [id]);

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

	// function to set the warehouse ID state and trigger model window display
	const deleteInventoryItemBtn = (id) => {
		setInvetoryItemIdToDelete(id);
		setShowInventoryModal(true);
	};

	// async function to call the api to delete the warehouse based on the ID
	const handleDelete = useCallback(
		async (id) => {
			if (inventoryItemIdToDelete !== null) {
				try {
					await axios.delete(`${apiUrl}/inventory/${inventoryItemIdToDelete}`);
					getInventories().then(() => handleClose());
				} catch (e) {
					console.log("Error deleting item:", e);
				}
			}
		},
		[inventoryItemIdToDelete]
	);

	return (
		<>
			<section className="inventories">
				<div className="inventories__wrapper--form">
					<h1 className="inventories__title">Inventory</h1>
					<form className="inventories__form">
						<SearchBar
							classname={"inventories__form-input"}
							placeholder={"Search..."}
						/>
						<Button
							className={"inventories__form-button"}
							text={"+ Add New Item"}
						/>
					</form>
				</div>

				<div className="inventories__wrapper">
					{inventory.map((item) => {
						const { category, id, item_name, quantity, status, warehouse_name } = item;

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
						title={`Delete ${itemName} inventory item?`}
						text={`Please confirm that you'd like to delete ${itemName} from the inventory list. You won't be able to undo this action.`}
					/>
				)}
			</section>
		</>
	);
};

export default InventoryList;
