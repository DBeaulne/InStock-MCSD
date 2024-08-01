import React, { useState, useCallback } from "react";
import "./InventoryList.scss";
import Inventory from "./Inventory";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

// MAP FUNCTION TO BE ADDED //

const InventoryList = (inventory) => {
	let itemName = "monitor"; // temporary variable, delete once invetory.map() is present
	const [showModal, setShowModal] = useState(false);
	const [inventoryItemIdToDelete, setInvtoryItemIdToDelete] = useState(null);
	const { id } = useParams();

	// function to reset showModal state to false to close modal window
	const handleClose = () => {
		setShowModal(false);
	};

	// function to set the warehouse ID state and trigger model window display
	const deleteInventoryItemBtn = (id) => {
		id = 5; // temporary variable setting, remove once warehouse.map() exists
		setInvtoryItemIdToDelete(id);
		setShowModal(true);
	};

	// async function to call the api to delete the warehouse based on the ID
	const handleDelete = useCallback(async () => {
		if (inventoryItemIdToDelete !== null) {
			try {
				await axios.delete(`${apiUrl}/warehouses/${inventoryItemIdToDelete}`);
				console.log("Warehouse deleted"); // temp debug log, delete before submission
				handleClose();
			} catch (e) {
				console.log("Error deleting warehouse:", e);
			}
		}
	}, [inventoryItemIdToDelete]);

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
					{/* {inventory.map(() => {

      })} */}
					<Inventory
						itemName={itemName} /* temporary item prop */
						deleteInventoryItemBtn={deleteInventoryItemBtn} /* temp prop until inventory.map() exists */
					/>
				</div>
				{showModal && (
					<Modal
						handleClose={handleClose}
						handleDelete={handleDelete}
						title={`Delete ${itemName} warehouse?`}
						text={`Please confirm that you'd like to delete the ${itemName} warehouse from the list of warehouses. You won't be able to undo this action.`}
					/>
				)}
			</section>
		</>
	);
};

export default InventoryList;
