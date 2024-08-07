import React, { useState, useCallback, useEffect } from "react";
import "./WarehouseList.scss";
import Warehouse from "./Warehouse";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

const WarehouseList = () => {
	//enable navigation:
	const navigate = useNavigate();

	const [showWarehouseModal, setShowWarehouseModal] = useState(false);
	const [warehouseIdToDelete, setWarehouseIdToDelete] = useState([]);
	const [warehouse, setWarehouse] = useState([]);
	const [warehousesData, setWarehousesData] = useState([]);
	const { id } = useParams();

	const [searchParams, setSearchParams] = useSearchParams();
	const searchParam = {
		searchValue: searchParams.get("search") || "",
		setSearchParams,
	};
	useEffect(() => {
		//clear search params if search bar is ''
		!searchParam.searchValue && setSearchParams();
		//if all inventory is loaded, filter it to only the items that match the search.
		// allInventory &&
		setWarehousesData(
			warehouse.filter(
				w =>
					w.city?.toLowerCase().includes(searchParam.searchValue) ||
					w.address
						?.toLowerCase()
						.includes(searchParam.searchValue) ||
					w.warehouse_name
						?.toLowerCase()
						.includes(searchParam.searchValue) ||
					w.country
						?.toLowerCase()
						.includes(searchParam.searchValue) ||
					w.contact_name
						?.toLowerCase()
						.includes(searchParam.searchValue) ||
					w.contact_position
						?.toLowerCase()
						.includes(searchParam.searchValue) ||
					w.contact_phone
						?.toLowerCase()
						.includes(searchParam.searchValue) ||
					w.contact_email
						?.toLowerCase()
						.includes(searchParam.searchValue)
			)
		);
	}, [searchParam.searchValue, warehouse, setSearchParams]);

	useEffect(() => {
		getWarehouses();
	}, [id]);

	useEffect(() => {
		getWarehouses();
	}, [id]);

	// function to get all the warehouses in the company
	const getWarehouses = async id => {
		try {
			const { data } = await axios.get(`http://localhost:8080/warehouses`);
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
	const deleteWarehouseBtn = warehouseId => {
		const deleteWarehouse = warehouse.filter(
			deleteWarehouse => deleteWarehouse.id === warehouseId
		);
		setWarehouseIdToDelete(deleteWarehouse);
		setShowWarehouseModal(true);
	};

	// async function to call the api to delete the warehouse based on the ID
	const handleDelete = useCallback(async () => {
		if (warehouseIdToDelete !== null) {
			try {
				await axios.delete(
					`${apiUrl}/warehouses/${warehouseIdToDelete[0].id}`
				);
				getWarehouses().then(() => handleClose());
			} catch (e) {
				console.log("Error deleting warehouse:", e);
			}
		}
	}, [warehouseIdToDelete]);

	//handle edit button click:
	const editWarehouse = async id => {
		//move to edit page for selected warehouse:
		navigate(`/warehouses/${id}/edit`);
	};

	return (
		<>
			<section className='warehouses'>
				<div className='warehouses__wrapper--form'>
					<h1 className='warehouses__title'>Warehouses</h1>
					<div className='warehouses__form'>
						<Input
							classname={"warehouses__form-input"}
							placeholder={"Search..."}
							search
							onChange={e =>
								searchParam.setSearchParams({
									search: e.target.value.toLocaleLowerCase(),
								})
							}
							value={searchParam.searchValue}
						/>
						<Button
							className={"warehouse__form-button"}
							text={"+ Add New Warehouse"}
						/>
					</div>
				</div>
				<div className='warehouses__wrapper'>
					<Warehouse 
					tableHeader={'warehouse--table-header'}/>
					{warehousesData.map(warehouse => {

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
								editWarehouseBtn={() => {
									editWarehouse(id);
								}}
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
