import React, { useEffect, useState } from "react";
import "./AddWarehouse.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { apiUrl } from "../../App";

const AddWarehouse = () => {
	const [formData, setFormData] = useState({
		warehouse_name: "",
		address: "",
		city: "",
		country: "",
		contact_name: "",
		contact_position: "",
		contact_phone: "",
		contact_email: ""
	});

	const [errors, setErrors] = useState({});
	const [warehouses, setWarehouses] = useState([]);
	const navigate = useNavigate;

	const getWarehouses = async () => {
		try {
			const response = await axios.get(`${apiUrl}/warehouses`);
			setWarehouses(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	const handleCancel = async () => {
		const confirmCancel = window.confirm("Are you sure you want to cancel? Your changes will not be saved.");
		if (confirmCancel) {
			navigate(`/inventory`);
		}
	};

	useEffect(() => {
		getWarehouses();
	}, []);

	return (
		<div className="add-warehouse__container">
			<div className="add-warehouse__top">
				<img
					className="add-warehouse__back-icon"
					src={ArrowBackIcon}
					alt="Back Icon"
					onClick={() => {
						navigate("/warehouse");
					}}
				/>
				<h1 className="add-warehouse__heading">add new warehouse</h1>
			</div>
			<div className="add-warehouse__bottom">
				<form className="warehouse-form">
					<div className="warehouse-form__wrapper">
						<div className="warehouse-form__top">
							<h2 className="warehouse-form__heading">warehouse details</h2>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddWarehouse;
