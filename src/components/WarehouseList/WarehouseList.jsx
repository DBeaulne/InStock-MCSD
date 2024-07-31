import React, { useEffect, useState, useCallback } from "react";
import "./WarehouseList.scss";
import Warehouse from "./Warehouse";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

// MAP FUNCTION TO BE ADDED //

const WarehouseList = (warehouse) => {
	let location = "Washington"; // temporary variable, delete once warehouse.map() is ready
	const [showModal, setShowModal] = useState(false);
	const [warehouseIdToDelete, setWarehouseIdToDelete] = useState(null);
	// const [deleteBtn, setDeleteBtn] = useState(false);
	const { id } = useParams();

	// function to reset showModal state to false to close modal window
	const handleClose = () => {
		setShowModal(false);
	};

	// function to set the warehouse ID state and trigger model window display
	const deleteWarehouseBtn = (id) => {
		id = 5; // temporary variable setting, remove once warehouse.map() exists
		setWarehouseIdToDelete(id);
		setShowModal(true);
	};

	// async function to call the api to delete the warehouse based on the ID
	const handleDelete = useCallback(async () => {
		if (warehouseIdToDelete !== null) {
			try {
				await axios.delete(`${apiUrl}/warehouses/${warehouseIdToDelete}`);
				console.log("Warehouse deleted"); // temp debug log, delete before submission
				handleClose();
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
						<SearchBar
							classname={"warehouses__form-input"}
							placeholder={"Search..."}
						/>
						<Button
							className={"warehouse__form-button"}
							text={"+ Add New Warehouse"}
						/>
					</form>
				</div>
				<div className="warehouses__wrapper">
					{/* {warehouse.map(() => {

      })} */}
					<Warehouse
						location={location} /* temporary location prop */
						deleteWarehouseBtn={deleteWarehouseBtn} /* temp prop until warehouse.map() exists */
					/>
				</div>
				{showModal && (
					<Modal
						handleClose={handleClose}
						handleDelete={handleDelete}
						title={`Delete ${location} warehouse?`}
						text={`Please confirm that you'd like to delete the ${location} warehouse from the list of warehouses. You won't be able to undo this action.`}
					/>
				)}
			</section>
		</>
	);
};

export default WarehouseList;
