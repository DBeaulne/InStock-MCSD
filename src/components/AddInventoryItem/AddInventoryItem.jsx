import { useEffect, useState } from "react";
import "./AddInventoryItem.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Input/Input";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Button from "../Button/Button";
import errorIcon from "../../assets/icons/error-24px.svg";

import { apiUrl } from "../../App";

const AddInventoryItem = () => {
	const [formData, setFormData] = useState({
		warehouse_id: "",
		item_name: "",
		description: "",
		category: "",
		status: "In Stock",
		quantity: 0,
	});

	const [errors, setErrors] = useState({});
	const [categories, setCategories] = useState([]);
	const [warehouses, setWarehouses] = useState([]);

	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => {
			const updatedFormData = { ...prev, [name]: value };

			if (name === "status" && value === "Out of Stock") {
				updatedFormData.quantity = "0";
			}

			if (errors[name]) {
				setErrors(prev => {
					const updatedErrors = { ...prev };
					delete updatedErrors[name];
					return updatedErrors;
				});
			}
			return updatedFormData;
		});
	};

	const getWarehouses = async () => {
		try {
			const response = await axios.get(`${apiUrl}/warehouses`);
			setWarehouses(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	const getCategories = async () => {
		try {
			const response = await axios.get(`${apiUrl}/inventory`);
			const categoryList = response.data.map(i => i.category);
			const uniqueCategories = Array.from(new Set(categoryList));
			setCategories(uniqueCategories);
		} catch (e) {
			console.log(e);
		}
	};

	const validateForm = () => {
		const newErrors = {};

		Object.keys(formData).forEach(key => {
			if (!formData[key] && key !== "quantity") {
				newErrors[key] = "This field is required.";
			}
		});

		if (
			formData.status === "In Stock" &&
			(!formData.quantity || formData.quantity === "0")
		) {
			newErrors.quantity =
				"Quantity is required when status is in stock.";
		} else if (formData.quantity && isNaN(formData.quantity)) {
			newErrors.quantity = "Quantity must be a number.";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}
		const confirmSubmit = window.confirm("Add new item?");
		formData.quantity = parseInt(formData.quantity);
		console.log(formData);
		try {
			if (confirmSubmit) {
				const response = await axios.post(
					`${apiUrl}/inventory`,
					formData
				);
				if (response.status === 200) {
					setFormData({
						warehouse_id: "",
						item_name: "",
						description: "",
						category: "",
						status: "In Stock",
						quantity: 0,
					});
				}
				navigate(`/inventory`);
			}
		} catch (e) {
			console.log("Failed to add inventory item.", e);
		}
	};
	const handleCancel = async () => {
		const confirmCancel = window.confirm(
			"Are you sure you want to cancel? Your changes will not be saved."
		);
		if (confirmCancel) {
			navigate(`/inventory`);
		}
	};

	useEffect(() => {
		getWarehouses();
		getCategories();
	}, []);

	return (
		<div className='add-inventory__container'>
			<div className='add-inventory__top'>
				<div className='add-inventory__back-icon-container'>
					<img
						className='add-inventory__back-icon'
						src={ArrowBackIcon}
						alt='Back Icon'
						onClick={() => {
							navigate("/inventory");
						}}
					/>
				</div>

				<h1 className='add-inventory__heading'>
					Add New Inventory Item
				</h1>
			</div>
			<div className='add-inventory__bottom'>
				<form className='inventory-form'>
					<div className='inventory-form__wrapper'>
						<div className='inventory-form__top'>
							<h2 className='inventory-form__heading'>
								Item Details
							</h2>
							{/* ITEM NAME */}
							<div className='inventory-form__group'>
								<label
									className='inventory-form__label'
									htmlFor='item_name'>
									Item Name
								</label>
								<Input
									classname={
										errors.item_name
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Item name"}
									name='item_name'
									value={formData.item_name}
									onChange={handleChange}
									type='text'
								/>
								{errors.item_name && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>
										<p className='error__txt'>
											{errors.item_name}
										</p>
									</div>
								)}
							</div>

							{/* DESCRIPTION */}
							<div className='inventory-form__group'>
								<label
									className='inventory-form__label'
									htmlFor='description'>
									Description
								</label>
								<Input
									txtArea
									classname={
										errors.description
											? "site_input--error"
											: ""
									}
									placeholder='Please enter a brief item description...'
									name='description'
									value={formData.description}
									onChange={handleChange}
								/>
								{errors.description && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error icon'
										/>
										<p className='error__txt'>
											{errors.description}
										</p>
									</div>
								)}
							</div>

							{/* CATEGORY */}
							<div className='inventory-form__group'>
								<label
									className='inventory-form__label'
									htmlFor='category'>
									Category
								</label>
								<DropdownMenu
									options={categories}
									className={
										errors.category
											? "dropdown__menu--error"
											: ""
									}
									name='category'
									value={formData.category}
									onChange={handleChange}
								/>
								{errors.category && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error icon'
										/>
										<p className='error__txt'>
											{errors.category}
										</p>
									</div>
								)}
							</div>
						</div>
						<div className='inventory-form__bottom'>
							<h2 className='inventory-form__heading'>
								Item Availablity
							</h2>
							<div className='inventory-form__group'>
								<label
									className='inventory-form__label'
									htmlFor='status'>
									Status
								</label>
								<div className='inventory-form__radio-group'>
									<div className='inventory-form__radio'>
										<input
											type='radio'
											name='status'
											id='in-stock'
											value='In Stock'
											onChange={handleChange}
											checked={
												formData.status === "In Stock"
											}
											className='inventory-form__radio-input'
										/>
										<label
											className={`inventory-form__radio-txt ${
												formData.status === "In Stock"
													? "inventory-form__radio-txt--active"
													: ""
											}`}
											htmlFor='in-stock'>
											In stock
										</label>
									</div>
									<div className='inventory-form__radio'>
										<input
											type='radio'
											name='status'
											id='out-of-stock'
											value='Out of Stock'
											onChange={handleChange}
											checked={
												formData.status ===
												"Out of Stock"
											}
											className='inventory-form__radio-input'
										/>
										<label
											className={`inventory-form__radio-txt ${
												formData.status ===
												"Out of Stock"
													? "inventory-form__radio-txt--active"
													: ""
											}`}
											htmlFor='in-stock'>
											Out of Stock
										</label>
									</div>
								</div>
								{errors.status && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error icon'
										/>
										<p className='error__txt'>
											{errors.status}
										</p>
									</div>
								)}
							</div>

							{formData.status === "In Stock" && (
								<div className='inventory-form__qty-container inventory-form__group'>
									<label
										className='inventory-form__label'
										htmlFor='quantity'>
										Quantity
									</label>
									<Input
										number
										classname={
											errors.quantity
												? "site_input--error site_input--number"
												: "site_input--number"
										}
										placeholder='0'
										name='quantity'
										min='0'
										value={formData.quantity}
										onChange={handleChange}
									/>
									{errors.quantity && (
										<div className='error'>
											<img
												className='error__icon'
												src={errorIcon}
												alt='error icon'
											/>
											<p className='error__txt'>
												{errors.quantity}
											</p>
										</div>
									)}
								</div>
							)}
							<div className='inventory-form__group'>
								<label
									className='inventory-form__label'
									htmlFor='warehouse'>
									Warehouse
								</label>
								<DropdownMenu
									options={warehouses}
									className={
										errors.warehouse_id
											? "dropdown__menu--error"
											: ""
									}
									name='warehouse_id'
									value={formData.warehouse_id}
									onChange={handleChange}
									warehouse
								/>
								{errors.warehouse_id && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error icon'
										/>
										<p className='error__txt'>
											{errors.warehouse_id}
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='inventory-form__actions'>
						<Button
							className='btn btn--sec inventory-form__button'
							type='button'
							text='Cancel'
							onClick={handleCancel}
						/>
						<Button
							className='btn btn--prim inventory-form__button'
							type='submit'
							text='+ Add Item'
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddInventoryItem;
