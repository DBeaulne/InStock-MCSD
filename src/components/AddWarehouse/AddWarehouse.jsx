import { useEffect, useState } from "react";
import "./AddWarehouse.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Input/Input";
import Button from "../Button/Button";
import errorIcon from "../../assets/icons/error-24px.svg";
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
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			const updatedFormData = { ...prev, [name]: value };

			if (errors[name]) {
				setErrors((prev) => {
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

	const validateForm = () => {
		const newErrors = {};

		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
				newErrors[key] = "This field is required.";
			}
			if (formData[key] && key === "contact_email") {
				const isValidEmail = validateEmail(formData.contact_email);
				if (!isValidEmail) {
					newErrors[key] = "Invalid email";
				}
			}
			if (formData[key] && key === "contact_phone") {
				const isValidPhoneNum = validatePhoneNum(formData.contact_phone);
				if (!isValidPhoneNum) {
					newErrors[key] = "Invalid Phone Number";
				}
			}
		});
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const validateEmail = (email) => {
		const emailRegex =
			/^(([^<>(/){}[\]\\+-_~!#$%^&*?'=.,;:\s@"]+(\.[^<>(/){}[\]\\!#$%^+&*'?~`=\-_.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;
		return email.match(emailRegex);
	};

	const validatePhoneNum = (phoneNum) => {
		const phoneNumRegex = /^(\+?1 ?)?\(?[0-9]{3}\)?-? ?[0-9]{3}-? ?[0-9]{4}$/;
		return phoneNum.match(phoneNumRegex);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}
		const confirmSubmit = window.confirm("Add new warehouse?");
		if (!confirmSubmit) {
			navigate("/warehouses");
			return;
		}
		try {
			await axios
				.post(`${apiUrl}/warehouses`, formData)
				.then(() => {
					setFormData({
						warehouse_name: "",
						address: "",
						city: "",
						country: "",
						contact_name: "",
						contact_position: "",
						contact_phone: "",
						contact_email: ""
					});
				})
				.then(navigate("/warehouses"));
		} catch (e) {
			console.log("Failed to add warehouse.", e);
		}
	};

	const handleCancel = async () => {
		const confirmCancel = window.confirm("Are you sure you want to cancel? Your changes will not be saved.");
		if (confirmCancel) {
			navigate(`/warehouses`);
		}
	};

	useEffect(() => {
		getWarehouses();
	}, [warehouses]);

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
							{/* Warehouse Name */}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="warehouse_name">
									warehouse name
								</label>
								<Input
									classname={errors.warehouse_name ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Warehouse Name"}
									name="warehouse_name"
									value={formData.warehouse_name}
									onChange={handleChange}
									type="text"
								/>
								{errors.warehouse_name && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.warehouse_name}</p>
									</div>
								)}
							</div>

							{/* Street Address*/}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="address">
									street address
								</label>
								<Input
									classname={errors.address ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Street Address"}
									name="address"
									value={formData.address}
									onChange={handleChange}
									type="text"
								/>
								{errors.address && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.address}</p>
									</div>
								)}
							</div>

							{/* City*/}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="city">
									City
								</label>
								<Input
									classname={errors.city ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"City"}
									name="city"
									value={formData.city}
									onChange={handleChange}
									type="text"
								/>
								{errors.city && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.city}</p>
									</div>
								)}
							</div>

							{/* Country*/}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="country">
									Country
								</label>
								<Input
									classname={errors.country ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Country"}
									name="country"
									value={formData.country}
									onChange={handleChange}
									type="text"
								/>
								{errors.country && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.country}</p>
									</div>
								)}
							</div>
						</div>

						<div className="warehouse-form__bottom">
							<h2 className="warehouse-form__heading">Contact Details</h2>
							{/* Contact Name */}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="contact_name">
									Contact Name
								</label>
								<Input
									classname={errors.contact_name ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Contact Name"}
									name="contact_name"
									value={formData.contact_name}
									onChange={handleChange}
									type="text"
								/>
								{errors.contact_name && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.contact_name}</p>
									</div>
								)}
							</div>

							{/* Position */}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="contact_position">
									Position
								</label>
								<Input
									classname={errors.contact_position ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Position"}
									name="contact_position"
									value={formData.contact_position}
									onChange={handleChange}
									type="text"
								/>
								{errors.contact_position && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.contact_position}</p>
									</div>
								)}
							</div>

							{/* Phone Number */}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="contact_phone">
									Phone Number
								</label>
								<Input
									classname={errors.contact_phone ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Phone Number"}
									name="contact_phone"
									value={formData.contact_phone}
									onChange={handleChange}
									type="text"
								/>
								{errors.contact_phone && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.contact_phone}</p>
									</div>
								)}
							</div>

							{/* Email */}
							<div className="warehouse-form__group">
								<label
									className="warehouse-form__label"
									htmlFor="contact_email">
									Email
								</label>
								<Input
									classname={errors.contact_email ? "site_input--input site_input--error" : "site_input--input"}
									placeholder={"Email"}
									name="contact_email"
									value={formData.contact_email}
									onChange={handleChange}
									type="email"
								/>
								{errors.contact_email && (
									<div className="error">
										<img
											className="error__icon"
											src={errorIcon}
											alt="error-icon"
										/>
										<p className="error__txt">{errors.contact_email}</p>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="warehouse-form__actions">
						<Button
							className="btn btn--sec warehouse-form__button"
							type="button"
							text="Cancel"
							onClick={handleCancel}
						/>
						<Button
							className="btn btn--prim warehouse-form__button"
							type="submit"
							text="+ Add Warehouse"
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddWarehouse;
