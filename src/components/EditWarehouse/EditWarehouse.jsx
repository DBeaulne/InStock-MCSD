//Imports:
import axios from "axios";
import "./EditWarehouse.scss";
import { apiUrl } from "../../App";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Assets:
import errorIcon from "../../assets/icons/error-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
//Components:
import Input from "../Input/Input";
import Button from "../Button/Button";
import { compileString } from "sass";

export default function EditWarehouse() {
	//enable navigation:
	const navigate = useNavigate();

	//grab warehouse id:
	const { id } = useParams();

	//grab warehouse data:
	const getCurrentWarehouseData = async id => {
		try {
			//get data from server:
			const { data } = await axios.get(`${apiUrl}/warehouses/${id}`);
			//set data in state:
			setValues(data);
		} catch (error) {
			console.log(
				`Encountered and error while fetching warehouse data: ${error.message}`
			);
		}
	};

	//auto-populate form state with current warehouse values:
	const [values, setValues] = useState({});
	useEffect(() => {
		if (id) {
			getCurrentWarehouseData(id);
		}
	}, [id]);

	//unpack form values:
	const {
		warehouse_name,
		address,
		city,
		country,
		contact_name,
		contact_position,
		contact_phone,
		contact_email,
	} = values;

	//track any input errors:
	const [errors, setErrors] = useState({
		warehouse_name: false,
		address: false,
		city: false,
		country: false,
		contact_name: false,
		contact_position: false,
		contact_phone: false,
		contact_email: false,
	});

	//input handler:
	const handleInputChange = event => {
		const { name, value } = event.target;
		//spread values back into state, changing only the modified value:
		setValues({
			...values,
			[name]: value,
		});

		//clear error state when user starts typing:
		setErrors({
			...errors,
			[name]: false,
		});
	};

	//function to valdiate email input against a regular expression:
	const validateEmail = email => {
		const emailRegex =
			/^(([^<>(/){}[\]\\+-_~!#$%^&*?'=.,;:\s@"]+(\.[^<>(/){}[\]\\!#$%^+&*'?~`=\-_.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;
		return email.match(emailRegex);
	};

	//function to validate phone number against a regular expression:
	const validatePhoneNum = phoneNum => {
		const phoneNumRegex =
			/^(\+?1 ?)?\(?[0-9]{3}\)?-? ?[0-9]{3}-? ?[0-9]{4}$/;
		return phoneNum.match(phoneNumRegex);
	};

	//form submission handler:
	const handleSubmit = async event => {
		//prevent default actions:
		event.preventDefault();

		//check for input values:
		const newErrors = {
			//'newErrors' is true if a value is empty:
			warehouse_name: !warehouse_name,
			address: !address,
			city: !city,
			country: !country,
			contact_name: !contact_name,
			contact_position: !contact_position,
			contact_phone: !contact_phone,
			contact_email: !contact_email,
		};

		//validate phone number and email:
		const validPhoneNumber = validatePhoneNum(contact_phone);
		//
		//
		console.log(`validPhoneNumber`);
		//
		//
		const validEmail = validateEmail(contact_email);
		if (!validPhoneNumber) {
			setErrors({
				...errors,
				[contact_phone]: true,
			});
		}
		if (!validEmail) {
			setErrors({
				...errors,
				[contact_email]: true,
			});
		}

		//log any errors in state:
		setErrors(newErrors);

		//if there are no errors, continue:
		if (!newErrors) {
			//confirm that the user wants to make the changes:
			const confirmSubmit = window.confirm(
				"Make these changes to the current warehouse?"
			);

			//if changes are accepted, navigate back to warehouse list:
			if (confirmSubmit) {
				navigate(`/warehouses`);
			}
		}

		try {
			await axios
				//make changes to database entry:
				.put(`${apiUrl}/warehouses/${id}`, values)
				//revert form data:
				.then(() => {
					setValues({
						warehouse_name: { warehouse_name },
						address: { address },
						city: { city },
						country: { country },
						contact_name: { contact_name },
						contact_position: { contact_position },
						contact_phone: { contact_phone },
						contact_email: { contact_email },
					});
				});
		} catch (error) {
			console.log(
				"Encountered an error while attempting to edit the warehouse:",
				error.message
			);
		}
	};

	//discard-changes handler:
	const handleDiscardChanges = async () => {
		const cancelConfirmation = window.confirm(
			"Discard changes to the current warehouse?"
		);
		if (cancelConfirmation) {
			navigate(`/warehouses`);
		}
	};

	return (
		<div className='edit-warehouse__wrapper'>
			<div className='edit-warehouse__top-container'>
				<img
					className='edit-warehouse__back-icon'
					src={backArrow}
					alt='Back Icon'
					onClick={() => {
						navigate("/warehouse");
					}}
				/>

				<h1 className='edit-warehouse__heading'>Edit Warehouse</h1>
			</div>

			<div>
				<form className='form'>
					<div className='form__wrapper'>
						<div className='form__first-container'>
							<h2 className='form__heading'>Warehouse Details</h2>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='warehouse_name'>
									Warehouse Name
								</label>

								<Input
									classname={
										errors.warehouse_name
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Warehouse Name"}
									name='warehouse_name'
									value={warehouse_name}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.warehouse_name && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											This field is required
										</p>
									</div>
								)}
							</div>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='address'>
									Street Address
								</label>

								<Input
									classname={
										errors.address
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Street Address"}
									name='address'
									value={address}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.address && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											This field is required
										</p>
									</div>
								)}
							</div>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='city'>
									City
								</label>

								<Input
									classname={
										errors.city
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"City"}
									name='city'
									value={city}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.city && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											This field is required
										</p>
									</div>
								)}
							</div>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='country'>
									Country
								</label>

								<Input
									classname={
										errors.country
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Country"}
									name='country'
									value={country}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.country && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											This field is required
										</p>
									</div>
								)}
							</div>
						</div>

						<div className='form__second-container'>
							<h2 className='form__heading'>Contact Details</h2>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='contact_name'>
									Contact Name
								</label>

								<Input
									classname={
										errors.contact_name
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Contact Name"}
									name='contact_name'
									value={contact_name}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.contact_name && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											This field is required
										</p>
									</div>
								)}
							</div>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='contact_position'>
									Position
								</label>

								<Input
									classname={
										errors.contact_position
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Position"}
									name='contact_position'
									value={contact_position}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.contact_position && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											This field is required
										</p>
									</div>
								)}
							</div>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='contact_phone'>
									Phone Number
								</label>

								<Input
									classname={
										errors.contact_phone
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Phone Number"}
									name='contact_phone'
									value={contact_phone}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.contact_phone && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											Please enter a valid phone number
										</p>
									</div>
								)}
							</div>

							<div className='form__group'>
								<label
									className='form__label'
									htmlFor='contact_email'>
									Email
								</label>

								<Input
									classname={
										errors.contact_email
											? "site_input--input site_input--error"
											: "site_input--input"
									}
									placeholder={"Email"}
									name='contact_email'
									value={contact_email}
									onChange={handleInputChange}
									type='text'
								/>

								{errors.contact_email && (
									<div className='error'>
										<img
											className='error__icon'
											src={errorIcon}
											alt='error-icon'
										/>

										<p className='error__text'>
											Please enter a valid email address
										</p>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className='form__button-wrapper'>
						<Button
							className='btn btn--sec form__button'
							type='button'
							text='Cancel'
							onClick={handleDiscardChanges}
						/>

						<Button
							className='btn btn--prim form__button'
							type='submit'
							text='Save'
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
